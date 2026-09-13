import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import type { RefObject } from "react";

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

export const useFadeIn = (containerRef: RefObject<HTMLElement | null>) => {
  useGSAP(
    () => {
      const scroller = getScrollTriggerScroller();

      gsap.from(".animate-fade", {
        y: 28,
        opacity: 0,
        ease: "power2.out",
        duration: 0.7,
        stagger: 0.12,
        scrollTrigger: {
          trigger: containerRef.current,
          scroller,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      ScrollTrigger.refresh();
    },
    { scope: containerRef },
  );
};
