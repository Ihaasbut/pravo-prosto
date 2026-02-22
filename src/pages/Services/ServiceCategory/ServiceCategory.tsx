import { Link } from "react-router-dom";
import Typography from "../../../components/Typography/Typography";
import type { ServicesCategoryI } from "../../../types/mockData";
import styles from "./ServiceCategory.module.css";
import { useRef } from "react";
import cn from "classnames";
import { useSlideUp } from "../../../hooks/animation/useSlideUp";
import { Swiper, SwiperSlide } from "swiper/react";

function ServiceCategory(props: ServicesCategoryI) {
    const { services, area } = props;
    const containerRef = useRef<HTMLDivElement>(null);

    useSlideUp(containerRef);

    return (
        <div className="container" ref={containerRef}>
            <div className="content">
                <div
                    className={cn(styles["services-category"], "block-margin")}
                >
                    <Typography variant="h3" as={"h3"} className="title">
                        {area}
                    </Typography>

                    <div className={styles["is-mobile"]}>
                        <Swiper spaceBetween={10} slidesPerView={1.2}>
                            {services.map((service, index) => (
                                <SwiperSlide
                                    className={styles["swiper-wrapper"]}
                                    key={index}
                                >
                                    <Link
                                        to={service.slug}
                                        className={cn(
                                            styles["service-wrapper"],
                                        )}
                                    >
                                        <div
                                            className={cn(
                                                styles["service"],
                                                "animate-from-top-mobile",
                                            )}
                                        >
                                            <Typography
                                                variant="body-l"
                                                as={"p"}
                                                className={
                                                    styles["service-title"]
                                                }
                                            >
                                                {service.title}
                                            </Typography>

                                            {service.highlights.map(
                                                (highlight) => (
                                                    <Typography
                                                        variant="body-s"
                                                        as={"p"}
                                                    >
                                                        - {highlight}
                                                    </Typography>
                                                ),
                                            )}
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div className={cn(styles["services"], "is-dekstop")}>
                        {services.map((service) => (
                            <Link
                                to={service.slug}
                                className={cn(styles["service-wrapper"])}
                            >
                                <div
                                    className={cn(
                                        styles["service"],
                                        "animate-from-top",
                                    )}
                                >
                                    <Typography
                                        variant="body-l"
                                        as={"p"}
                                        className={styles["service-title"]}
                                    >
                                        {service.title}
                                    </Typography>

                                    {service.highlights.map((highlight) => (
                                        <Typography variant="body-s" as={"p"}>
                                            - {highlight}
                                        </Typography>
                                    ))}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceCategory;
