import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Typography from "../../../../components/ui/typography/Typography";
import cn from "classnames";
import styles from "./Footer.module.css";
import type { FooterEmblaProps } from "./FooterEmbla.types";

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
          {Array.from({ length: 8 }, (_, index) => (
            <div className="embla__slide" key={index}>
              <Typography variant="body-l">
                {text}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FooterEmbla;
