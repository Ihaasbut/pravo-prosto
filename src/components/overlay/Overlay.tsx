import styles from "./Overlay.module.css";
import type { OverlayProps } from "./Overlay.types";
import cn from "classnames";

function Overlay({
  onClosedOverlay,
  isOpened,
  variant = "default",
}: OverlayProps) {
  return (
    <div
      className={cn(
        styles.overlay,
        isOpened && styles.active,
        variant === "dark" && styles.dark,
      )}
      onClick={onClosedOverlay}
    ></div>
  );
}

export default Overlay;
