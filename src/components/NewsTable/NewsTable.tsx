import { Link } from "react-router-dom";

import styles from "./NewsTable.module.css";
import cn from "classnames";
import Typography from "../Typography/Typography";
import {  useEffect, useMemo, useRef } from "react";
import { useSlideUp } from "../../hooks/animation/useSlideUp";
import { Swiper, SwiperSlide } from "swiper/react";
import type { NewsTableI } from "../../pages/News/types/news-page.types";


function NewsTable({ pageData, className }: NewsTableI) {
    const containerRef = useRef<HTMLDivElement>(null);

    const test = [1, 5, 8, 33, 25, 50]; //122

    const fnTest = useMemo(()=> {
        return test.reduce((acc,x) => acc+x,0)
    }, [test])

    useEffect(()=>{
        console.log(fnTest)
    },[fnTest])

    useSlideUp(containerRef);
    return (
        <div className="content">
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
                                to={element.slug}
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
                                                alt="Картинка Новости"
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
                        to={element.slug}
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
                                        alt="Картинка Новости"
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
