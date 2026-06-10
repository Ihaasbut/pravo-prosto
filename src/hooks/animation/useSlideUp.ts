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

export const useSlideUp = (containerRef: RefObject<HTMLElement | null>) => {
    useGSAP(
        () => {
            const scroller = getScrollTriggerScroller();

            gsap.from(".animate-from-top", {
                y: `-100%`,
                opacity: 1,
                ease: "slow(0.8, 0.1)",
                duration: 1,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: containerRef.current,
                    scroller,
                    start: "top 70%",
                    toggleActions: "play none none none",
                },
            });
            gsap.from(".animate-from-top-mobile", {
                y: `-100%`,
                opacity: 1,
                ease: "slow(0.8, 0.1)",
                duration: 1,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: containerRef.current,
                    scroller,
                    start: "top 50%",
                    toggleActions: "play none none none",
                },
            });

            ScrollTrigger.refresh();
        },
        { scope: containerRef },
    );
};
