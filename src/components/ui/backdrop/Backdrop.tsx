import cn from "classnames";

import type { BackdropProps } from "./Backdrop.types";

import styles from "./Backdrop.module.css";

function Backdrop({ onClose, isOpened }: BackdropProps) {
  return (
    <div
      className={cn(styles.backdrop, isOpened && styles.active)}
      onClick={onClose}
    ></div>
  );
}

export default Backdrop;
