import { graphql } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Container from '../components/Container';

function Page({ data }) {
  const page = data.pagesYaml;
  const techniques = data.allTechniqueYaml.nodes;

  return (
    <Layout>
      <Seo
        title={page.meta.title}
        description={page.meta.description}
        image={page.meta.image.childImageSharp.resize.src}
      />
      <Header header={page.header} />

      <div className="py-16 bg-gray-50 overflow-hidden lg:py-32">
        <Container layout="sm">
          <div className="relative space-y-12 lg:space-y-24">
            {techniques.map((technique, index) => (
              <div
                key={technique.title}
                className="relative lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center"
              >
                <div className={`relative ${index % 2 ? 'col-start-2' : ''}`}>
                  <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                    {technique.title}
                  </h3>
                  <p className="mt-3 text-lg text-gray-500">{technique.description}</p>

                  <dl className="mt-10 space-y-10">
                    {technique.features.map((feature) => (
                      <div key={feature.title} className="relative">
                        <dt>
                          <p className="text-lg leading-6 font-medium text-gray-900">
                            {feature.title}
                          </p>
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">{feature.text}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div
                  className={`relative flex justify-center py-8 lg:py-0 ${
                    index % 2 ? 'col-start-1 row-start-1' : ''
                  }`}
                  aria-hidden="true"
                >
                  <GatsbyImage
                    className="relative mx-auto"
                    style={{ width: '490px' }}
                    image={technique.image.childImageSharp.gatsbyImageData}
                    alt={technique.title}
                  />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </Layout>
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
    pagesYaml(slug: { eq: "technique" }) {
      ...meta
      ...header
    }
    allTechniqueYaml {
      nodes {
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
        features {
          text
          title
        }
        description
        title
      }
    }
  }
`;
