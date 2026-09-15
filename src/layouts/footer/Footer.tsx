import cn from "classnames";
import { useLanguage } from "../../hooks/use-language";
import { FOOTER_DATA } from "./Footer.consts";
import FooterCompany from "./components/footerCompany/FooterCompany";
import FooterContacts from "./components/footerContacts/FooterContacts";
import FooterCopyright from "./components/footerCopyright/FooterCopyright";
import FooterEmbla from "./components/footerEmbla/FooterEmbla";
import styles from "./Footer.module.css";

function Footer() {
  const { language } = useLanguage();
  const { titleCompany, address, notice, contacts, links } =
    FOOTER_DATA[language];

  return (
    <div className={styles.footer}>
      <FooterEmbla text={titleCompany} />
      <div className={cn(styles.wrapper, "container")}>
        <div className="content">
          <div className={styles.inner}>
            <FooterContacts contacts={contacts} />
            <FooterCompany title={titleCompany} />
          </div>

          <FooterCopyright address={address} notice={notice} links={links} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
