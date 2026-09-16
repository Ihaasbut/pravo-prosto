import { useRef } from "react";

import cn from "classnames";

import Typography from "../../../../../../components/ui/typography/Typography";
import { useFadeIn } from "../../../../../../hooks/animation/useFadeIn";
import type { ServicesForWhomListPropsI } from "./ServicesForWhomList.types";

import styles from "./ServicesForWhomList.module.css";

function ServicesForWhomList({ data }: ServicesForWhomListPropsI) {
  const containerRef = useRef<HTMLUListElement>(null);

  useFadeIn(containerRef);

  return (
    <ul className={styles.grid} ref={containerRef}>
      {data.map((item, index) => {
        const number = String(index + 1).padStart(2, "0");

        return (
          <li className={cn(styles.card, "animate-fade")} key={item.title}>
            <div className={styles.inner}>
              <span className={styles.label}>[ {number} ]</span>
              
              <Typography variant="h4" as="h3" className={styles.title}>
                {item.title}
              </Typography>

              <Typography variant="body-s" className={styles.description}>
                {item.description}
              </Typography>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default ServicesForWhomList;
