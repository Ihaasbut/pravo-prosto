import cn from "classnames";

import type { CrossPropsI } from "./Cross.types";
import styles from "./Cross.module.css";

function Cross({ onClick, className }: CrossPropsI) {
  return (
    <button
      type="button"
      className={cn(styles.root, className)}
      onClick={onClick}
    >
      <span className={styles.left}>[</span>
      <span className={styles.mark}>×</span>
      <span className={styles.right}>]</span>
    </button>
  );
}

export default Cross;
