import { graphql, Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import { CalendarIcon, LocationMarkerIcon } from '@heroicons/react/solid';
import { MailIcon, PhoneIcon } from '@heroicons/react/outline';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Container from '../components/Container';
import Heading from '../components/Heading';
import Pre from '../components/Pre';
import Post from '../components/Post';

function Page({ data }) {
  const page = data.pagesYaml;
  const events = data.allEventYaml.nodes;
  const global = data.settingsYaml;

  return (
    <Layout>
      <Seo
        title={page.meta.title}
        description={page.meta.description}
        image={page.meta.image.childImageSharp.resize.src}
      />
      <Header header={page.header} />

      <section className="bg-white py-32">
        <Container layout="sm">
          <div>
            <Pre color="text-adobe-5">{page.events.pre}</Pre>
            <Heading tag="h2" size="h2" color="text-adobe-5">
              {page.events.title}
            </Heading>
            <div className="mt-4 max-w-3xl">
              <Post color="text-adobe-5">{page.events.text}</Post>
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
                        <div className="ml-2 flex-shrink-0 flex" />
                      </div>
                      <div className="mt-2 text-adobe-5">{event.description}</div>
                      <div className="mt-4 sm:flex sm:justify-between">
                        <div className="sm:flex">
                          <p className="flex items-center text-sm text-adobe-5">
                            <CalendarIcon
                              className="flex-shrink-0 mr-1.5 h-5 w-5 text-adobe-5"
                              aria-hidden="true"
                            />
                            {event.start}
                          </p>
                          {event.location && (
                            <p className="mt-2 flex items-center text-sm text-adobe-5 sm:mt-0 sm:ml-6">
                              <LocationMarkerIcon
                                className="flex-shrink-0 mr-1.5 h-5 w-5 text-adobe-5"
                                aria-hidden="true"
                              />
                              {event.location}
                            </p>
                          )}
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                          <p className="text-adobe-5 hover:underline">{page.events.button}</p>
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
        <Container layout="sm">
          <div>
            <Pre color="text-adobe-5">{page.registration.pre}</Pre>
            <Heading tag="h2" size="h2" color="text-adobe-5">
              {page.registration.title}
            </Heading>
            <div className="mt-4 max-w-3xl">
              <Post color="text-adobe-5">{page.registration.text}</Post>
            </div>
          </div>
          <div className="mt-9">
            <div className="flex">
              <div className="flex-shrink-0">
                <PhoneIcon className="h-6 w-6 text-adobe-5" aria-hidden="true" />
              </div>
              <div className="ml-3 text-base text-adobe-5">
                <p>{global.phone}</p>
              </div>
            </div>
            <div className="mt-6 flex">
              <div className="flex-shrink-0">
                <MailIcon className="h-6 w-6 text-adobe-5" aria-hidden="true" />
              </div>
              <div className="ml-3 text-base text-adobe-5">
                <p>{global.email}</p>
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
      events {
        pre
        title
        text
        button
      }
      registration {
        pre
        title
        text
      }
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
    settingsYaml(slug: { eq: "global" }) {
      phone
      email
    }
  }
`;
