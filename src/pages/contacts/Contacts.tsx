import { useEffect, useState } from "react";
import TitleBlockGrey from "../../components/titleBlockPrimary/TitleBlockPrimary";
import YandexMap from "../../components/yandexMap/YandexMap";
import { useLanguage } from "../../hooks/use-language";
import type { ContactsPageI } from "./Contacts.types";
import styles from "./Contacts.module.css";
import PageSkeleton from "../../components/pageSkeleton/PageSkeleton";
import ContactsInfo from "./components/contactsInfo/ContactsInfo";

function Contacts() {
  const [pageData, setPageData] = useState<ContactsPageI | null>(null);
  const { language } = useLanguage();

  useEffect(() => {
    (async () => {
      const pageModule = await import(
        `./mockData/contacts-page.mockData.${language}.ts`
      );

      setPageData(pageModule.headerPage);
    })();
  }, [language]);

  if (!pageData) {
    return <PageSkeleton variant="contacts" />;
  }

  return (
    <div className={styles.contacts}>
      <div className={styles.hero}>
        <TitleBlockGrey
          title={pageData.title}
          buttonText={pageData.buttonText}
          className={styles.header}
        />
        <ContactsInfo
          address={pageData.address}
          phones={pageData.phones}
          emails={pageData.emails}
        />
      </div>

      <YandexMap />
    </div>
  );
}

export default Contacts;
