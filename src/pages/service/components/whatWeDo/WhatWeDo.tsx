import { useRef } from "react";
import cn from "classnames";
import Typography from "../../../../components/ui/typography/Typography";
import { useSlideUp } from "../../../../hooks/animation/useSlideUp";
import type { WhatWeDoPropsI } from "./WhatWeDo.types";
import styles from "./WhatWeDo.module.css";

function WhatWeDo({ title, features }: WhatWeDoPropsI) {
  const containerRef = useRef<HTMLDivElement>(null);

  useSlideUp(containerRef);

  return (
    <div className="block-margin" ref={containerRef}>
      <Typography variant="h3" as="h3" className="title">
        {title}
      </Typography>

      <ol className={styles.grid}>
        {features.map((feature, index) => {
          const number = String(index + 1).padStart(2, "0");
          const isWide = index % 4 === 0 || index % 4 === 3;

          return (
            <li className={styles.card} key={feature.title}>
              <div className={cn(styles.inner, "animate-from-top-mobile")}>
                <span className={styles.ghost} aria-hidden="true">
                  {number}
                </span>
                <span className={styles.label}>[ {number} ]</span>
                <Typography
                  variant={isWide ? "h4" : "body-m"}
                  as="p"
                  className={styles.cardTitle}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body-s"
                  as="p"
                  className={styles.description}
                >
                  {feature.description}
                </Typography>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default WhatWeDo;
