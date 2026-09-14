import { useEffect, useState } from "react";

export const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const somethimg = window.matchMedia(`(width < 768px)`);
        const update = () => {
            setIsMobile(somethimg.matches);
        };

        update();
        somethimg.addEventListener("change", update);
        return () => somethimg.removeEventListener("change", update);
    }, []);

    return isMobile
};
