import { useRef } from "react";
import cn from "classnames";
import TitleBlockTransparent from "../../../../components/sections/titleBlockTransparent/TitleBlockTransparent";
import Typography from "../../../../components/ui/typography/Typography";
import { useFadeIn } from "../../../../hooks/animation/useFadeIn";
import type { ServicesForWhomPropsI } from "./ServicesForWhom.types";
import styles from "./ServicesForWhom.module.css";

function ServicesForWhom({ audiences }: ServicesForWhomPropsI) {
  const containerRef = useRef<HTMLUListElement>(null);

  useFadeIn(containerRef);

  return (
    <section className={styles.section}>
      <TitleBlockTransparent data={audiences} />

      <div className="container">
        <div className="content">
          <ul className={styles.grid} ref={containerRef}>
            {audiences.items.map((item, index) => {
              const number = String(index + 1).padStart(2, "0");

              return (
                <li
                  className={cn(styles.card, "animate-fade")}
                  key={item.title}
                >
                  <div className={styles.inner}>
                    <span className={styles.label}>[ {number} ]</span>
                    <Typography variant="h4" as="h3" className={styles.title}>
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body-s"
                      className={styles.description}
                    >
                      {item.description}
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

export default ServicesForWhom;
