import { Link } from "react-router-dom";
import Typography from "../../../components/ui/typography/Typography";
import styles from "./ServiceCategory.module.css";
import { useRef } from "react";
import cn from "classnames";
import { useSlideUp } from "../../../hooks/animation/useSlideUp";
import { Swiper, SwiperSlide } from "swiper/react";
import type { ServiceCategoryPropsI } from "./ServiceCategory.types";

function ServiceCategory({
  services,
  area,
  toPrefix = "",
  onGrey = false,
}: ServiceCategoryPropsI) {
  const containerRef = useRef<HTMLDivElement>(null);

  useSlideUp(containerRef);

  return (
    <div className="container" ref={containerRef}>
      <div className="content">
        <div className={cn(styles.category, onGrey && styles.onGrey)}>
          <Typography variant="h3" as={"h3"} className="title">
            {area}
          </Typography>

          <div className={styles.isMobile}>
            <Swiper spaceBetween={10} slidesPerView={1.2}>
              {services.map((service, index) => (
                <SwiperSlide className={styles.swiperWrapper} key={index}>
                  <Link
                    to={`${toPrefix}${service.slug}`}
                    className={cn(styles.serviceWrapper)}
                  >
                    <div
                      className={cn(styles.service, "animate-from-top-mobile")}
                    >
                      <Typography
                        variant="body-l"
                        as={"p"}
                        className={styles.title}
                      >
                        {service.title}
                      </Typography>

                      <div className={styles.highlights}>
                        {service.highlights.map((highlight) => (
                          <Typography
                            key={highlight}
                            variant="body-s"
                            as={"p"}
                            className={styles.highlight}
                          >
                            - {highlight}
                          </Typography>
                        ))}
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className={cn(styles.services, "is-dekstop")}>
            {services.map((service) => (
              <Link
                key={service.slug}
                to={`${toPrefix}${service.slug}`}
                className={cn(styles.serviceWrapper)}
              >
                <div className={cn(styles.service, "animate-from-top")}>
                  <Typography
                    variant="body-l"
                    as={"p"}
                    className={styles.title}
                  >
                    {service.title}
                  </Typography>

                  <div className={styles.highlights}>
                    {service.highlights.map((highlight) => (
                      <Typography
                        key={highlight}
                        variant="body-s"
                        as={"p"}
                        className={styles.highlight}
                      >
                        - {highlight}
                      </Typography>
                    ))}
                  </div>
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
