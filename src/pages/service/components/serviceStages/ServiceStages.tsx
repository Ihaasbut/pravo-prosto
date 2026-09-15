import Typography from "../../../../components/ui/typography/Typography";
import type { ServiceStagesPropsI } from "./ServiceStages.types";
import styles from "./ServiceStages.module.css";

function ServiceStages({ title, stages }: ServiceStagesPropsI) {
  return (
    <div className="block-margin">
      <Typography variant="h3" as="h3" className="title">
        {title}
      </Typography>

      <ol className={styles.grid}>
        {stages.map((stage, index) => {
          const number = String(index + 1).padStart(2, "0");

          return (
            <li className={styles.card} key={stage.title}>
              <span className={styles.label}>[ {number} ]</span>
              <Typography variant="h4" as="h3" className={styles.cardTitle}>
                {stage.title}
              </Typography>
              <Typography
                variant="body-s"
                className={styles.description}
              >
                {stage.description}
              </Typography>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default ServiceStages;
