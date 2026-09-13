import { useRef } from "react";
import cn from "classnames";
import TitleBlockHome from "../../../../components/titleBlockHome/TitleBlockHome";
import Typography from "../../../../components/typography/Typography";
import { useFadeIn } from "../../../../hooks/animation/useFadeIn";
import type { HomeAboutPropsI } from "./HomeAbout.types";
import styles from "./HomeAbout.module.css";

function HomeAbout({ about }: HomeAboutPropsI) {
  const containerRef = useRef<HTMLUListElement>(null);

  useFadeIn(containerRef);

  return (
    <section className={styles.section}>
      <TitleBlockHome title={about.title} description={about.description} />

      <div className="container">
        <div className="content">
          <ul className={styles.grid} ref={containerRef}>
            {about.principles.map((principle, index) => {
              const number = String(index + 1).padStart(2, "0");

              return (
                <li
                  className={cn(styles.card, "animate-fade")}
                  key={principle.title}
                >
                  <div className={styles.inner}>
                    <span className={styles.label}>[ {number} ]</span>
                    <Typography variant="h4" as="h3" className={styles.title}>
                      {principle.title}
                    </Typography>
                    <Typography
                      variant="body-s"
                      as="p"
                      className={styles.description}
                    >
                      {principle.description}
                    </Typography>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default HomeAbout;
