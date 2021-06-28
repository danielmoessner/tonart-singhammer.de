import { graphql } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import { MailIcon, PhoneIcon, LocationMarkerIcon } from '@heroicons/react/outline';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Container from '../components/Container';

function Page({ data }) {
  const page = data.pagesYaml;
  const global = data.settingsYaml;

  return (
    <Layout>
      <Seo
        title={page.meta.title}
        description={page.meta.description}
        image={page.meta.image.childImageSharp.resize.src}
      />
      <Header header={page.header} />
      <section className="bg-white py-20">
        <Container layout="sm">
          <div className="py-16">
            <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8 md:gap-y-16">
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  {page.contact.titleContact}
                </h2>
                <div className="mt-3">
                  <p className="text-lg text-gray-500">{page.contact.textContact}</p>
                </div>
                <div className="mt-9">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <PhoneIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                    </div>
                    <div className="ml-3 text-base text-gray-500">
                      <p>{global.phone}</p>
                    </div>
                  </div>
                  <div className="mt-6 flex">
                    <div className="flex-shrink-0">
                      <MailIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                    </div>
                    <div className="ml-3 text-base text-gray-500">
                      <p>{global.email}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 md:mt-0">
                <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  {page.contact.titleAddress}
                </h2>
                <div className="mt-3">
                  <p className="text-lg text-gray-500">{page.contact.textAddress}</p>
                </div>
                <div className="mt-9">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <LocationMarkerIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                    </div>
                    <div className="ml-3 text-base text-gray-500">
                      <address className="whitespace-pre-wrap">{global.address}</address>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
    pagesYaml(slug: { eq: "contact" }) {
      ...meta
      ...header
      contact {
        textContact
        titleContact
        textAddress
        titleAddress
      }
    }
    settingsYaml(slug: { eq: "global" }) {
      phone
      email
      address
    }
  }
`;
