import TitleBlockTransparent from "../../../../components/sections/titleBlockTransparent/TitleBlockTransparent";
import ServicesForWhomList from "./components/servicesForWhomList/ServicesForWhomList";
import type { ServicesForWhomPropsI } from "./ServicesForWhom.types";

import styles from "./ServicesForWhom.module.css";

function ServicesForWhom({ data }: ServicesForWhomPropsI) {
  const { titleBlock, items } = data;

  return (
    <section className={styles.section}>
      <TitleBlockTransparent data={titleBlock} />

      <div className="container">
        <div className="content">
          <ServicesForWhomList data={items} />
        </div>
      </div>
    </section>
  );
}

export default ServicesForWhom;
