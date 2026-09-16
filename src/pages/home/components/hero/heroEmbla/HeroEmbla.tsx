import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";

import Typography from "../../../../../components/ui/typography/Typography";
import type { HeroEmblaPropsI } from "./HeroEmbla.types";

import "./HeroEmbla.css";

function HeroEmbla({ serviceKeywords }: HeroEmblaPropsI) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({
      speed: 1,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  ]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {serviceKeywords.map((serviceKeyword) => (
            <div className="embla__slide" key={serviceKeyword}>
              <span> [ ] </span>
              <Typography variant="body-l">{serviceKeyword}</Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroEmbla;
