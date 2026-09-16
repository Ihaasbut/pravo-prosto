import TitleBlockTransparent from "../../../../components/sections/titleBlockTransparent/TitleBlockTransparent";
import HomeAboutPrinciples from "./components/homeAboutPrinciples/HomeAboutPrinciples";
import type { HomeAboutPropsI } from "./HomeAbout.types";

import styles from "./HomeAbout.module.css";

function HomeAbout({ data }: HomeAboutPropsI) {
  const { titleBlock, principles } = data;

  return (
    <section className={styles.section}>
      <TitleBlockTransparent data={titleBlock} />

      <div className="container">
        <div className="content">
          <HomeAboutPrinciples data={principles} />
        </div>
      </div>
    </section>
  );
}

export default HomeAbout;
