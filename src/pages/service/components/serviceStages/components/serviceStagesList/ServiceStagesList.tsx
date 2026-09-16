import Typography from "../../../../../../components/ui/typography/Typography";
import type { ServiceStagesListPropsI } from "./ServiceStagesList.types";

import styles from "./ServiceStagesList.module.css";

function ServiceStagesList({ data }: ServiceStagesListPropsI) {
  return (
    <ol className={styles.grid}>
      {data.map((stage, index) => {
        const number = String(index + 1).padStart(2, "0");

        return (
          <li className={styles.card} key={stage.title}>
            <span className={styles.label}>[ {number} ]</span>
            <Typography variant="h4" as="h3" className={styles.cardTitle}>
              {stage.title}
            </Typography>
            <Typography variant="body-s" className={styles.description}>
              {stage.description}
            </Typography>
          </li>
        );
      })}
    </ol>
  );
}

export default ServiceStagesList;
