import { Link } from "react-router-dom";

import styles from "./NewsTable.module.css";
import cn from "classnames";
import Typography from "../Typography/Typography";
import { useRef } from "react";
import { useSlideUp } from "../../hooks/animation/useSlideUp";
import { Swiper, SwiperSlide } from "swiper/react";
import type { NewsTableI } from "../../pages/News/types/news-page.types";

function NewsTable({
    pageData,
    className,
    useSiblingLinks = false,
}: NewsTableI) {
    const containerRef = useRef<HTMLDivElement>(null);
    const getNewsLink = (slug: string) =>
        useSiblingLinks ? `../${slug}` : slug;

    useSlideUp(containerRef);
    return (
        <div
            className={cn("content", {
                [styles["news-table-detail"]]: useSiblingLinks,
            })}
        >
            <div
                className={cn(styles["is-mobile"], "block-margin")}
                ref={containerRef}
            >
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1.2}
                    breakpoints={{
                        80: {
                            slidesPerView: 3.4,
                        },
                        500: {
                            slidesPerView: 2.3,
                        },
                        320: {
                            slidesPerView: 1.2,
                        },
                    }}
                >
                    {pageData.map((element, index) => (
                        <SwiperSlide key={index}>
                            <Link
                                to={getNewsLink(element.slug)}
                                relative={useSiblingLinks ? "path" : undefined}
                                className={styles["wrapper"]}
                            >
                                <div className={styles["inner"]}>
                                    <div className={styles["image-wrapper"]}>
                                        <div
                                            className={cn(
                                                styles["image"],
                                                "animate-from-top-mobile",
                                            )}
                                        >
                                            <img
                                                src={element.image}
                                                alt={element.title}
                                            />
                                            <div className={styles["badge"]}>
                                                {element.categoryName}
                                            </div>
                                        </div>
                                    </div>
                                    <Typography
                                        variant="body-s"
                                        className={styles["title"]}
                                        as={"p"}
                                    >
                                        {element.title}
                                    </Typography>
                                    <Typography
                                        variant="body-s"
                                        as={"p"}
                                        className={cn(styles["date"])}
                                    >
                                        {element.date}
                                    </Typography>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div
                ref={containerRef}
                className={cn(
                    styles["is-dekstop"],
                    "block-margin",
                    styles[className],
                )}
            >
                {pageData.map((element, index) => (
                    <Link
                        to={getNewsLink(element.slug)}
                        relative={useSiblingLinks ? "path" : undefined}
                        className={styles["wrapper"]}
                        key={index}
                    >
                        <div className={styles["inner"]}>
                            <div className={styles["image-wrapper"]}>
                                <div
                                    className={cn(
                                        styles["image"],
                                        "animate-from-top",
                                    )}
                                >
                                    <img
                                        src={element.image}
                                        alt={element.title}
                                    />
                                    <div className={styles["badge"]}>
                                        {element.categoryName}
                                    </div>
                                </div>
                            </div>
                            <Typography
                                variant="body-s"
                                className={styles["title"]}
                                as={"p"}
                            >
                                {element.title}
                            </Typography>
                            <Typography
                                variant="body-s"
                                as={"p"}
                                className={cn(styles["date"])}
                            >
                                {element.date}
                            </Typography>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default NewsTable;
