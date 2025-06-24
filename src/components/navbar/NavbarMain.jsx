import React from "react";
import { NavbarLogo } from "./NavbarLogo";
import { NavbarLinks } from "./NavbarLinks";
import { NavbarBtn } from "./NavbarBtn";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="max-w-[1300px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
      <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-lightPrimary items-center p-6 rounded-r-full rounded-l-full border-[0.5px] border-secondColor">
        <NavbarLogo />
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <NavbarLinks />
        </div>
        <NavbarBtn />
      </div>
      <div className="flex lg:hidden sm:block p-6 bg-lightPrimary items-center justify-center rounded-full border-[0.5px] border-secondColor">
        <button
          className="text-2cl p-3 border border-secondColor rounded-full text-white"
          onClick={toggleMenu}
        >
          <GiHamburgerMenu />
        </button>
      </div>
    </nav>
  );
};
