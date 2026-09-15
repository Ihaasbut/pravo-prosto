import Typography from "../../../../components/ui/typography/Typography";
import type { ServiceFaqPropsI } from "./ServiceFaq.types";
import styles from "./ServiceFaq.module.css";

function ServiceFaq({ title, items }: ServiceFaqPropsI) {
  return (
    <div className="block-margin">
      <Typography variant="h3" as="h3" className="title">
        {title}
      </Typography>

      <ul className={styles.list}>
        {items.map((item, index) => {
          const number = String(index + 1).padStart(2, "0");

          return (
            <li className={styles.item} key={item.question}>
              <details>
                <summary className={styles.summary}>
                  <span className={styles.label}>[ {number} ]</span>
                  <Typography
                    variant="body-m"
                    as="span"
                    className={styles.question}
                  >
                    {item.question}
                  </Typography>
                </summary>
                <Typography variant="body-s" className={styles.answer}>
                  {item.answer}
                </Typography>
              </details>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ServiceFaq;
