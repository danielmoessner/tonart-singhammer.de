import { graphql, Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import { CalendarIcon, LocationMarkerIcon } from '@heroicons/react/solid';
import { MailIcon, PhoneIcon } from '@heroicons/react/outline';
import Seo from '../components/Seo';
// import { Link, graphql } from 'gatsby';
// import { Transition } from '@headlessui/react';
// import Container from '../components/Container';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Container from '../components/Container';
import Heading from '../components/Heading';
import Pre from '../components/Pre';
import Post from '../components/Post';

function Page({ data }) {
  const page = data.pagesYaml;
  const events = data.allEventYaml.nodes;

  return (
    <Layout>
      <Seo
        title={page.meta.title}
        description={page.meta.description}
        image={page.meta.image.childImageSharp.resize.src}
      />
      <Header header={page.header} />

      <section className="bg-white py-32">
        <Container>
          <div>
            <Pre color="text-adobe-5">Veranstaltungen</Pre>
            <Heading tag="h2" size="h2" color="text-adobe-5">
              Anstehende Veranstaltungen
            </Heading>
            <div className="mt-4 max-w-3xl">
              <Post color="text-adobe-5">
                Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi
                lobortis. Blandit aliquam sit nisl euismod mattis in.
              </Post>
            </div>
          </div>
          <div className="overflow-hidden mt-12">
            <ul className="space-y-2">
              {events.map((event) => (
                <li className="bg-yellow-050 sm:rounded-md" key={event.id}>
                  <Link to="#anmelden" className="block hover:bg-gray-50">
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <Heading element="h3" size="h3" color="text-adobe-5">
                          {event.title}
                        </Heading>
                        <div className="ml-2 flex-shrink-0 flex">
                          <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-adobe-4 text-yellow-050">
                            Offen
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 text-adobe-5">{event.description}</div>
                      <div className="mt-4 sm:flex sm:justify-between">
                        <div className="sm:flex">
                          <p className="flex items-center text-sm text-adobe-5">
                            <CalendarIcon
                              className="flex-shrink-0 mr-1.5 h-5 w-5 text-adobe-2"
                              aria-hidden="true"
                            />
                            {event.start}
                          </p>
                          {event.location && (
                            <p className="mt-2 flex items-center text-sm text-adobe-5 sm:mt-0 sm:ml-6">
                              <LocationMarkerIcon
                                className="flex-shrink-0 mr-1.5 h-5 w-5 text-adobe-2"
                                aria-hidden="true"
                              />
                              {event.location}
                            </p>
                          )}
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                          <p className="text-adobe-5 hover:underline">Jetzt anmelden</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section id="anmelden" className="bg-white pb-40">
        <Container>
          <div>
            <Pre color="text-adobe-5">Anmelden</Pre>
            <Heading tag="h2" size="h2" color="text-adobe-5">
              Ich freue mich auf Ihre Anmeldung
            </Heading>
            <div className="mt-4 max-w-3xl">
              <Post color="text-adobe-5">
                Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi
                lobortis. Blandit aliquam sit nisl euismod mattis in.
              </Post>
            </div>
          </div>
          <div className="mt-9">
            <div className="flex">
              <div className="flex-shrink-0">
                <PhoneIcon className="h-6 w-6 text-adobe-5" aria-hidden="true" />
              </div>
              <div className="ml-3 text-base text-adobe-5">
                <p>+1 (555) 123 4567</p>
                <p className="mt-1">Mon-Fri 8am to 6pm PST</p>
              </div>
            </div>
            <div className="mt-6 flex">
              <div className="flex-shrink-0">
                <MailIcon className="h-6 w-6 text-adobe-5" aria-hidden="true" />
              </div>
              <div className="ml-3 text-base text-adobe-5">
                <p>support@example.com</p>
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
    pagesYaml(slug: { eq: "event" }) {
      ...meta
      ...header
    }
    allEventYaml {
      nodes {
        id
        start(formatString: "DD.MM.YY HH:MM")
        end(formatString: "DD.MM.YY HH:MM")
        slug
        title
        description
        location
      }
    }
  }
`;
