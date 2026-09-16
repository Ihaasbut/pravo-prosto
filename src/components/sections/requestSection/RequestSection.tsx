import RequestForm from "../../ui/form/RequestForm";
import Typography from "../../ui/typography/Typography";
import type { RequestSectionPropsI } from "./RequestSection.types";

import styles from "./RequestSection.module.css";

function RequestSection({ data }: RequestSectionPropsI) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="content">
          <div className={styles.inner}>
            <div className={styles.copy}>
              <Typography variant="body-m" className={styles.label}>
                {data.label}
              </Typography>

              <Typography variant="h2" as="h2">
                {data.title}
              </Typography>

              <Typography
                variant="body-m"
                className={styles.description}
              >
                {data.description}
              </Typography>
            </div>

            <div className={styles.formWrapper}>
              <RequestForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RequestSection;
