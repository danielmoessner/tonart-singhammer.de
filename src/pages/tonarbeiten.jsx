import { graphql } from 'gatsby';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import { XIcon } from '@heroicons/react/outline';
import { Transition } from '@headlessui/react';
import Seo from '../components/Seo';
// import { Link, graphql } from 'gatsby';
// import Container from '../components/Container';
import Navigation from '../components/Navigation';
// import Button from '../components/Button';
import Footer from '../components/Footer';
import Container from '../components/Container';
import Header from '../components/Header';

function Page({ data }) {
  const page = data.pagesYaml;
  const workpieces = data.allWorkYaml.nodes;
  const techniques = data.allTechniqueYaml.nodes;
  const getTechnique = (slug) => techniques.find((technique) => technique.slug === slug).title;
  const [shown, setShown] = useState('');

  return (
    <div>
      <Seo
        title={page.meta.title}
        description={page.meta.description}
        image={page.meta.image.childImageSharp.resize.src}
      />
      <Navigation />
      <Header header={page.header} />

      <section>
        <Container>
          <div className="py-32">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {workpieces.map((piece) => (
                <div key={piece.title}>
                  <div className="aspect-w-16 aspect-h-9">
                    <GatsbyImage
                      style={{ position: 'absolute' }}
                      image={piece.image.childImageSharp.gatsbyImageData}
                      alt={piece.title}
                    />
                    <button
                      className="absolute inset-0 focus:outline-none"
                      onClick={() => setShown(piece.title)}
                      type="button"
                    >
                      <span className="sr-only">Öffnen</span>
                    </button>
                  </div>
                  <div className="mt-1">
                    <p className="text-orange-100 text-sm font-medium rounded-lg bg-adobe-5 px-1.5 py-0.5 inline-block">
                      {getTechnique(piece.technique)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
      {shown && (
        <section className="fixed inset-0 bg-gray-800 bg-opacity-70">
          <div className="absolute inset-10">
            {workpieces.map((piece) => (
              <Transition key={piece.title} show={shown === piece.title}>
                <div className="">
                  <GatsbyImage
                    className="w-full h-full"
                    objectFit="contain"
                    style={{ position: 'static' }}
                    image={piece.image.childImageSharp.gatsbyImageData}
                    alt={piece.title}
                  />
                </div>
              </Transition>
            ))}
          </div>
          <div className="absolute top-0 right-0 z-20">
            <button
              className="p-2 bg-adobe-3 text-gray-050 hover:bg-adobe-4 hover:text-white focus:outline-none"
              onClick={() => setShown('')}
              type="button"
            >
              <XIcon className="w-6 h-6" />
            </button>
          </div>
          <button
            className="inset-0 absolute w-full h-screen cursor-default"
            onClick={() => setShown('')}
            type="button"
          >
            <span className="sr-only">Schließen</span>
          </button>
        </section>
      )}
      <Footer />
    </div>
  );
}

Page.defaultProps = {};

Page.propTypes = {
  // eslint-disable-next-line
  data: PropTypes.object.isRequired,
};

export default Page;

export const query = graphql`
  {
    pagesYaml(slug: { eq: "work" }) {
      meta {
        image {
          childImageSharp {
            resize(width: 1200) {
              src
            }
          }
        }
        description
        title
      }
      header {
        pre
        title
        text
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    allWorkYaml {
      nodes {
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
        technique
        title
      }
    }
    allTechniqueYaml {
      nodes {
        title
        slug
      }
    }
  }
`;
