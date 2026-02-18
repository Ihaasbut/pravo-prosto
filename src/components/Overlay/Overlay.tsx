import styles from "./Overlay.module.css";
import type { OverlayProps } from "./Overlay.type";
import cn from "classnames";

function Overlay({ onClosedOverlay, isOpened }: OverlayProps) {

    return (
        <div
            className={cn(styles["overlay"], {
                [styles["overlay-active"]]: isOpened,
            })}
            onClick={onClosedOverlay}
        ></div>
    );
}

export default Overlay;
