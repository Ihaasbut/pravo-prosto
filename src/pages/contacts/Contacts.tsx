import TitleBlockTransparent from "../../components/sections/titleBlockTransparent/TitleBlockTransparent";
import YandexMap from "../../components/sections/yandexMap/YandexMap";
import { useLanguage } from "../../hooks/use-language";
import ContactsInfo from "./components/contactsInfo/ContactsInfo";
import { CONTACTS_DATA } from "./Contacts.consts";

import styles from "./Contacts.module.css";

function Contacts() {
  const { language } = useLanguage();
  const { titleBlock, contacts } = CONTACTS_DATA[language];

  return (
    <div className={styles.contacts}>
      <section className={styles.hero}>
        <TitleBlockTransparent data={titleBlock} />
        <ContactsInfo data={contacts} />
      </section>

      <YandexMap />
    </div>
  );
}

export default Contacts;
