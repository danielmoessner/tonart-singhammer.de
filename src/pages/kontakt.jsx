import { graphql } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import { MailIcon, PhoneIcon, LocationMarkerIcon } from '@heroicons/react/outline';
import Seo from '../components/Seo';
// import { Link, graphql } from 'gatsby';
// import { Transition } from '@headlessui/react';
// import Container from '../components/Container';
import Layout from '../components/Layout';
import Header from '../components/Header';

function Page({ data }) {
  const page = data.pagesYaml;

  return (
    <Layout>
      <Seo
        title={page.meta.title}
        description={page.meta.description}
        image={page.meta.image.childImageSharp.resize.src}
      />
      <Header header={page.header} />
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8 md:gap-y-16">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Kontaktdaten</h2>
              <div className="mt-3">
                <p className="text-lg text-gray-500">
                  Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst
                  amet. Sapien tortor lacus arcu.
                </p>
              </div>
              <div className="mt-9">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <PhoneIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <p>+1 (555) 123 4567</p>
                    <p className="mt-1">Mon-Fri 8am to 6pm PST</p>
                  </div>
                </div>
                <div className="mt-6 flex">
                  <div className="flex-shrink-0">
                    <MailIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <p>support@example.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 md:mt-0">
              <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Adresse</h2>
              <div className="mt-3">
                <p className="text-lg text-gray-500">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, repellat error
                  corporis doloribus similique, voluptatibus numquam quam, quae officiis facilis.
                </p>
              </div>
              <div className="mt-9">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <LocationMarkerIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <address>
                      Strasse <br />
                      12121 Stadt
                    </address>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 md:mt-0">
              <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Workshops</h2>
              <div className="mt-3">
                <p className="text-lg text-gray-500">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, repellat error
                  corporis doloribus similique, voluptatibus numquam quam, quae officiis facilis.
                </p>
              </div>
              <div className="mt-9">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <LocationMarkerIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <address>
                      Strasse <br />
                      12121 Stadt
                    </address>
                  </div>
                </div>
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
    pagesYaml(slug: { eq: "contact" }) {
      ...meta
      ...header
    }
  }
`;
