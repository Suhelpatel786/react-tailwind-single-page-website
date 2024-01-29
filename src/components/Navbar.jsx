import React, { useState } from "react";

import { logo, close, menu } from "../assets";
import { navLinks } from "../constants/index";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  return (
    <div className="w-full flex py-6 justify-between items-center">
      <img className="w-[124px] h-[32px]" src={logo} alt="bank-logo" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end item-center">
        <img
          src={toggle ? close : menu}
          alt="menu-button"
          className="cursor-pointer object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        {/* mobile menu  */}

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex-col flex justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal text-white ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                }  cursor-pointer text-[16px]`}
                onClick={()=>setToggle((prev)=>!prev)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
