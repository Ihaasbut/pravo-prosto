import "./HeroEmbla.css";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Typography from "../../../../../components/Typography/Typography";

import type { HeroEmblaPropsI } from "../../../types/Mocdata";

function HeroEmbla({ services }: HeroEmblaPropsI) {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [
        AutoScroll({
            speed: 2,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
        }),
    ]);

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {services.map((el) => (
                        <div className="embla__slide" key={el.id}>
                            <span> [ ] </span>{" "}
                            <Typography variant="text-24" as={"p"}>
                                {el.name}
                            </Typography>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HeroEmbla;
