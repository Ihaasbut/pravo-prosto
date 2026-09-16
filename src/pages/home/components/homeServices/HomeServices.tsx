import { useNavigate } from "react-router-dom";

import ServiceCategory from "../../../../components/sections/serviceCategory/ServiceCategory";
import TitleBlockTransparent from "../../../../components/sections/titleBlockTransparent/TitleBlockTransparent";
import { useLanguage } from "../../../../hooks/use-language";
import type { HomeServicesPropsI } from "./HomeServices.types";

import styles from "./HomeServices.module.css";

function HomeServices({ data }: HomeServicesPropsI) {
  const { titleBlock, category } = data;
  const navigate = useNavigate();
  const { language } = useLanguage();
  const goToServices = () => navigate(`/${language}/services`);

  return (
    <section className={styles.section}>
      <TitleBlockTransparent data={titleBlock} onButtonClick={goToServices} />
      <ServiceCategory data={category} toPrefix="services/" onGrey />
    </section>
  );
}

export default HomeServices;
