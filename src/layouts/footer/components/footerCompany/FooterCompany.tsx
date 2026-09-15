import { Link } from "react-router-dom";
import Typography from "../../../../components/ui/typography/Typography";
import { useLanguage } from "../../../../hooks/use-language";
import type { FooterCompanyPropsI } from "./FooterCompany.types";
import styles from "./FooterCompany.module.css";

function FooterCompany({ title }: FooterCompanyPropsI) {
  const { language } = useLanguage();

  return (
    <Link to={`/${language}`} className={styles.titleCompanyLink}>
      <Typography
        variant="footer-title"
        className={styles.titleCompany}
      >
        [ {title} ]
      </Typography>
    </Link>
  );
}

export default FooterCompany;
