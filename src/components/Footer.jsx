import React from 'react';
// import PropTypes from 'prop-types';
import { graphql, Link, useStaticQuery } from 'gatsby';
// import { Transition } from '@headlessui/react';
import Container from './Container';
import Logo from './Logo';

function Component() {
  const data = useStaticQuery(graphql`
    {
      settingsYaml(slug: { eq: "global" }) {
        phone
        email
        address
      }
    }
  `);
  const global = data.settingsYaml;

  const footerNavigation = {
    navigation: [
      {
        name: 'Startseite',
        to: '/',
      },
      {
        name: 'Über mich',
        to: '/ueber-mich/',
      },
      {
        name: 'Tonarbeiten',
        to: '/tonarbeiten/',
      },
      {
        name: 'Auftragsarbeiten',
        to: '/auftragsarbeiten/',
      },
      {
        name: 'Veranstaltungen',
        to: '/veranstaltungen/',
      },
      {
        name: 'Töpfertechniken',
        to: '/toepfertechniken/',
      },
      {
        name: 'Kontakt',
        to: '/kontakt/',
      },
    ],
    legal: [
      { name: 'Impressum', to: '/impressum/' },
      { name: 'Datenschutz', to: '/datenschutz/' },
    ],
  };

  return (
    <footer className="bg-adobe-5" aria-labelledby="footerHeading">
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>
      <Container layout="sm">
        <div className="pt-16 pb-8 lg:pt-24">
          <div className="xl:grid xl:grid-cols-6 xl:gap-8">
            <div className="grid grid-cols-2 gap-8 col-span-6 xl:col-span-5">
              <div className="md:grid md:grid-cols-3 md:gap-8">
                <div className="col-span-2">
                  <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                    <Logo />
                  </h3>
                  <ul className="mt-4 space-y-4" />
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-orange-050 tracking-wider uppercase">
                    Navigation
                  </h3>
                  <ul className="mt-4 space-y-4">
                    {footerNavigation.navigation.map((item) => (
                      <li key={item.name}>
                        <Link
                          to={item.to}
                          className="text-base text-orange-100 hover:text-orange-050"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-orange-050 tracking-wider uppercase">
                    Kontakt
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li className="text-base text-orange-100 hover:text-orange-050 whitespace-pre-line">
                      Telefon: {global.phone}
                    </li>
                    <li className="text-base text-orange-100 hover:text-orange-050 whitespace-pre-line">
                      E-Mail: {global.email}
                    </li>
                    <li className="text-base text-orange-100 hover:text-orange-050 whitespace-pre-line">
                      Adresse: <br />
                      {global.address}
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-orange-050 tracking-wider uppercase">
                    Rechtliches
                  </h3>
                  <ul className="mt-4 space-y-4">
                    {footerNavigation.legal.map((item) => (
                      <li key={item.name}>
                        <Link
                          to={item.to}
                          className="text-base text-orange-100 hover:text-orange-050"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-adobe-4 opacity-20 lg:mt-16" />
          <div className="pt-8 md:flex md:items-center md:justify-between">
            <p className="mt-8 text-base text-orange-100 text-opacity-50 md:mt-0 md:order-1">
              &copy; Brunhilde Singhammer
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

Component.defaultProps = {};

Component.propTypes = {};

export default Component;
