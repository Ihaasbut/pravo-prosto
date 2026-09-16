import { useRef } from "react";

import cn from "classnames";

import Typography from "../../../../../../components/ui/typography/Typography";
import { useSlideRight } from "../../../../../../hooks/animation/useSlideRight";
import type { HomeProcessStepsPropsI } from "./HomeProcessSteps.types";

import styles from "./HomeProcessSteps.module.css";

function HomeProcessSteps({ data }: HomeProcessStepsPropsI) {
  const containerRef = useRef<HTMLOListElement>(null);

  useSlideRight(containerRef);

  return (
    <ol className={styles.grid} ref={containerRef}>
      {data.map((step, index) => {
        const number = String(index + 1).padStart(2, "0");

        return (
          <li className={styles.card} key={step.title}>
            <div className={cn(styles.inner, "animate-from-left")}>
              <span className={styles.label}>[ {number} ]</span>
              <Typography variant="h4" as="h3" className={styles.title}>
                {step.title}
              </Typography>
              <Typography variant="body-s" className={styles.description}>
                {step.description}
              </Typography>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

export default HomeProcessSteps;
