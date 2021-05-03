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
import Heading from '../components/Heading';
// import Button from '../components/Button';
import Footer from '../components/Footer';
import Container from '../components/Container';

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
      <header className="bg-adobe-5 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 xl:px-0">
          <div className="pt-20 pb-20">
            <div className="grid grid-cols-5">
              <div className="col-span-3 pl-6 pr-10">
                <div className="max-w-lg">
                  <div className="mt-10 text-adobe-4 font-medium tracking-wider uppercase">
                    Tonarbeiten
                  </div>
                  <div className="mt-2">
                    <Heading tag="h1" size="h1" color="text-gray-050">
                      Schaue Dich um
                    </Heading>
                  </div>
                  <p className="text-lg font-medium mt-8 text-gray-050">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias dolor libero
                    unde dignissimos at placeat.
                  </p>
                </div>
              </div>
              <div className="col-span-2 flex justify-end">
                <GatsbyImage
                  className="w-full rounded shadow-xl ring-1 ring-black ring-opacity-5 lg:w-auto lg:max-w-none"
                  image={page.header.image.childImageSharp.gatsbyImageData}
                  alt="Über mich Bild"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-96 h-96 hidden bottom-0 left-0 bg-adobe-1 -translate-x-1/2 transform translate-y-1/2 z-0" />
      </header>
      <section>
        <Container>
          <div className="py-32">
            <div className="grid grid-cols-3 gap-4">
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
                      <span className="sr-only">Open</span>
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
                    className="w-full h-full static"
                    objectFit="contain"
                    image={piece.image.childImageSharp.gatsbyImageData}
                    alt={piece.title}
                  />
                </div>
              </Transition>
            ))}
          </div>
          <div className="absolute top-0 right-0 z-20">
            <button
              className="p-2 bg-adobe-1 text-gray-050 hover:bg-adobe-4 hover:text-white focus:outline-none"
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
