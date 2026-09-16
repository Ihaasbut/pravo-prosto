import { Link } from "react-router-dom";

import cn from "classnames";

import Typography from "../../../../ui/typography/Typography";
import type { ServiceCategoryGridPropsI } from "./ServiceCategoryGrid.types";

import styles from "../../ServiceCategory.module.css";

function ServiceCategoryGrid({
  data,
  toPrefix = "",
}: ServiceCategoryGridPropsI) {
  return (
    <>
      {data.map((service) => (
        <Link
          key={service.slug}
          to={`${toPrefix}${service.slug}`}
          className={styles.serviceWrapper}
        >
          <div className={cn(styles.service, "animate-from-top")}>
            <Typography variant="body-l" className={styles.title}>
              {service.title}
            </Typography>

            <div className={styles.highlights}>
              {service.highlights.map((highlight) => (
                <Typography
                  key={highlight}
                  variant="body-s"
                  className={styles.highlight}
                >
                  - {highlight}
                </Typography>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}

export default ServiceCategoryGrid;
