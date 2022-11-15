import React from "react";
import { useState } from "react";
import Link from "next/link";
import { Transition } from "@headlessui/react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>
        <nav className="bg-white p-3 mt-0 fixed w-full z-10 pin-t shadow-md rounded-b-lg">
          <div className="max-w-screen-xl mx-auto px-2 py-1">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center w-full">
                <div className="flex-shrink-0">
                  <h1 className="text-2xl font-bold text-neutral-900">
                    <span className="bg-blue-700 text-white p-2 mr-1 mb-0 pb-1 font-nomral">
                      S
                    </span>
                    Sanjay Aggarwal
                  </h1>
                  <span className="text-xs text-gray-700 font-semibold uppercase block mt-3">
                    &quot;Project Manager / Web Developer&quot;
                  </span>
                </div>
                <div className="hidden md:block w-full">
                  <div className="flex space-x-4 w-full justify-end items-center">
                    <Link
                      href="/"
                      className="text-black px-3 rounded-md text-sm font-medium"
                    >
                      About
                    </Link>

                    <Link
                      href="#"
                      className="text-black px-3 rounded-md text-sm font-medium"
                    >
                      Projects
                    </Link>

                    <Link
                      href="#"
                      className="text-black px-3 rounded-md text-sm font-medium"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-primary inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <div className="md:hidden" id="mobile-menu">
                <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  <Link
                    href="/"
                    className="hover:bg-green-100 text-black px-3 py-2 rounded-md text-sm font-medium block"
                  >
                    Home
                  </Link>

                  <Link
                    href="#"
                    className="hover:bg-green-100 text-black px-3 py-2 mb-4 rounded-md text-sm font-medium block"
                  >
                    Projects
                  </Link>

                  <Link
                    href="#"
                    className="text-black px-3 rounded-md text-sm font-medium"
                  >
                    contact
                  </Link>
                </div>
              </div>
            )}
          </Transition>
        </nav>
      </div>
    </>
  );
};
