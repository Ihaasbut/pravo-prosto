import { useNavigate } from "react-router-dom";

import Button from "../../components/ui/button/Button";
import Typography from "../../components/ui/typography/Typography";
import { useLanguage } from "../../hooks/use-language";
import { NOT_FOUND_DATA } from "./NotFound.consts";

import styles from "./NotFound.module.css";

function NotFound() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const { label, code, title, description, homeButton, servicesButton } =
    NOT_FOUND_DATA[language];

  const goHome = () => navigate(`/${language}`);
  const goToServices = () => navigate(`/${language}/services`);

  return (
    <section className={styles.page}>
      <div className="container">
        <div className="content">
          <div className={styles.inner}>
            <span className={styles.ghost}>{code}</span>

            <span className={styles.label}>[ {label} ]</span>

            <Typography variant="h2" as="h1" className={styles.title}>
              {title}
            </Typography>

            <Typography variant="body-m" className={styles.description}>
              {description}
            </Typography>

            <div className={styles.actions}>
              <Button variant="fill" onClick={goHome}>
                {homeButton}
              </Button>
              <Button variant="outline" onClick={goToServices}>
                {servicesButton}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
