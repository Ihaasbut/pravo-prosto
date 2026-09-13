import { useRef } from "react";
import cn from "classnames";
import TitleBlockHome from "../../../../components/titleBlockHome/TitleBlockHome";
import Typography from "../../../../components/typography/Typography";
import { useSlideRight } from "../../../../hooks/animation/useSlideRight";
import type { HomeProcessPropsI } from "./HomeProcess.types";
import styles from "./HomeProcess.module.css";

function HomeProcess({ process }: HomeProcessPropsI) {
  const containerRef = useRef<HTMLOListElement>(null);

  useSlideRight(containerRef);

  return (
    <section className={styles.section}>
      <TitleBlockHome title={process.title} description={process.description} />

      <div className="container">
        <div className="content">
          <ol className={styles.grid} ref={containerRef}>
            {process.steps.map((step, index) => {
              const number = String(index + 1).padStart(2, "0");

              return (
                <li className={styles.card} key={step.title}>
                  <div className={cn(styles.inner, "animate-from-left")}>
                    <span className={styles.label}>[ {number} ]</span>
                    <Typography variant="h4" as="h3" className={styles.title}>
                      {step.title}
                    </Typography>
                    <Typography
                      variant="body-s"
                      as="p"
                      className={styles.description}
                    >
                      {step.description}
                    </Typography>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default HomeProcess;
