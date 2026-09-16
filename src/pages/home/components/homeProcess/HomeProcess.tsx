import TitleBlockTransparent from "../../../../components/sections/titleBlockTransparent/TitleBlockTransparent";
import HomeProcessSteps from "./components/homeProcessSteps/HomeProcessSteps";
import type { HomeProcessPropsI } from "./HomeProcess.types";

import styles from "./HomeProcess.module.css";

function HomeProcess({ data }: HomeProcessPropsI) {
  const { titleBlock, steps } = data;

  return (
    <section className={styles.section}>
      <TitleBlockTransparent data={titleBlock} />

      <div className="container">
        <div className="content">
          <HomeProcessSteps data={steps} />
        </div>
      </div>
    </section>
  );
}

export default HomeProcess;
