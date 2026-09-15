import RequestForm from "../../ui/form/RequestForm";
import Typography from "../../ui/typography/Typography";
import styles from "./RequestSection.module.css";
import type { RequestSectionPropsI } from "./RequestSection.types";

function RequestSection({ request }: RequestSectionPropsI) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="content">
          <div className={styles.inner}>
            <div className={styles.copy}>
              <Typography variant="body-m" className={styles.label}>
                {request.label}
              </Typography>

              <Typography variant="h2" as="h2">
                {request.title}
              </Typography>

              <Typography
                variant="body-m"
                className={styles.description}
              >
                {request.description}
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
