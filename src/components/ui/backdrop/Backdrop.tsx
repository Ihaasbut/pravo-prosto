import styles from "./Backdrop.module.css";
import type { BackdropProps } from "./Backdrop.types";
import cn from "classnames";

function Backdrop({ onClose, isOpened }: BackdropProps) {
  return (
    <div
      className={cn(styles.backdrop, isOpened && styles.active)}
      onClick={onClose}
    ></div>
  );
}

export default Backdrop;
