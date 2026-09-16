import Typography from "../../../../../../ui/typography/Typography";
import type { ServiceCategorySlidePropsI } from "./ServiceCategorySlide.types";

import styles from "../../../../ServiceCategory.module.css";

function ServiceCategorySlide({ data }: ServiceCategorySlidePropsI) {
  return (
    <div className={styles.highlights}>
      {data.map((highlight) => (
        <Typography
          key={highlight}
          variant="body-s"
          className={styles.highlight}
        >
          - {highlight}
        </Typography>
      ))}
    </div>
  );
}

export default ServiceCategorySlide;
