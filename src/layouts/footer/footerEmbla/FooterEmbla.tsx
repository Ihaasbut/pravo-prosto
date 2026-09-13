import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Typography from "../../../components/typography/Typography";
import cn from "classnames";
import styles from "./Footer.module.css";
import type { FooterEmblaProps } from "./FooterEmbla.types";

function FooterEmbla({ text }: FooterEmblaProps) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({
      speed: 1,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  ]);

  return (
    <div className={cn(styles.embla, "embla")}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <Typography variant="body-l" as={"p"}>
              {text}
            </Typography>
          </div>
          <div className="embla__slide">
            <Typography variant="body-l" as={"p"}>
              {text}
            </Typography>
          </div>
          <div className="embla__slide">
            <Typography variant="body-l" as={"p"}>
              {text}
            </Typography>
          </div>
          <div className="embla__slide">
            <Typography variant="body-l" as={"p"}>
              {text}
            </Typography>
          </div>
          <div className="embla__slide">
            <Typography variant="body-l" as={"p"}>
              {text}
            </Typography>
          </div>
          <div className="embla__slide">
            <Typography variant="body-l" as={"p"}>
              {text}
            </Typography>
          </div>
          <div className="embla__slide">
            <Typography variant="body-l" as={"p"}>
              {text}
            </Typography>
          </div>
          <div className="embla__slide">
            <Typography variant="body-l" as={"p"}>
              {text}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterEmbla;
