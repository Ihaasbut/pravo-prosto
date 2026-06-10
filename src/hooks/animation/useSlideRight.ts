import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import type { RefObject } from "react";
import type { ServiceDetailI } from "../../types/mockData";
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

export const useSlideRight = (
    containerRef: RefObject<HTMLElement | null>,
    deps: ServiceDetailI | null,
) => {
    useGSAP(
        () => {
            const scroller = getScrollTriggerScroller();

            gsap.from(".animate-from-top", {
                x: `-100%`,
                opacity: 1,
                ease: "linear",
                duration: 0.5,
                stagger: 0.495,
                scrollTrigger: {
                    trigger: containerRef.current,
                    scroller,
                    start: "top 50%",
                    toggleActions: "play none none none",
                },
            });

            ScrollTrigger.refresh();
        },
        { scope: containerRef, dependencies: [deps] },
    );
};
