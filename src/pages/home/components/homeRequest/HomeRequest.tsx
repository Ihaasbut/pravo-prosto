import Form from "../../../../components/form/Form";
import Typography from "../../../../components/typography/Typography";
import type { HomeRequestPropsI } from "./HomeRequest.types";
import styles from "./HomeRequest.module.css";

function HomeRequest({ request }: HomeRequestPropsI) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="content">
          <div className={styles.inner}>
            <div className={styles.copy}>
              <Typography variant="body-m" as="p" className={styles.label}>
                {request.label}
              </Typography>
              <Typography variant="h2" as="h2">
                {request.title}
              </Typography>
              <Typography
                variant="body-m"
                as="p"
                className={styles.description}
              >
                {request.description}
              </Typography>
            </div>

            <Form variant="inline" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeRequest;
