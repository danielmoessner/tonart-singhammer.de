import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import Seo from '../components/Seo';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Button from '../components/Button';
import Container from '../components/Container';
import Heading from '../components/Heading';
import Pre from '../components/Pre';
import Post from '../components/Post';

function Page({ data }) {
  const page = data.pagesYaml;
  const events = data.allEventYaml.nodes;

  return (
    <div>
      <>
        <Seo
          title={page.meta.title}
          description={page.meta.description}
          image={page.meta.image.childImageSharp.resize.src}
        />
        <Navigation />
        <header className="bg-adobe-5 relative overflow-hidden">
          <Container layout="sm">
            <div className="lg:pt-36 lg:pb-36">
              <div className="grid grid-cols-3 lg:grid-cols-6">
                <div className="col-span-3 pr-10 pt-10">
                  <div className="text-adobe-4 font-medium tracking-wider uppercase">
                    {page.header.pre}
                  </div>
                  <div className="mt-2">
                    <Heading tag="h1" size="h1" color="text-gray-050">
                      {page.header.title}
                    </Heading>
                  </div>
                  <p className="text-lg font-medium mt-8 text-gray-050">{page.header.text}</p>
                  <div className="flex space-x-3 mt-8">
                    <Button
                      to={page.header.buttonLeft.internalLink}
                      importance="primary"
                      ringOffsetClass="ring-offset-adobe-5"
                    >
                      {page.header.buttonLeft.button}
                    </Button>
                    <Button
                      to={page.header.buttonRight.internalLink}
                      importance="secondary"
                      ringOffsetClass="ring-offset-adobe-5"
                    >
                      {page.header.buttonRight.button}
                    </Button>
                  </div>
                </div>
                <div className="col-span-3 px-20 flex justify-end py-10 lg:py-0">
                  <GatsbyImage
                    className="w-full rounded shadow-xl ring-1 ring-black ring-opacity-5 lg:w-auto lg:max-w-none"
                    image={page.header.image.childImageSharp.gatsbyImageData}
                    alt="Über mich Bild"
                  />
                </div>
              </div>
            </div>
          </Container>
          <div className="absolute w-96 h-96 hidden bottom-0 left-0 bg-adobe-1 -translate-x-1/2 transform translate-y-1/2 z-0" />
        </header>

        <main className="">
          <section className="bg-white py-20 relative overflow-hidden">
            <div className="absolute w-80 h-80 rounded-full top-0 right-0 bg-adobe-1 translate-x-1/2 transform -translate-y-1/2 z-0" />
            <Container layout="sm">
              <div className="py-20">
                <div className="text-center">
                  <Pre color="text-gray-800">{page.about.pre}</Pre>
                  <div className="mt-2">
                    <Heading tag="h2" size="h2">
                      {page.about.title}
                    </Heading>
                  </div>
                  <div className="mt-4 max-w-2xl mx-auto">
                    <Post color="text-gray-700">{page.about.text}</Post>
                  </div>
                </div>
                <div className="mt-12">
                  <div className="grid grid-cols-3 lg:grid-cols-6">
                    <div className="col-span-3">
                      <div className="">
                        <GatsbyImage
                          className="w-full rounded-sm shadow h-full"
                          image={page.about.image.childImageSharp.gatsbyImageData}
                          alt="Über mich Bild"
                        />
                      </div>
                    </div>
                    <div className="col-span-3">
                      <div className="px-3">
                        <dl className="mt-10 space-y-10">
                          {page.about.content.map((item) => (
                            <div key={item.title} className="relative">
                              <dt>
                                <p className="lg:ml-16 font-serif font-bold text-lg leading-6 tracking-wide text-gray-900">
                                  {item.title}
                                </p>
                              </dt>
                              <dd className="mt-2 lg:ml-16 text-base text-gray-500">{item.text}</dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </section>

          <section className="overflow-hidden bg-adobe-2 relative">
            <div className="absolute w-96 hidden h-96 rounded-full bottom-0 left-0 bg-adobe-1 -translate-x-1/2 transform translate-y-1/2 z-0" />
            <div className="p-1">
              <div className="grid grid-cols-3">
                {page.work.images.map((item) => (
                  <div key={item.description} className="p-2 w-full">
                    <div className="bg-adobe-5">
                      <div className="aspect-h-11 aspect-w-16">
                        <GatsbyImage
                          style={{ display: 'block', position: 'absolute' }}
                          image={item.image.childImageSharp.gatsbyImageData}
                          alt={item.description}
                        />
                      </div>
                      <p className="text-right font-light tracking-wide hidden mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="relative bg-adobe-5">
            <div className="h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
              <div className="h-full w-full xl:grid xl:grid-cols-2">
                <div className="h-full xl:relative xl:col-start-2">
                  <GatsbyImage
                    image={page.order.image.childImageSharp.gatsbyImageData}
                    className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
                    alt="Auftragsarbeiten"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-adobe-5 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
                  />
                </div>
              </div>
            </div>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
              <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
                <Pre tag="h2" color="text-orange-100">
                  {page.order.pre}
                </Pre>
                <Heading color="text-orange-050" size="h2">
                  {page.order.title}
                </Heading>
                <p className="mt-5 text-lg text-orange-100">{page.order.text}</p>
                <div className="mt-12">
                  <Button importance="secondary" ringOffsetClass="ring-offset-adobe-3">
                    {page.order.button}
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="relative">
            <div className="hidden md:gap-0absolute w-96 h-96 rounded-full bottom-0 left-0 bg-adobe-1 -translate-x-1/2 transform translate-y-1/2 z-0" />
            <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
              <Pre color="text-adobe-5">{page.events.pre}</Pre>
              <Heading tag="h2" size="h2" color="text-adobe-5">
                {page.events.title}
              </Heading>
              <div className="mt-4 max-w-3xl">
                <Post color="text-adobe-5">{page.events.text}</Post>
              </div>
              <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                {events.map((event) => (
                  <div className="relative" key={event.slug}>
                    <div className="">
                      <div className="text-sm text-adobe-5">{event.start}</div>
                      <div className="mt-1">
                        <Heading tag="h3" size="h3" color="text-adobe-5">
                          {event.title}
                        </Heading>
                      </div>
                      <p className="mt-2 line-clamp-3 text-base text-adobe-5">
                        {event.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="bg-adobe-5 relative">
            <Container layout="sm">
              <div className="py-12 sm:py-24 lg:flex lg:items-center lg:justify-between">
                <Heading tag="h2" size="h3" color="text-orange-050">
                  <span className="block">{page.cta.textTop}</span>
                  <span className="block text-adobe-4">{page.cta.textBottom}</span>
                </Heading>
                <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
                  <Button to={page.cta.internalLink} importance="primary">
                    {page.cta.button}
                  </Button>
                </div>
              </div>
              <div className="border-t border-adobe-4 opacity-20" />
            </Container>
          </div>
        </main>
        <Footer />
      </>
    </div>
  );
}

Page.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};

export default Page;

export const query = graphql`
  {
    pagesYaml(slug: { eq: "home" }) {
      meta {
        image {
          childImageSharp {
            resize(width: 1200) {
              src
            }
          }
        }
        description
        title
      }
      header {
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
        pre
        title
        text
        buttonLeft {
          button
          internalLink
        }
        buttonRight {
          button
          internalLink
        }
      }
      about {
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
        pre
        title
        text
        content {
          title
          text
        }
      }
      work {
        images {
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
          description
        }
      }
      order {
        pre
        title
        text
        button
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      events {
        pre
        title
        text
      }
      cta {
        textTop
        textBottom
        internalLink
        button
      }
    }
    allEventYaml {
      nodes {
        start(formatString: "DD.MM.YY HH:MM")
        end(formatString: "DD.MM.YY HH:MM")
        slug
        title
        description
      }
    }
  }
`;
