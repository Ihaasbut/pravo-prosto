import RequestSection from "../../components/sections/requestSection/RequestSection";
import TitleBlockGrey from "../../components/sections/titleBlockGrey/TitleBlockGrey";
import { useLanguage } from "../../hooks/use-language";
import ServicesCategories from "./components/servicesCategories/ServicesCategories";
import ServicesForWhom from "./components/servicesForWhom/ServicesForWhom";
import { SERVICES_PAGE_DATA } from "./Services.consts";

import styles from "./Services.module.css";

function Services() {
  const { language } = useLanguage();
  const { serviceCategories, page } = SERVICES_PAGE_DATA[language];
  const { titleBlock, audiences, request } = page;

  return (
    <div className={styles.services}>
      <TitleBlockGrey data={titleBlock} />
      <ServicesCategories data={serviceCategories} />
      <ServicesForWhom data={audiences} />
      <RequestSection data={request} />
    </div>
  );
}

export default Services;
