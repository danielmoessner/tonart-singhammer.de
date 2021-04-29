import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import {
  ChatAltIcon,
  DocumentReportIcon,
  HeartIcon,
  InboxIcon,
  PencilAltIcon,
  ReplyIcon,
  TrashIcon,
  UsersIcon,
} from '@heroicons/react/outline';
import Seo from '../components/Seo';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Button from '../components/Button';
import Container from '../components/Container';
import Heading from '../components/Heading';
import Pre from '../components/Pre';
import Post from '../components/Post';

function index({ data }) {
  const page = data.pagesYaml;
  const events = data.allEventYaml.nodes;

  const features = [
    {
      name: 'Unlimited Inboxes',
      description:
        'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
      icon: InboxIcon,
    },
    {
      name: 'Manage Team Members',
      description:
        'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
      icon: UsersIcon,
    },
    {
      name: 'Spam Report',
      description:
        'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
      icon: TrashIcon,
    },
    {
      name: 'Compose in Markdown',
      description:
        'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
      icon: PencilAltIcon,
    },
    {
      name: 'Team Reporting',
      description:
        'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
      icon: DocumentReportIcon,
    },
    {
      name: 'Saved Replies',
      description:
        'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
      icon: ReplyIcon,
    },
    {
      name: 'Email Commenting',
      description:
        'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
      icon: ChatAltIcon,
    },
    {
      name: 'Connect with Customers',
      description:
        'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
      icon: HeartIcon,
    },
  ];
  const metrics = [
    {
      id: 2,
      stat: '25K+',
      emphasis: 'Countries around the globe',
      rest: 'lacus nibh integer quis.',
    },
    {
      id: 3,
      stat: '98%',
      emphasis: 'Customer satisfaction',
      rest: 'laoreet amet lacus nibh integer quis.',
    },
    { id: 4, stat: '12M+', emphasis: 'Issues resolved', rest: 'lacus nibh integer quis.' },
  ];
  const transferFeatures = [
    {
      id: 1,
      name: 'Überschrift',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    },
    {
      id: 2,
      name: 'Überschrift',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    },
    {
      id: 3,
      name: 'Überschrift',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    },
  ];

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
          <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 xl:px-0">
            <div className="pt-36 pb-36">
              <div className="grid grid-cols-6">
                <div className="col-span-3 pl-6 pr-10">
                  <div className="text-adobe-4 font-medium tracking-wider uppercase">
                    Brunhilde Singhammer
                  </div>
                  <div className="mt-2">
                    <Heading tag="h1" size="h1" color="text-gray-050">
                      Gestalten mit Ton
                    </Heading>
                  </div>
                  <p className="text-lg font-medium mt-8 text-gray-050">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias dolor libero
                    unde dignissimos at placeat.
                  </p>
                  <div className="flex space-x-3 mt-8">
                    <Button importance="primary" ringOffsetClass="ring-offset-adobe-5">
                      Zu den Projekten
                    </Button>
                    <Button importance="secondary" ringOffsetClass="ring-offset-adobe-5">
                      Mehr über mich
                    </Button>
                  </div>
                </div>
                <div className="col-span-3 flex justify-end">
                  <GatsbyImage
                    className="w-full rounded shadow-xl ring-1 ring-black ring-opacity-5 lg:w-auto lg:max-w-none"
                    image={page.work.image.childImageSharp.gatsbyImageData}
                    alt="Über mich Bild"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute w-96 h-96 hidden bottom-0 left-0 bg-adobe-1 -translate-x-1/2 transform translate-y-1/2 z-0" />
        </header>

        <main className="">
          <section className="bg-white hidden py-20" />

          <section className="bg-white py-20 relative overflow-hidden">
            <div className="absolute w-80 h-80 rounded-full top-0 right-0 bg-adobe-1 translate-x-1/2 transform -translate-y-1/2 z-0" />
            <Container>
              <div className="py-20">
                <div className="text-center">
                  <Pre color="text-gray-800">Brunhilde Singhammer</Pre>
                  <div className="mt-2">
                    <Heading tag="h2" size="h2">
                      Mehr über mich
                    </Heading>
                  </div>
                  <div className="mt-4 max-w-2xl mx-auto">
                    <Post color="text-gray-700">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio assumenda quia
                      repudiandae veritatis ea rerum ut!
                    </Post>
                  </div>
                </div>
                <div className="mt-12">
                  <div className="grid grid-cols-6">
                    <div className="col-span-3">
                      <div className="px-3">
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
                          {transferFeatures.map((item) => (
                            <div key={item.id} className="relative">
                              <dt>
                                <p className="ml-16 font-serif font-bold text-lg leading-6 tracking-wide text-gray-900">
                                  {item.name}
                                </p>
                              </dt>
                              <dd className="mt-2 ml-16 text-base text-gray-500">
                                {item.description}
                              </dd>
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
                      <GatsbyImage
                        className="block"
                        image={item.image.childImageSharp.gatsbyImageData}
                        alt={item.description}
                      />
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
                  <img
                    className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
                    src="http://tonart-singhammer.de/wp-content/uploads/2015/11/Gallerie_1.jpg"
                    alt="People working on laptops"
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
                  Auftragsarbeiten
                </Pre>
                <Heading color="text-orange-050" size="h2">
                  Auftragsarbeiten &amp; Erinnerungsgefäße
                </Heading>
                <p className="mt-5 text-lg text-orange-100">
                  Rhoncus sagittis risus arcu erat lectus bibendum. Ut in adipiscing quis in viverra
                  tristique sem. Ornare feugiat viverra eleifend fusce orci in quis amet. Sit in et
                  vitae tortor, massa. Dapibus laoreet amet lacus nibh integer quis. Eu vulputate
                  diam sit tellus quis at.
                </p>
                <div className="mt-12 grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2 hidden">
                  {metrics.map((item) => (
                    <p key={item.id}>
                      <span className="block text-2xl font-bold text-orange-050">{item.stat}</span>
                      <span className="mt-1 block text-base text-orange-100">
                        <span className="font-medium text-orange-050">{item.emphasis}</span>{' '}
                        {item.rest}
                      </span>
                    </p>
                  ))}
                </div>
                <div className="mt-12">
                  <Button importance="secondary" ringOffsetClass="ring-offset-adobe-3">
                    Zu den Auftragsarbeiten
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="relative">
            <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
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
              <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                {events.map((event) => (
                  <div key={event.slug}>
                    <div className="">
                      <div className="text-sm text-adobe-5">{event.start}</div>
                      <div className="mt-1">
                        <Heading tag="h3" size="h3" color="text-adobe-5">
                          {event.title}
                        </Heading>
                      </div>
                      <p className="mt-2 line-clamp-3 text-base text-adobe-3">
                        {event.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute w-96 h-96 rounded-full bottom-0 left-0 bg-adobe-1 -translate-x-1/2 transform translate-y-1/2 z-0" />
          </section>

          {/* Stats section */}
          <div className="relative bg-adobe-3 hidden">
            <div className="h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
              <div className="h-full w-full xl:grid xl:grid-cols-2">
                <div className="h-full xl:relative xl:col-start-1">
                  <img
                    className="h-full w-full object-cover opacity-75 xl:absolute xl:inset-0"
                    src="https://images.unsplash.com/photo-1562735353-729013249e19?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80"
                    alt="People working on laptops"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute hidden inset-x-0 top-0 h-32 bg-gradient-to-b from-orange-800 xl:inset-y-0 xl:right-0 xl:h-full xl:w-32 xl:bg-gradient-to-l xl:inset-auto"
                  />
                </div>
              </div>
            </div>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-16">
              <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-2 xl:pb-24">
                <Pre className="text-sm font-semibold tracking-wide uppercase text-orange-100">
                  Anstehende Veranstaltungen
                </Pre>
                <Heading tag="h2" size="h2">
                  Was ist demnächst los?
                </Heading>
                <p className="mt-5 text-lg text-orange-100">
                  Rhoncus sagittis risus arcu erat lectus bibendum. Ut in adipiscing quis in viverra
                  tristique sem. Ornare feugiat viverra eleifend fusce orci in quis amet. Sit in et
                  vitae tortor, massa. Dapibus laoreet amet lacus nibh integer quis. Eu vulputate
                  diam sit tellus quis at.
                </p>
                <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6">
                  {metrics.map((item) => (
                    <p key={item.id}>
                      <span className="block text-2xl font-bold text-orange-050">
                        Töpfertechniken ausprobieren
                      </span>
                      <span className="mt-1 block text-base text-orange-100">
                        <span className="font-medium text-orange-050">10.4.2021</span> Wir
                        beschäftigen uns mit unterschiedlichen Töpfertechniken und probieren diese
                        aus.
                      </span>
                    </p>
                  ))}
                  <div>
                    <Button importance="secondary" ringOffsetClass="ring-offset-adobe-3">
                      Zu allen Veranstaltungen
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-adobe-5 relative">
            <Container>
              <div className="sm:py-24 lg:flex lg:items-center lg:justify-between border-b border-adobe-2">
                <Heading tag="h2" size="h3" color="text-orange-050">
                  <span className="block">Auf der Suche nach einem Erinnerungsgefäß?</span>
                  <span className="block text-adobe-4">Ich freue mich auf Ihre Anfrage.</span>
                </Heading>
                <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
                  <Button importance="primary">Jetzt Kontakt aufnehmen</Button>
                </div>
              </div>
            </Container>
          </div>
        </main>
        <Footer />
      </>
    </div>
  );
}

index.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};

export default index;

export const query = graphql`
  {
    allMarkdownRemark(filter: { frontmatter: { collection: { eq: "animal" } } }) {
      nodes {
        frontmatter {
          slug
          excerpt
          category
          title
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
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
      about {
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      work {
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
        images {
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
          description
        }
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
