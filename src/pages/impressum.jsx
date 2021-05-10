import { graphql } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import Seo from '../components/Seo';
// import { Link, graphql } from 'gatsby';
// import { Transition } from '@headlessui/react';
import Container from '../components/Container';
import Layout from '../components/Layout';
import Header from '../components/Header';

function Page({ data }) {
  const page = { html: data.markdownRemark.html, ...data.markdownRemark.frontmatter };

  return (
    <Layout>
      <Seo title={page.meta.title} description={page.meta.description} />
      <Header header={page.header} />
      <section className="py-32">
        <Container>
          <article
            className="prose mx-auto"
            // eslint-disable-next-line
            dangerouslySetInnerHTML={{ __html: page.html }} 
          />
        </Container>
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
    markdownRemark(frontmatter: { slug: { eq: "imprint" } }) {
      html
      frontmatter {
        meta {
          description
          title
        }
        header {
          pre
          title
        }
      }
    }
  }
`;
