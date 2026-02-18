import type { ButtonClosePropsI } from "./Button.type";
import styles from "./ButtonClose.module.css";

function ButtonClose({ onToggleClose }: ButtonClosePropsI) {
    return (
        <button className={styles["button-close"]} onClick={onToggleClose}>
            <div className={styles["left"]}>[</div>X
            <div className={styles["right"]}>]</div>
        </button>
    );
}

export default ButtonClose;
