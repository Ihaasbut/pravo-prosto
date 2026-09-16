import { Link } from "react-router-dom";

import Typography from "../../../../../../components/ui/typography/Typography";
import { useLanguage } from "../../../../../../hooks/use-language";
import type { ServiceRelatedListPropsI } from "./ServiceRelatedList.types";

import styles from "./ServiceRelatedList.module.css";

function ServiceRelatedList({ data }: ServiceRelatedListPropsI) {
  const { language } = useLanguage();

  return (
    <ul className={styles.grid}>
      {data.map((service) => {
        const to = `/${language}/services/${service.slug}`;
        const highlight = service.highlights[0];

        return (
          <li className={styles.card} key={service.slug}>
            <Link to={to} className={styles.link}>
              <Typography variant="body-m" as="h3" className={styles.cardTitle}>
                {service.title}
              </Typography>
              
              {highlight ? (
                <Typography variant="body-s" className={styles.highlight}>
                  {highlight}
                </Typography>
              ) : null}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default ServiceRelatedList;
