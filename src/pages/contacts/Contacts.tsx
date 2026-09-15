import TitleBlockTransparent from "../../components/sections/titleBlockTransparent/TitleBlockTransparent";
import YandexMap from "../../components/sections/yandexMap/YandexMap";
import { useLanguage } from "../../hooks/use-language";
import { CONTACTS_DATA } from "./Contacts.consts";
import styles from "./Contacts.module.css";
import ContactsInfo from "./components/contactsInfo/ContactsInfo";

function Contacts() {
  const { language } = useLanguage();
  const pageData = CONTACTS_DATA[language];

  return (
    <div className={styles.contacts}>
      <div className={styles.hero}>
        <TitleBlockTransparent data={pageData} />
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
