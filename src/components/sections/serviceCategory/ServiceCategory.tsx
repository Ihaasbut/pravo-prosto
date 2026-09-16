import { useRef } from "react";

import cn from "classnames";

import { useSlideUp } from "../../../hooks/animation/useSlideUp";
import Typography from "../../ui/typography/Typography";
import ServiceCategoryGrid from "./components/serviceCategoryGrid/ServiceCategoryGrid";
import ServiceCategorySlider from "./components/serviceCategorySlider/ServiceCategorySlider";
import type { ServiceCategoryPropsI } from "./ServiceCategory.types";

import styles from "./ServiceCategory.module.css";

function ServiceCategory({
  data,
  toPrefix = "",
  onGrey = false,
}: ServiceCategoryPropsI) {
  const { services, area } = data;
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
            <ServiceCategorySlider data={services} toPrefix={toPrefix} />
          </div>

          <div className={cn(styles.services, "is-dekstop")}>
            <ServiceCategoryGrid data={services} toPrefix={toPrefix} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCategory;
