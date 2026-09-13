import { Link } from "react-router-dom";

import styles from "./NewsTable.module.css";
import cn from "classnames";
import Typography from "../typography/Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import type { NewsCardPropsI, NewsTableI } from "./NewsTable.types";

function NewsCard({ news, to, relative }: NewsCardPropsI) {
  return (
    <Link
      to={to}
      relative={relative}
      className={styles.wrapper}
      data-category={news.categoryId}
    >
      <div className={styles.inner}>
        <span className={styles.badge}>{news.categoryName}</span>
        <Typography variant="body-s" className={styles.title} as="p">
          {news.title}
        </Typography>
        <Typography variant="body-xs" as="p" className={styles.date}>
          {news.date}
        </Typography>
      </div>
    </Link>
  );
}

function NewsTable({
  pageData,
  className,
  useSiblingLinks = false,
  toPrefix = "",
  compact = false,
}: NewsTableI) {
  const getNewsLink = (slug: string) =>
    useSiblingLinks ? `../${slug}` : `${toPrefix}${slug}`;

  return (
    <div className={cn(useSiblingLinks ? styles.newsTableDetail : "content")}>
      <div className={cn(styles.isMobile, !compact && "block-margin")}>
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
              <NewsCard
                news={element}
                to={getNewsLink(element.slug)}
                relative={useSiblingLinks ? "path" : undefined}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div
        className={cn(
          styles.isDekstop,
          !compact && "block-margin",
          className === "newsAll" ? styles.newsAll : styles.newsDetail,
        )}
      >
        {pageData.map((element, index) => (
          <NewsCard
            news={element}
            to={getNewsLink(element.slug)}
            relative={useSiblingLinks ? "path" : undefined}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default NewsTable;
