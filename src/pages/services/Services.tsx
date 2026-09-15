import TitleBlockGrey from "../../components/sections/titleBlockGrey/TitleBlockGrey";

import styles from "./Services.module.css";
import { useLanguage } from "../../hooks/use-language";
import ServiceCategory from "./serviceCategory/ServiceCategory";
import RequestSection from "../../components/sections/requestSection/RequestSection";
import ServicesForWhom from "./components/servicesForWhom/ServicesForWhom";
import { SERVICES_PAGE_DATA } from "./Services.consts";

function Services() {
  const { language } = useLanguage();
  const pageData = SERVICES_PAGE_DATA[language];

  return (
    <div className={styles.services}>
      <TitleBlockGrey data={pageData.page.headerPage} />

      {pageData.serviceCategories.map((category) => (
        <ServiceCategory
          key={category.area}
          area={category.area}
          services={category.services}
        />
      ))}
      <ServicesForWhom audiences={pageData.page.audiences} />
      <RequestSection request={pageData.page.request} />
    </div>
  );
}

export default Services;
