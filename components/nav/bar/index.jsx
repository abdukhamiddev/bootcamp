import Icon from "@/icon";
import Button from "@/shared/button";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import Menu from "../menu";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  // const handleKeydown = useCallback(
  //   (e) => {
  //     if (!menuOpen) return;

  //     if (e.which === 27 || e.key === "Escape") toggleMenu();
  //   },
  //   [menuOpen, toggleMenu]
  // );
  // useEffect(() => {
  //   setTimeout(() => {
  //     window.addEventListener("keydown", (e) => handleKeydown(e));

  //     return () => {
  //       window.removeEventListener("keydown", (e) => handleKeydown(e));
  //     };
  //   }, 100);
  // }, [handleKeydown]);

  return (
    <header
      className="w-full block fixed z-[996]"
      data-scroll
      data-scroll-sticky
      data-scroll-target="#___sticky"
    >
      <div className="w-full mx-auto sm:px-[2.1vw] px-[7vw]">
        <nav
          id="header"
          className="flex items-center justify-between w-full mt-[2rem] [transition:transform_0.35s_ease]"
        >
          <Link
            href="/"
            className="flex self-center no-underline [&_svg]:text-[#5552E6] [&_svg]:w-[200px] [&_svg]:h-[50px] "
          >
            <Icon name="logo" className="relative h-[61px] w-[200px]" />
          </Link>
          <div className="flex items-center">
            <Button className="text-[1vw] font-semibold py-[0.4vw] px-[1.2vw] mr-[2vw]">
              Donate
            </Button>
            <button
              onClick={toggleMenu}
              aria-label="menu"
              className="relative inline-block align-middle"
            >
              <span
                className={`relative inline-block w-6 align-middle z-[998] `}
              >
                <span
                  className={`relative block w-full mb-1 h-[3px] z-[1] bg-black ${
                    menuOpen
                      ? "animate-[hamburgerlineTop_0.75s] top-[4px] [transform:rotate(45deg)_scaleX(1)]"
                      : ""
                  } `}
                />
                <span
                  className={`relative block w-full h-[3px] z-[1] bg-black ${
                    menuOpen
                      ? "animate-[hamburgerlineBottom_0.75s] -top-[3px] [transform:rotate(-45deg)_scaleX(1)]"
                      : ""
                  } `}
                />
              </span>
            </button>
          </div>
          <Menu menuOpen={menuOpen} toggleMenu={toggleMenu} />
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
