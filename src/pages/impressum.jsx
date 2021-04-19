import { graphql } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import Seo from '../components/Seo';
// import { Link, graphql } from 'gatsby';
// import { Transition } from '@headlessui/react';
// import Container from '../components/Container';

function Page({ data }) {
  const page = { html: data.markdownRemark.html, ...data.markdownRemark.frontmatter };

  return (
    <div>
      <Seo title={page.meta.title} description={page.meta.description} />
      <div>{page.meta.title}</div>
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
    markdownRemark(frontmatter: { slug: { eq: "imprint" } }) {
      html
      frontmatter {
        meta {
          description
          title
        }
      }
    }
  }
`;
