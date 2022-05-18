import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {
  CalendarIcon,
  FolderIcon,
  HomeIcon,
  MenuAlt2Icon,
  UsersIcon,
  XIcon,
} from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import { appendClasses } from '../../utils/helpers';
import Web2Logo from '../logo/web2-logo';
import Web3Logo from '../logo/web3-logo';
import TFLogo from '../logo/tf-logo';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

/* eslint-disable-next-line */
export interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();
  const routeParts = router.pathname.split('/');
  const realm = routeParts[1];
  const realmColor = realm === 'web2' ? 'bg-blue-500' : 'bg-red-500';

  const navigation = [
    { name: 'Home', href: '/', icon: HomeIcon, current: false },
    {
      name: 'About',
      href: '#',
      icon: UsersIcon,
      current: ['web2', 'web3'].some((r) => r === routeParts[1]),
    },
    { name: 'Projects', href: '#', icon: FolderIcon, current: false },
    { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  ];

  console.log('router', router);

  return (
    <div>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 md:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 flex z-40">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel
                className={appendClasses(
                  realmColor,
                  'relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4'
                )}
              >
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex-shrink-0 flex items-center px-4">
                  <TFLogo className="w-[75%] m-auto " />
                </div>
                <div className="mt-5 flex-1 h-0 overflow-y-auto">
                  <nav className="px-2 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-white text-black dark:bg-gray-800 dark:text-white'
                            : 'text-gray-800 hover:bg-gray-300 dark:text-gray-200 dark:hover:bg-gray-400',
                          'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                        )}
                      >
                        <item.icon
                          className="mr-4 flex-shrink-0 h-6 w-6 text-black dark:text-white"
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
            <div className="flex-shrink-0 w-14" aria-hidden="true">
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div
          className={appendClasses(
            realmColor,
            'flex flex-col flex-grow pt-5 overflow-y-auto'
          )}
        >
          <div className="flex items-center flex-shrink-0 px-4">
            <TFLogo className="w-[75%] m-auto" />
          </div>
          <div className="mt-5 flex-1 flex flex-col">
            <nav className="flex-1 px-2 pb-4 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-white text-black dark:bg-gray-800 dark:text-white'
                      : 'text-gray-800 hover:bg-gray-300 dark:text-gray-200 dark:hover:bg-gray-400',
                    'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                  )}
                >
                  <item.icon
                    className="mr-3 flex-shrink-0 h-6 w-6 text-black dark:text-white"
                    aria-hidden="true"
                  />
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Static sidebar for mobile */}
      <div className="md:pl-64 flex flex-col flex-1">
        <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow-md border-b border-gray-400">
          {/* Menu Toggle */}
          <button
            type="button"
            className="px-4 border-r-2 border-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-transparent md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
          </button>

          <div className="flex-1 px-4 flex justify-end">
            <div className="ml-auto flex items-center md:ml-6">
              {realm === 'web2' ? (
                <Web2Logo className="w-10" invert={true} />
              ) : (
                <Web3Logo className="w-10" invert={true} />
              )}
            </div>
          </div>
        </div>

        <main>
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-gray-400">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Layout;
