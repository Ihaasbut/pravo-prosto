import { useRef } from "react";

import cn from "classnames";

import Typography from "../../../../../../components/ui/typography/Typography";
import { useFadeIn } from "../../../../../../hooks/animation/useFadeIn";
import type { HomeAboutPrinciplesPropsI } from "./HomeAboutPrinciples.types";

import styles from "./HomeAboutPrinciples.module.css";

function HomeAboutPrinciples({ data }: HomeAboutPrinciplesPropsI) {
  const containerRef = useRef<HTMLUListElement>(null);

  useFadeIn(containerRef);

  return (
    <ul className={styles.grid} ref={containerRef}>
      {data.map((principle, index) => {
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
              <Typography variant="body-s" className={styles.description}>
                {principle.description}
              </Typography>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default HomeAboutPrinciples;
