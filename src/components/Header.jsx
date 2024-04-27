import React, { useState } from "react";

const Header = () => {
  return (
    <>
      <div className="header">
        <header className="w-full h-full flex flex-row items-start justify-evenly py-4 max-w-full">
          <div className="flex gap-x-5">
            <img
              className="w-[100px] relative object-contain shrink-0 z-[2]"
              loading="lazy"
              alt=""
              src="/group-1@2x.png"
            />
            <img
              className="w-[200px] relative max-h-full object-contain z-[2]"
              loading="lazy"
              alt=""
              src="/text-logo-2-1@2x.png"
            />
          </div>
          <nav className="flex items-center justify-center">
            <nav className="flex justify-start mt-8 gap-x-4 max-w-full text-left text-xl text-white font-text-body-2">
              <div>Home</div>
              <div>About</div>
              <div>Why Us</div>
              <div>Tokenomics</div>
              <div>Roadmap</div>
            </nav>
          </nav>
          <div className="flex flex-col items-start justify-start pt-[19px] box-border shrink-0">
            <button className="cursor-pointer py-3.5 px-[47px] bg-[transparent] rounded-xl flex flex-row z-[2] border-[1px] border-solid border-color-primary-color-2 hover:bg-deepskyblue-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-deepskyblue-100">
              <div className="relative text-xl leading-[150%] font-medium font-text-body-2 text-color-primary-color-2 text-center inline-block min-w-[119px] mq450:text-base mq450:leading-[24px]">
                Whitepaper
              </div>
            </button>
          </div>
        </header>
      </div>
      <MobileHeader />
    </>
  );
};

export default Header;

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header-mobile">
      <header className=" flex flex-row items-center justify-between py-4 px-8">
        <div className="flex items-center">
          <img
            className="w-[100px] object-contain"
            loading="lazy"
            alt=""
            src="/group-1@2x.png"
          />
          <img
            className="w-[200px] object-contain"
            loading="lazy"
            alt=""
            src="/text-logo-2-1@2x.png"
          />
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            <svg
              className="w-6 h-6 text-black cursor-pointer"
              fill="transparent"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </header>
      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-75 z-50 transform transition-transform ${
          isMenuOpen ? "" : "translate-y-full"
        }`}
      >
        <div className="h-screen flex justify-center items-center">
          <ul className="text-center">
            <li>
              <a
                href="home"
                className="text-white font-text-body-2 text-lg block py-4 hover:text-gray-400 transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white font-text-body-2 text-lg block py-4 hover:text-gray-400 transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white font-text-body-2 text-lg block py-4 hover:text-gray-400 transition duration-300"
              >
                Why Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white font-text-body-2 text-lg block py-4 hover:text-gray-400 transition duration-300"
              >
                Tokenomics
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white font-text-body-2 text-lg block py-4 hover:text-gray-400 transition duration-300"
              >
                Roadmap
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
