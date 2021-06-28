import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
// import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Container from './Container';
import Heading from './Heading';
import GatsbyImageData from '../types/GatsbyImageData';
// import Button from '../components/Button';

function Component({ header }) {
  return (
    <header className="bg-adobe-5 relative overflow-hidden">
      <Container layout="sm">
        <div className="md:py-20 pb-10">
          <div className="grid grid-cols-5">
            <div className="col-span-5 md:col-span-3 md:pl-6 md:pr-10">
              <div className="max-w-lg">
                <div className="mt-6 text-adobe-4 font-medium tracking-wider uppercase">
                  {header.pre}
                </div>
                <div className="mt-2">
                  <Heading tag="h1" size="h1" color="text-gray-050">
                    {header.title}
                  </Heading>
                </div>
                {header.text && (
                  <p className="text-lg font-medium mt-8 text-gray-050">{header.text}</p>
                )}
              </div>
            </div>
            {header.image && (
              <div className="col-span-5 md:col-span-2 flex justify-end pt-10 md:pt-0">
                <GatsbyImage
                  className="w-full rounded shadow-xl ring-1 ring-black ring-opacity-5 lg:w-auto lg:max-w-none"
                  image={header.image.childImageSharp.gatsbyImageData}
                  alt="Über mich Bild"
                />
              </div>
            )}
          </div>
        </div>
      </Container>
      <div className="absolute w-96 h-96 hidden bottom-0 left-0 bg-adobe-1 -translate-x-1/2 transform translate-y-1/2 z-0" />
    </header>
  );
}

Component.defaultProps = {
  header: {
    text: '',
    image: '',
  },
};

Component.propTypes = {
  header: PropTypes.shape({
    pre: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    image: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        gatsbyImageData: GatsbyImageData,
      }),
    }),
  }),
};

export default Component;

export const headerFragment = graphql`
  fragment header on PagesYaml {
    header {
      image {
        childImageSharp {
          gatsbyImageData
        }
      }
      pre
      title
      text
    }
  }
  fragment headerMarkdown on MarkdownRemarkFrontmatter {
    header {
      image {
        childImageSharp {
          gatsbyImageData
        }
      }
      pre
      title
      text
    }
  }
`;
