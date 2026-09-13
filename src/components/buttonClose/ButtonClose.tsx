import type { ButtonClosePropsI } from "./ButtonClose.types";
import styles from "./ButtonClose.module.css";

function ButtonClose({ onToggleClose }: ButtonClosePropsI) {
  return (
    <button className={styles.button} onClick={onToggleClose}>
      <div className={styles.left}>[</div>X<div className={styles.right}>]</div>
    </button>
  );
}

export default ButtonClose;
