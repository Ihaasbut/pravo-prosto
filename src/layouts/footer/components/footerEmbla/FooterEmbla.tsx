import cn from "classnames";
import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";

import Typography from "../../../../components/ui/typography/Typography";
import type { FooterEmblaProps } from "./FooterEmbla.types";

import styles from "./Footer.module.css";

function FooterEmbla({ text }: FooterEmblaProps) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({
      speed: 1,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    }),
  ]);

  return (
    <div className={cn(styles.embla, "embla")}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {["one", "two", "three", "four", "five", "six", "seven", "eight"].map(
            (slide) => (
              <div className="embla__slide" key={slide}>
                <Typography variant="body-l">{text}</Typography>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

export default FooterEmbla;
