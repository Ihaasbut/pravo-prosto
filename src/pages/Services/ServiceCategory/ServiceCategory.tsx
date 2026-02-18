import { Link } from "react-router-dom";
import Typography from "../../../components/Typography/Typography";
import type { ServicesCategoryI } from "../../../types/mockData";
import styles from "./ServiceCategory.module.css";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import cn from "classnames";
import { useSlideUp } from "../../../hooks/animation/useSlideUp";

gsap.registerPlugin(ScrollTrigger);

function ServiceCategory({ services, area }: ServicesCategoryI) {
    const containerRef = useRef<HTMLDivElement>(null);
    useSlideUp(containerRef);

    return (
        <div className={styles["services-category"]} ref={containerRef}>
            <Typography
                variant="h3"
                as={"h3"}
                className="title"
            >
                {area}
            </Typography>
            <div className={styles["services"]}>
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
    );
}

export default ServiceCategory;
