import { Swiper, SwiperSlide } from "swiper/react";

import NewsItem from "../newsItem/NewsItem";
import styles from "./NewsSlider.module.css";
import type { NewsSliderI } from "./NewsSlider.types";

function NewsSlider({ pageData }: NewsSliderI) {
  return (
    <div className={styles.slider}>
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
            <NewsItem news={element} variant="allPage" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default NewsSlider;
