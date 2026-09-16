import { Link } from "react-router-dom";

import cn from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";

import Typography from "../../../../ui/typography/Typography";
import ServiceCategorySlide from "./components/serviceCategorySlide/ServiceCategorySlide";
import type { ServiceCategorySliderPropsI } from "./ServiceCategorySlider.types";

import categoryStyles from "../../ServiceCategory.module.css";
import styles from "./ServiceCategorySlider.module.css";

function ServiceCategorySlider({
  data,
  toPrefix = "",
}: ServiceCategorySliderPropsI) {
  return (
    <Swiper spaceBetween={10} slidesPerView={1.2}>
      {data.map((service) => (
        <SwiperSlide className={styles.slide} key={service.slug}>
          <Link
            to={`${toPrefix}${service.slug}`}
            className={categoryStyles.serviceWrapper}
          >
            <div
              className={cn(categoryStyles.service, "animate-from-top-mobile")}
            >
              <Typography variant="body-l" className={categoryStyles.title}>
                {service.title}
              </Typography>
              <ServiceCategorySlide data={service.highlights} />
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ServiceCategorySlider;
