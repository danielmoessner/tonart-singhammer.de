import { graphql } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Pre from '../components/Pre';
import Heading from '../components/Heading';
import Post from '../components/Post';
// import Layout from '../components/Layout'

function Page({ data }) {
  const page = { html: data.markdownRemark.html, ...data.markdownRemark.frontmatter };

  return (
    <Layout>
      <Seo
        title={page.meta.title}
        description={page.meta.description}
        image={page.meta.image.childImageSharp.resize.src}
      />
      <section className="bg-white">
        <div className="bg-white overflow-hidden">
          <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="hidden lg:block bg-yellow-050 absolute top-0 bottom-0 left-3/4 w-screen" />
            <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
              <div>
                <Pre color="">{page.header.pre}</Pre>
                <Heading size="h2" tag="h2" color="">
                  {page.header.title}
                </Heading>
              </div>
            </div>
            <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="relative lg:row-start-1 lg:col-start-2">
                <div className="absolute w-96 h-96 rounded-full right-0 top-0 bg-adobe-1 z-0 transform translate-x-1/3 -translate-y-1/3" />
                <svg
                  className="hidden absolute top-0 right-0 -mt-20 -mr-20"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-gray-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
                  />
                </svg>
                <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                  <figure>
                    <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                      <div className="rounded-lg overflow-hidden">
                        <GatsbyImage
                          className="block"
                          image={page.header.image.childImageSharp.gatsbyImageData}
                          alt={page.meta.title}
                          objectFit="cover"
                          objectPosition="center"
                        />
                      </div>
                    </div>
                  </figure>
                </div>
              </div>
              <div className="mt-8 lg:mt-0">
                <div className="text-base max-w-prose mx-auto lg:max-w-none">
                  <Post color="">{page.header.text}</Post>
                </div>
                <div
                  className="mt-5 prose prose-indigo text-gray-0500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1"
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{ __html: page.html }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
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
    markdownRemark(frontmatter: { slug: { eq: "about" } }) {
      html
      frontmatter {
        ...metaMarkdown
        ...headerMarkdown
      }
    }
  }
`;
