import { useNavigate } from "react-router-dom";
import TitleBlockHome from "../../../../components/titleBlockHome/TitleBlockHome";
import ServiceCategory from "../../../services/serviceCategory/ServiceCategory";
import { useLanguage } from "../../../../hooks/use-language";
import type { HomeServicesPropsI } from "./HomeServices.types";
import styles from "./HomeServices.module.css";

function HomeServices({ servicesBlock, category }: HomeServicesPropsI) {
  const navigate = useNavigate();
  const { language } = useLanguage();

  return (
    <section className={styles.section}>
      <TitleBlockHome
        title={servicesBlock.title}
        description={servicesBlock.description}
        buttonText={servicesBlock.buttonText}
        onButtonClick={() => navigate(`/${language}/services`)}
      />
      <ServiceCategory
        area={category.area}
        services={category.services}
        toPrefix="services/"
        onGrey
      />
    </section>
  );
}

export default HomeServices;
