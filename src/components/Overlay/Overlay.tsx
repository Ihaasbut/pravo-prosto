import styles from "./Overlay.module.css";
import type { OverlayProps } from "./Overlay.type";
import cn from "classnames";

function Overlay({
    onClosedOverlay,
    isOpened,
    variant = "default",
}: OverlayProps) {
    return (
        <div
            className={cn(styles["overlay"], {
                [styles["overlay-active"]]: isOpened,
                [styles["overlay-dark"]]: variant === "dark",
            })}
            onClick={onClosedOverlay}
        ></div>
    );
}

export default Overlay;
