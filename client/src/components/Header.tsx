import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { HiMiniXMark } from "react-icons/hi2";
import { FaBarsStaggered } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

export const Header: React.FC = () => {
  const location = useLocation();

  const [openNav, setOpenNav] = useState(false);
  const [search, setSearch] = useState(false);
  const [mobileSearch, setMobileSearch] = useState(false);

  const toggleSearchVisibility = () => {
    setMobileSearch((prev) => !prev);
  };

  const navbar = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "/about" },
    { id: 2, name: "Sign In", link: "/sign-in" },
  ];

  return (
    <header className="bg-blue-300/20 sticky top-0">
      <div className="container-blog py-6 md:py-8 flex items-center justify-between text-blue-950">
        <div className="text-[28px] sm:text-[34px] font-bold ">
          <span className="text-blue-950/70">Best</span>
          <span>Estate</span>{" "}
        </div>

        <div
          onClick={() => setSearch(true)}
          className="lg:flex hidden relative z-10  items-center bg-white border rounded-md shadow-md px-4"
        >
          <input
            type="text"
            className={`transition-all duration-300 ease-in-out px-1 py-2 outline-none ${
              search ? "w-64 " : "w-52"
            }  focus:outline-none `}
            placeholder="Search..."
          />
          <FiSearch />
        </div>

        <div
          onClick={() => setSearch(false)}
          className={`overflow-input fixed top-0 left-0 w-full h-[100dvh]  ${
            search ? "block" : "hidden"
          }`}
        ></div>

        <ul className="lg:flex hidden  items-center gap-6">
          {navbar.map((item, id) => (
            <a key={id} href={item.link}>
              <li
                className={`text-[18px] font-medium nav-item  ${
                  location.pathname === item.link ? "nav-item-active" : ""
                }`}
              >
                {item.name}
              </li>
            </a>
          ))}
        </ul>

        {/* adaptive version */}

        <div className="flex items-center gap-8 lg:hidden">
          <div className="relative flex items-center">
            <button
              className={`focus:outline-none ${
                mobileSearch ? "hidden" : "block"
              }`}
              onClick={toggleSearchVisibility}
            >
              <FiSearch className="cursor-pointer text-[22px]" />
            </button>
          </div>

          <FaBarsStaggered
            onClick={() => setOpenNav(true)}
            className="text-[22px] cursor-pointer"
          />
        </div>

        <div
          className={`lg:hidden py-6 md:py-8 absolute top-0 left-0 bg-white shadow z-10 w-full transition-all duration-300 ease-in-out ${
            mobileSearch ? "translate-y-[0]" : "translate-y-[-400%]"
          } `}
        >
          <div className="w-[90%] m-auto relative flex items-center">
            <input
              type="text"
              className="text-[20px] outline-none w-full"
              placeholder="Search..."
            />
            <FiSearch className="text-[22px] absolute right-2" />
          </div>
        </div>

        <div
          onClick={() => setMobileSearch(false)}
          className={`lg:hidden overflow-input fixed top-0 left-0 w-full h-[100dvh] backdrop-blur-md bg-white/70 ${
            mobileSearch ? "block" : "hidden"
          }`}
        ></div>
      </div>

      <nav
        className={`lg:hidden fixed top-0 left-0 w-[100%] h-[100dvh] backdrop-blur-md bg-white/70 z-50 transition ease-out duration-300 ${
          openNav ? "translate-y-0" : "translate-y-[-100%]"
        }`}
      >
        <>
          <ul className="lg:hidden flex flex-col h-full items-center justify-center gap-6">
            {navbar.map((item, id) => (
              <a key={id} href={item.link}>
                <li
                  className={`text-[28px] font-medium nav-item  ${
                    location.pathname === item.link ? "nav-item-active" : ""
                  }`}
                >
                  {item.name}
                </li>
              </a>
            ))}
          </ul>
          <HiMiniXMark
            onClick={() => setOpenNav(false)}
            className="cursor-pointer text-[32px] absolute top-[36px] right-8"
          />
        </>
      </nav>
    </header>
  );
};
