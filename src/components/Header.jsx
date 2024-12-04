
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const navItems = [
    { path: "/", label: "Blog" },
    { path: "/projects", label: "Projects" },
    { path: "/about", label: "About" },
    { path: "/newsletter", label: "Newsletter" },
  ];

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const handleToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleMenuToggle = () => {
    setIsMenuOpen((prevMenuState) => !prevMenuState);
  };

  return (
    <header className=" fixed top-0 left-0 w-full bg-white shadow-md z-50 dark:bg-gray-800 ">
      <nav className=" container mx-auto flex items-center justify-between py-4 px-6 ">
        <h1 className="md:text-2xl text-l font-bold text-gray-800 dark:text-gray-100">
          JAYRAJ SINGH RATHORE
        </h1>

        <button
          onClick={handleMenuToggle}
          className="lg:hidden text-gray-600 dark:text-gray-300 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
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

        <div
          className={`absolute lg:static top-16 right-0 bg-white dark:bg-gray-800 lg:bg-transparent lg:dark:bg-transparent w-full lg:w-auto lg:flex lg:items-center lg:space-x-6 px-6 lg:px-0 z-50 ${
            isMenuOpen ? "block" : "hidden"
          } lg:block`}
        >
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="block lg:inline-block text-gray-800 dark:text-gray-300 my-2 lg:my-0 hover:text-blue-500 dark:hover:text-blue-400 transition"
            >
              {item.label}
            </Link>
          ))}
       
          <div className="flex items-center">
            <label
              htmlFor="theme-toggle"
              className="flex items-center cursor-pointer"
            >
              <div className="relative">
                <input
                  type="checkbox"
                  id="theme-toggle"
                  className="sr-only"
                  checked={isDarkMode}
                  onChange={handleToggle}
                />
                <div className="block bg-black dark:bg-white w-14 h-8 rounded-full"></div>
                <div
                  className={`absolute left-1 top-1 w-6 h-6 rounded-full flex items-center justify-center transition-transform ${
                    isDarkMode ? "transform translate-x-6" : ""
                  }`}
                >
                  <img
                    src={
                      isDarkMode
                        ? "https://cdn-icons-png.flaticon.com/128/6889/6889926.png"
                        : "https://cdn-icons-png.flaticon.com/128/8215/8215216.png"
                    }
                    alt={isDarkMode ? "Dark Mode" : "Light Mode"}
                    className="w-5 h-5 "
                  />
                </div>
              </div>
            </label>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
