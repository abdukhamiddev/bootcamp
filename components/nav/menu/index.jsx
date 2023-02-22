import { MovingLink, UnderlineLink } from "@/components/link";
import React, { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { Power4 } from "gsap";

const Menu = ({ menuOpen, toggleMenu }) => {
  const popOver = useRef(null);
  const popOverBody = useRef(null);
  const backdrop = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline();
    if (menuOpen) {
      tl.to(popOver.current, {
        xPercent: 0,
        opacity: 1,
        ease: Power4.easeOut,
        duration: 1,
      })
        .to(
          popOverBody.current,
          {
            xPercent: 0,
            ease: Power4.easeOut,
            duration: 1,
          },
          "-=1"
        )
        .to(
          backdrop.current,
          {
            autoAlpha: 1,
            backdropFilter: "blur(20px)",
            ease: Power4.easeOut,
            duration: 0.6,
          },
          "-=1"
        );
    } else {
      tl.to(popOver.current, {
        xPercent: 100,
        opacity: 0,
        ease: Power4.easeOut,
        duration: 0.6,
      })
        .to(
          popOverBody.current,
          {
            xPercent: 50,
            ease: Power4.easeOut,
            duration: 1,
          },
          "-=1"
        )
        .to(
          backdrop.current,
          {
            backdropFilter: "blur(0px)",
            autoAlpha: 0,
            ease: Power4.easeOut,
            duration: 0.6,
          },
          "-=1"
        );
    }
  }, [menuOpen]);

  return (
    <>
      <div
        ref={backdrop}
        onClick={toggleMenu}
        className={` ${
          menuOpen ? "w-[100vw] h-[100vh]" : ""
        } bg-[#1d1d1db3] [backdrop-filter:saturate(180%)] absolute top-0 left-0 z-[996] `}
      />
      <aside
        ref={popOver}
        className={`absolute flex items-center  bg-[#fdfdfd] ${
          menuOpen ? "w-[50rem] sm:[w-100vw]" : ""
        }  h-[100vh] top-0 right-0 z-[997] whitespace-nowrap  `}
      >
        <div
          ref={popOverBody}
          className="w-[50rem] h-full px-[5rem] flex-col flex justify-between absolute top-1/2 [transform:translateY(-50%)] overflow-y-scroll"
        >
          <div className="flex items-center justify-between h-full pt-[3rem] ">
            <div className="flex justify-between w-full">
              <div className="menu-col">
                <p>Socials</p>
                <div className="">
                  <div>
                    <MovingLink href="/" text="Instagram" />
                  </div>
                  <div>
                    <MovingLink href="/" text="Twitter" />
                  </div>
                  <div>
                    <MovingLink href="/" text="GitHub" />
                  </div>
                  <div>
                    <MovingLink href="/" text="LinkedIn" />
                  </div>
                  <div>
                    <MovingLink href="/" text="Youtube" />
                  </div>
                </div>
              </div>
              <div className="menu-col">
                <p>Menu</p>
                <div>
                  <div>
                    <MovingLink href="/about" text="About" />
                  </div>
                  <div>
                    <MovingLink href="/volunteer" text="Volunteer" />
                  </div>
                  <div>
                    <MovingLink href="/partner" text="Partner" />
                  </div>
                  <div>
                    <MovingLink href="/initiatives" text="Initiatives" />
                  </div>
                  <div>
                    <MovingLink href="/contact" text="Contact" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p>Get in touchs</p>
            <UnderlineLink href="mailto:latipovabdukhamid@gmail.com">
              latipovabdukhamid@gmail.com
            </UnderlineLink>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Menu;
