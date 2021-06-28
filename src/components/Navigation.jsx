import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Logo from './Logo';
import Container from './Container';

function Component() {
  const navigation = [
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
  ];

  return (
    <nav>
      <Popover className="relative bg-adobe-5">
        {({ open }) => (
          <>
            <Container layout="sm">
              <div className="py-6 flex justify-between items-center lg:justify-start lg:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                  <Link className="block" to="/">
                    <Logo />
                  </Link>
                </div>
                <div className="-mr-2 -my-2 lg:hidden">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                    <span className="sr-only">Menü öffnen</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
                <Popover.Group className="hidden lg:flex space-x-10">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className="text-base font-medium text-orange-050 hover:text-orange-100"
                    >
                      {item.name}
                    </Link>
                  ))}
                </Popover.Group>
              </div>
            </Container>

            <Transition
              show={open}
              as={Fragment}
              enter="duration-200 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                static
                className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden"
              >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                  <div className="pt-5 pb-6 px-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <Logo />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                          <span className="sr-only">Menü schließen</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="mt-6">
                      <div className="grid grid-cols-1 gap-7">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            to={item.to}
                            className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                          >
                            <div className="text-base font-medium text-gray-900">{item.name}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </nav>
  );
}

Component.defaultProps = {};

Component.propTypes = {};

export default Component;
