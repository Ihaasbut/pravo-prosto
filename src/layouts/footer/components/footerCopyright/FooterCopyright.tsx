import { Link } from "react-router-dom";
import Typography from "../../../../components/ui/typography/Typography";
import { YANDEX_MAPS_URL } from "../../Footer.consts";
import type { FooterCopyrightPropsI } from "./FooterCopyright.types";
import styles from "./FooterCopyright.module.css";

function FooterCopyright({ address, notice, links }: FooterCopyrightPropsI) {
  return (
    <div className={styles.copyright}>
      <a href={YANDEX_MAPS_URL} target="_blank" className={styles.address}>
        <Typography variant="body-s">
          {address}
        </Typography>
      </a>

      {links.map((link) => (
        <Link key={link.slug} to={link.slug}>
          <Typography variant="body-s" className={styles.link}>
            {link.title}
          </Typography>
        </Link>
      ))}

      <Typography variant="body-s" className={styles.notice}>
        {notice}
      </Typography>
    </div>
  );
}

export default FooterCopyright;
