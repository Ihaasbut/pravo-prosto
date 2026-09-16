import cn from "classnames";

import Typography from "../../../../../../components/ui/typography/Typography";
import type { WhatWeDoFeaturesPropsI } from "./WhatWeDoFeatures.types";

import styles from "./WhatWeDoFeatures.module.css";

function WhatWeDoFeatures({ data }: WhatWeDoFeaturesPropsI) {
  return (
    <ol className={styles.grid}>
      {data.map((feature, index) => {
        const number = String(index + 1).padStart(2, "0");
        const isWide = index % 4 === 0 || index % 4 === 3;

        return (
          <li className={styles.card} key={feature.title}>
            <div className={cn(styles.inner, "animate-from-top-mobile")}>
              <span className={styles.ghost}>{number}</span>
              <span className={styles.label}>[ {number} ]</span>
              <Typography
                variant={isWide ? "h4" : "body-m"}
                className={styles.cardTitle}
              >
                {feature.title}
              </Typography>
              <Typography variant="body-s" className={styles.description}>
                {feature.description}
              </Typography>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

export default WhatWeDoFeatures;
