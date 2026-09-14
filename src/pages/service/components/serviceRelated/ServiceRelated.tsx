import { Link } from "react-router-dom";
import Typography from "../../../../components/ui/typography/Typography";
import { useLanguage } from "../../../../hooks/use-language";
import type { ServiceRelatedPropsI } from "./ServiceRelated.types";
import styles from "./ServiceRelated.module.css";

function ServiceRelated({ title, services }: ServiceRelatedPropsI) {
  const { language } = useLanguage();

  if (services.length === 0) {
    return null;
  }

  return (
    <div className="block-margin">
      <Typography variant="h3" as="h3" className="title">
        {title}
      </Typography>

      <ul className={styles.grid}>
        {services.map((service) => (
          <li className={styles.card} key={service.slug}>
            <Link
              to={`/${language}/services/${service.slug}`}
              className={styles.link}
            >
              <Typography variant="body-m" as="h3" className={styles.cardTitle}>
                {service.title}
              </Typography>
              {service.highlights[0] ? (
                <Typography
                  variant="body-s"
                  as="p"
                  className={styles.highlight}
                >
                  {service.highlights[0]}
                </Typography>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServiceRelated;
