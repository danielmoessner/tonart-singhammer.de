import { graphql } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import Seo from '../components/Seo';
import Button from '../components/Button';
// import { Link, graphql } from 'gatsby';
// import { Transition } from '@headlessui/react';
// import Container from '../components/Container';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Container from '../components/Container';

function Page({ data }) {
  const page = data.pagesYaml;
  const services = data.allMarkdownRemark.nodes.map((node) => ({
    html: node.html,
    ...node.frontmatter,
  }));

  return (
    <Layout>
      <Seo
        title={page.meta.title}
        description={page.meta.description}
        image={page.meta.image.childImageSharp.resize.src}
      />
      <Header header={page.header} />
      <>
        {services.map((service) => (
          <section key={service.title}>
            <div className="py-16 xl:py-36 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
              <Container>
                <div className="relative z-10 mb-8 md:mb-2 md:px-6">
                  <div className="text-base max-w-prose lg:max-w-none">
                    <h2 className="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
                      {service.pre}
                    </h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                      {service.title}
                    </p>
                  </div>
                </div>
                <div className="relative md:bg-white md:p-6">
                  <article
                    className="prose w-full prose-indigo prose-lg text-gray-500 lg:max-w-none"
                    style={{ columnCount: 2 }}
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{ __html: service.html }}
                  />
                  <div className="mt-8 inline-flex rounded-md shadow">
                    <Button to={page.order.ctaButton.internalLink}>
                      {page.order.ctaButton.button}
                    </Button>
                  </div>
                </div>
              </Container>
            </div>
          </section>
        ))}
      </>
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
    pagesYaml(slug: { eq: "order" }) {
      ...meta
      ...header
      order {
        ctaButton {
          button
          internalLink
        }
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { collection: { eq: "service" } } }
      sort: { fields: frontmatter___order }
    ) {
      nodes {
        html
        frontmatter {
          pre
          title
        }
      }
    }
  }
`;
