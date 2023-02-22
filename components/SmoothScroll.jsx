import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";

export const SmoothScroll = ({ options }) => {
  useEffect(() => {
    const container = window.document.querySelector("#__next");
    const locomotiveScroll = new LocomotiveScroll({
      el: container,
      smooth: true,
      tablet: {
        smooth: false,
      },
      getDirection: true,
      ...options,
    });

    locomotiveScroll.update();
    window.scroll = locomotiveScroll;

    locomotiveScroll.on("scroll", ScrollTrigger.update);
    locomotiveScroll.on("scroll", (func) => {
      if (func.scroll.y > 10) {
        window.document.documentElement.setAttribute("data-at-top", false);
      } else {
        window.document.documentElement.setAttribute("data-at-top", true);
      }

      // Update `data-direction` with scroll direction.
      window.document.window.documentElement.setAttribute(
        "data-direction",
        func.direction
      );
    });

    ScrollTrigger.scrollerProxy(container, {
      scrollTop(value) {
        return arguments.length
          ? locomotiveScroll.scrollTo(value, 0, 0)
          : locomotiveScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: container.style.transform ? "transform" : "fixed",
    });

    setTimeout(() => {
      if (locomotiveScroll) {
        locomotiveScroll.update();
      }
    }, 150);

    return () => {
      locomotiveScroll && locomotiveScroll.destroy();
    };
  }, [locomotiveScroll]); // eslint-disable-line react-hooks/exhaustive-deps
  return null;
};
