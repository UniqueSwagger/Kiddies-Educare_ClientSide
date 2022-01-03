import React, { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, ShoppingCartIcon, XIcon } from "@heroicons/react/outline";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
const Header = () => {
  const navigate = useNavigate();
  const {
    currentUser: { displayName, photoURL },
    handleLogout,
  } = useAuth();
  return (
    <header className=" bg-teal-600">
      <Disclosure as="nav" className="shadow-md">
        {({ open }) => (
          <Fragment>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-teal-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white text-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                {/* Navbar Left Side on large screen */}
                <div className="flex-1 flex items-center justify-center sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    {/* logo */}
                    <h1 className="text-2xl font-medium text-white mb-0 mb-lg-1">
                      Kiddies Educare
                    </h1>
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {/* Navigation menu on large device */}
                      <NavLink
                        to={"/home"}
                        className="text-gray-50  hover:bg-white hover:text-teal-600 px-3 py-2 rounded-md text-lg font-medium text-decoration-none text-none"
                      >
                        Home
                      </NavLink>
                      <NavLink
                        to={"/shop"}
                        className="text-gray-50 hover:bg-white hover:text-teal-600 px-3 py-2 rounded-md text-lg font-medium text-decoration-none text-none"
                      >
                        Shop
                      </NavLink>
                      <NavLink
                        to={"/myOrders"}
                        className="text-gray-50 hover:bg-white hover:text-teal-600 px-3 py-2 rounded-md text-lg font-medium text-decoration-none text-none"
                      >
                        My Orders
                      </NavLink>
                    </div>
                  </div>
                </div>
                {/* Navbar Right Side */}
                <div className="flex items-center pr-2  sm:ml-6 sm:pr-0 space-x-3 text-gray-300">
                  {/* User Name */}
                  <div className="flex items-center pr-2 sm:ml-6 sm:pr-0 space-x-4">
                    <div className="space-x-4 flex items-center">
                      {photoURL && (
                        <img
                          style={{ width: "40px", borderRadius: "50%" }}
                          src={photoURL}
                          loading="lazy"
                          alt="img"
                          referrerPolicy="no-referrer"
                        />
                      )}
                      {displayName && (
                        <span className="text-white text-xl  border-b-2 border-transparent">
                          {displayName}
                        </span>
                      )}
                      <div className="relative cursor-pointer">
                        <ShoppingCartIcon
                          className="h-6 w-6 text-red-600"
                          aria-hidden="true"
                        />

                        <span className="bg-white text-teal-600 px-1 text-xs rounded-md absolute bottom-3 left-4">
                          3
                        </span>
                      </div>
                    </div>
                    {displayName ? (
                      <button
                        onClick={() => [handleLogout(), navigate("/")]}
                        className="px-4 py-2 bg-white text-red-600 font-medium rounded-full "
                      >
                        Logout
                      </button>
                    ) : (
                      <NavLink
                        className="text-white text-xl border-b-2 border-transparent hover:text-orange-400 text-decoration-none"
                        activeclassname="border-orange"
                        to="/login"
                      >
                        Login
                      </NavLink>
                    )}
                  </div>
                  {/* <HeaderCart /> */}

                  {/* cart menu */}

                  {/* cart menu end*/}
                </div>
              </div>
            </div>
            {/* Mobile Menus */}
            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Disclosure.Button>
                  <Link
                    className="text-gray-300 hover:bg-gray-700 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium text-decoration-none"
                    to="/home"
                  >
                    Home
                  </Link>
                </Disclosure.Button>
                <Disclosure.Button>
                  <Link
                    className="text-gray-300 hover:bg-gray-700 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium text-decoration-none"
                    to="/shop"
                  >
                    Shop
                  </Link>
                </Disclosure.Button>
                <Disclosure.Button>
                  <Link
                    className="text-gray-300 hover:bg-gray-700 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium text-decoration-none"
                    to="/myOrders"
                  >
                    My Orders
                  </Link>
                </Disclosure.Button>
              </div>
            </Disclosure.Panel>
          </Fragment>
        )}
      </Disclosure>
    </header>
  );
};

export default Header;
