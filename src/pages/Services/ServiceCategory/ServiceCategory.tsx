import { Link } from "react-router-dom";
import Typography from "../../../components/Typography/Typography";
import type { ServiceCategoryI } from "../../../types/mockData";
import styles from "./ServiceCategory.module.css";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import cn from "classnames";
import { useSlideUp } from "../../../hooks/animation/useSlideUp";

gsap.registerPlugin(ScrollTrigger);

function ServiceCategory({ services, area }: ServiceCategoryI) {
    const containerRef = useRef<HTMLDivElement>(null);
    useSlideUp(containerRef);
    // console.log(area)
    return (
        <div className={styles["services-area"]} ref={containerRef}>
            <Typography
                variant="h3"
                as={"h3"}
                className={styles["service-title"]}
            >
                {area}
            </Typography>
            <div className={styles["services-theme-list"]}>
                {services.map((service) => (
                    <Link
                        to={service.slug}
                        className={cn(styles["services-theme-list-wrapper"])}
                    >
                        <div
                            className={cn(
                                styles["services-theme-list-item"],
                                "animate-from-top",
                            )}
                        >
                            <Typography
                                variant="body-l"
                                as={"p"}
                                className={
                                    styles["services-theme-list-item-title"]
                                }
                            >
                                {service.title}
                            </Typography>
                            {service.highlights.map((highlight) => (
                                <Typography
                                    variant="body-s"
                                    as={"p"}
                                    className={
                                        styles["services-theme-list-item-about"]
                                    }
                                >
                                    - {highlight}
                                </Typography>
                            ))}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default ServiceCategory;
