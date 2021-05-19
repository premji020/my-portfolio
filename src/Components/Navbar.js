
import React from "react";


function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between bg-gray-800 border-gray-200 text-xl p-6 uppercase">
        <div className="container px-2 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div className="text-green-300 text-3xl font-mono font-extrabold tracking-wider justify-start px-4 ">
              Prem.J
            </div>
            <button
              className="text-green-300 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {" "}
              <i className="fas fa-bars"></i>{" "}
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {navbarOpen && (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                )}
                {!navbarOpen && (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto ">
              <li className="text-blue-50 px-4 hover:text-blue-400 block md:inline-block py-3 border-b-2 border-none ">
                <a href="/">Home</a>
              </li>
              <li className="nav-item text-blue-100 px-4 hover:text-blue-300 block md:inline-block py-3 border-b-2 border-none">
                <a href="about">About</a>
              </li>
              <li className="nav-item text-blue-200 px-4 hover:text-blue-300 block md:inline-block py-3 border-b-2 border-none">
                <a href="skills">Skills</a>
              </li>
              <li className="nav-item text-blue-300 px-4 hover:text-blue-100 block md:inline-block py-3 border-b-2 border-none">
                <a href="work">My Work</a>
              </li>
              <li className="nav-item text-blue-400 px-4 hover:text-blue-50 block md:inline-block py-3 border-b-2 border-none">
                <a href="contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;