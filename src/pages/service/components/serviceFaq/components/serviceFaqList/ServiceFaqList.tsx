import Typography from "../../../../../../components/ui/typography/Typography";
import type { ServiceFaqListPropsI } from "./ServiceFaqList.types";

import styles from "./ServiceFaqList.module.css";

function ServiceFaqList({ data }: ServiceFaqListPropsI) {
  return (
    <ul className={styles.list}>
      {data.map((item, index) => {
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
  );
}

export default ServiceFaqList;
