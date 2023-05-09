import React, { Fragment, useState } from "react";
import Image from "next/image";
import { Dialog, Menu, Transition } from "@headlessui/react";

const Nav = () => {
  const pages = ["Markets", "Trading Platform", "Learn", "Why CMC"];
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div className="pt-4 px-8 lg:px-20 place-items-center">
      <div className="flex justify-between">
        <div className="flex">
          <div>
            <Image
              src="https://assets.cmcmarkets.com/images/cmc-logo.svg"
              alt="cmc-logo"
              width={64}
              height={64}
            />
          </div>
          <div className="md:flex md:align-middle gap-x-4 ml-4 whitespace-nowrap hidden md:pl-8">
            {pages.map((page) => {
              return (
                <a className="link" key={page}>
                  {page}
                </a>
              );
            })}
          </div>
        </div>
        <div className="hidden md:flex gap-x-2">
          <button className="button-ghost" onClick={() => openModal()}>
            Login
          </button>
          <button className="button-primary" onClick={() => openModal()}>
            Start trading
          </button>
        </div>
        <div className="md:hidden">
          <Menu as="div" className="relative inline-block">
            {({ open, close }) => (
              <div>
                <Menu.Button className="inline-flex w-full justify-center py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                  {open ? (
                    <Image
                      src="https://assets.cmcmarkets.com/images/cmc-close-icon.svg"
                      alt="cmc-close"
                      width={40}
                      height={40}
                    />
                  ) : (
                    <Image
                      src="https://assets.cmcmarkets.com/images/cmc-burger-icon.svg"
                      alt="cmc-open-menu"
                      width={40}
                      height={40}
                    />
                  )}
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-80 origin-top-right rounded-xl bg-cmc-bg bg-opacity-30 px-1 shadow-lg backdrop-blur-lg focus:outline-none ">
                    <div className="flex flex-col gap-y-[1px] px-4 self-start divide-y-[1px] divide-y-white">
                      {pages.map((page) => {
                        return (
                          <a className="py-4 link" key={page}>
                            {page}
                          </a>
                        );
                      })}
                    </div>
                    <div className="flex gap-x-2 px-4 pt-8 pb-10">
                      <button
                        className="button-ghost"
                        onClick={() => {
                          openModal();
                          close();
                        }}
                      >
                        Login
                      </button>
                      <button
                        className="button-primary"
                        onClick={() => {
                          openModal();
                          close();
                        }}
                      >
                        Start trading
                      </button>
                    </div>
                  </Menu.Items>
                </Transition>
              </div>
            )}
          </Menu>
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h2"
                    className="text-xl font-medium leading-6 text-gray-900"
                  >
                    Loren Ipsum
                  </Dialog.Title>
                  <div className="text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </div>
                  <div className="flex flex-col gap-y-4">
                    <div className="flex flex-col border-2 border-cmc-blue border-l-4 p-2">
                      <span className="text-black">Email</span>
                      <input
                        placeholder="dummy@email.com"
                        type="email"
                        className="focus:outline-none text-black"
                      />
                    </div>
                    <div className="flex border-2 border-cmc-blue border-l-4 p-2 justify-between">
                      <div className="flex flex-col">
                        <span className="text-black">Password</span>
                        <input
                          id="passwordInput"
                          type="password"
                          placeholder="8 alphanumeric characters"
                          className="focus:outline-none text-black min-w-full"
                        />
                      </div>
                      <button
                        className="text-slate-500 w-fit"
                        onClick={() => {
                          const x = document.getElementById("passwordInput");
                          if (x && x.type === "password") {
                            x.type = "text";
                          } else {
                            x.type = "password";
                          }
                        }}
                      >
                        Show
                      </button>
                    </div>
                  </div>
                  <div className="mt-4 items-center justify-center text-center">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-cmc-green px-4 py-2 text-sm font-medium text-white"
                      onClick={closeModal}
                    >
                      Continue
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Nav;
