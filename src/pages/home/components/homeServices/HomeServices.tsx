import { useNavigate } from "react-router-dom";
import TitleBlockTransparent from "../../../../components/sections/titleBlockTransparent/TitleBlockTransparent";
import ServiceCategory from "../../../services/serviceCategory/ServiceCategory";
import { useLanguage } from "../../../../hooks/use-language";
import type { HomeServicesPropsI } from "./HomeServices.types";
import styles from "./HomeServices.module.css";

function HomeServices({ servicesBlock, category }: HomeServicesPropsI) {
  const navigate = useNavigate();
  const { language } = useLanguage();

  return (
    <section className={styles.section}>
      <TitleBlockTransparent
        data={servicesBlock}
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
