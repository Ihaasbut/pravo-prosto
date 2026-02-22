import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Typography from "../../../components/Typography/Typography";
import cn from "classnames";
import styles from "./Footer.module.css";
import type { FooterEmblaProps } from "../types/footer.types";

function FooterEmbla({ text }: FooterEmblaProps) {
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
        <div className={cn(styles["embla"], "embla")}>
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
