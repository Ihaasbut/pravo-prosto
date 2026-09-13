import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import type { RefObject } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const getScrollTriggerScroller = () => {
  if (typeof window === "undefined") {
    return undefined;
  }

  if (window.innerWidth > 1023) {
    return undefined;
  }

  return document.getElementById("root") ?? undefined;
};

export const useSlideRight = (containerRef: RefObject<HTMLElement | null>) => {
  useGSAP(
    () => {
      const scroller = getScrollTriggerScroller();

      gsap.from(".animate-from-left", {
        x: "-100%",
        opacity: 1,
        ease: "power2.out",
        duration: 0.75,
        stagger: 0.14,
        scrollTrigger: {
          trigger: containerRef.current,
          scroller,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      ScrollTrigger.refresh();
    },
    { scope: containerRef },
  );
};
