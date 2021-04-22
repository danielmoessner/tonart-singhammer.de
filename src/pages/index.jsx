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

function index({ data }) {
  const page = data.pagesYaml;

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

  return (
    <div>
      <>
        <Seo
          title={page.meta.title}
          description={page.meta.description}
          image={page.meta.image.childImageSharp.resize.src}
        />
        <Navigation />
        <main className="bg-adobe-4">
          <div>
            {/* Hero section */}
            <header className="relative">
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-adobe-2" />
              <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                  <div className="absolute inset-0">
                    <img
                      className="h-full w-full object-cover"
                      src="https://images.unsplash.com/photo-1510828998924-405b610a5eec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80"
                      alt="People working on laptops"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-gray-500 to-gray-700 opacity-100"
                      style={{ mixBlendMode: 'multiply' }}
                    />
                  </div>
                  <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                    <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                      <span className="block text-orange-050">Tonarbeiten und</span>
                      <span className="block text-orange-100">Erinnerungsgefäße</span>
                    </h1>
                    <p className="mt-6 max-w-lg mx-auto text-center text-xl text-orange-100 sm:max-w-3xl">
                      Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
                      cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                    </p>
                    <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                      <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                        <div className="text-center">
                          <Button
                            importance="secondary"
                            size="px-6 py-3"
                            ringOffsetClass="ring-offset-gray-900"
                          >
                            Mehr über mich
                          </Button>
                        </div>
                        <div className="text-center">
                          <Button size="px-6 py-3" ringOffsetClass="ring-offset-gray-900">
                            Zu den Tonarbeiten
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            {/* Alternating Feature Sections */}
            <div className="relative pt-16 pb-32 overflow-hidden bg-gradient-to-b from-adobe-2 to-adobe-4">
              <div aria-hidden="true" className="hidden absolute inset-x-0 top-0 h-48 bg-white" />
              <div className="relative">
                <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                  <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                    <div>
                      <div className="mt-6">
                        <h2 className="text-3xl font-extrabold tracking-tight text-orange-050">
                          Über mich
                        </h2>
                        <p className="mt-4 text-lg text-orange-050">
                          Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum
                          malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra
                          duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus
                          ornare pharetra.
                        </p>
                        <div className="mt-6">
                          <Button ringOffsetClass="ring-offset-adobe-2">Mehr erfahren</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-12 sm:mt-16 lg:mt-0">
                    <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                      {/* <img
                        className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                        src="https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg"
                        alt="Inbox user interface"
                      /> */}
                      <GatsbyImage
                        className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:w-auto lg:max-w-none"
                        image={page.about.image.childImageSharp.gatsbyImageData}
                        alt="Über mich Bild"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-24">
                <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                  <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                    <div>
                      <div className="mt-6">
                        <h2 className="text-3xl font-extrabold tracking-tight text-orange-050">
                          Meine Tonarbeiten
                        </h2>
                        <p className="mt-4 text-lg text-orange-050">
                          Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum
                          malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra
                          duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus
                          ornare pharetra.
                        </p>
                        <div className="mt-6">
                          <Button ringOffsetClass="ring-offset-adobe-4">Mehr erfahren</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                    <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                      {/* <img
                        className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                        src="https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg"
                        alt="Customer profile user interface"
                      /> */}
                      <GatsbyImage
                        className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                        image={page.work.image.childImageSharp.gatsbyImageData}
                        alt="Tonarbeit Beispiel Bild"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Gradient Feature Section */}
            <div className="bg-gradient-to-r from-red-800 to-yellow-700 hidden">
              <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
                <h2 className="text-3xl font-extrabold text-white tracking-tight">
                  Inbox support built for efficiency
                </h2>
                <p className="mt-4 max-w-3xl text-lg text-red-200">
                  Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi
                  lobortis. Blandit aliquam sit nisl euismod mattis in.
                </p>
                <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
                  {features.map((feature) => (
                    <div key={feature.name}>
                      <div>
                        <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                          <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <div className="mt-6">
                        <h3 className="text-lg font-medium text-white">{feature.name}</h3>
                        <p className="mt-2 text-base text-red-200">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats section */}
            <div className="relative bg-adobe-3">
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
                  <h2 className="text-sm font-semibold tracking-wide uppercase text-orange-100">
                    Anstehende Veranstaltungen
                  </h2>
                  <p className="mt-3 text-3xl font-extrabold text-orange-050">
                    Was ist demnächst los?
                  </p>
                  <p className="mt-5 text-lg text-orange-100">
                    Rhoncus sagittis risus arcu erat lectus bibendum. Ut in adipiscing quis in
                    viverra tristique sem. Ornare feugiat viverra eleifend fusce orci in quis amet.
                    Sit in et vitae tortor, massa. Dapibus laoreet amet lacus nibh integer quis. Eu
                    vulputate diam sit tellus quis at.
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

            {/* Stats section */}
            <div className="relative bg-adobe-5">
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
                  <h2 className="text-sm font-semibold tracking-wide uppercase text-orange-100">
                    Auftragsarbeiten
                  </h2>
                  <p className="mt-3 text-3xl font-extrabold text-orange-050">
                    Auftragsarbeiten &amp; Erinnerungsgefäße
                  </p>
                  <p className="mt-5 text-lg text-orange-100">
                    Rhoncus sagittis risus arcu erat lectus bibendum. Ut in adipiscing quis in
                    viverra tristique sem. Ornare feugiat viverra eleifend fusce orci in quis amet.
                    Sit in et vitae tortor, massa. Dapibus laoreet amet lacus nibh integer quis. Eu
                    vulputate diam sit tellus quis at.
                  </p>
                  <div className="mt-12 grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2 hidden">
                    {metrics.map((item) => (
                      <p key={item.id}>
                        <span className="block text-2xl font-bold text-orange-050">
                          {item.stat}
                        </span>
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
            </div>

            {/* CTA Section */}
            <div className="bg-white hidden">
              <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
                <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  <span className="block">Ready to get started?</span>
                  <span className="block bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">
                    Get in touch or create an account.
                  </span>
                </h2>
                <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
                  <a
                    href="/"
                    className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-red-600 to-yellow-600 hover:from-red-700 hover:to-yellow-700"
                  >
                    Learn more
                  </a>
                  <a
                    href="/"
                    className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-yellow-800 bg-yellow-050 hover:bg-yellow-100"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
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
      }
    }
  }
`;
