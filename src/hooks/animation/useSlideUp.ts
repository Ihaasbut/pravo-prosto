import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import type { RefObject } from "react";

export const useSlideUp = (containerRef: RefObject<HTMLDivElement | null>) => {
    useGSAP(
        () => {
            gsap.from(".animate-from-top", {
                y: `-100%`,
                opacity: 1,
                ease: "slow(0.8, 0.1)",
                duration: 1,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: containerRef.current, 
                    start: "top 50%",
                    toggleActions: "play none none none",
                },
            });

        },
        { scope: containerRef }, 
    );
};
