import "./HeroEmbla.css";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Typography from "../../../../../components/Typography/Typography";
import type { HeroEmblaPropsI } from "../types/hero.types";

function HeroEmbla({ serviceKeywords }: HeroEmblaPropsI) {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const autoScrollSpeed = isMobile ? 1 : 2;

    const [emblaRef] = useEmblaCarousel({ loop: true }, [
        AutoScroll({
            speed: autoScrollSpeed,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
        }),
    ]);

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {serviceKeywords.map((serviceKeyword, index) => (
                        <div className="embla__slide" key={index}>
                            <span> [ ] </span>
                            <Typography variant="body-l" as={"p"}>
                                {serviceKeyword.name}
                            </Typography>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HeroEmbla;
