
import { useTheme } from "../../../hooks/use-theme";
import styles from "./ButtonTheme.module.css";
import cn from "classnames";

function ButtonTheme() {
    const { theme, handleChangeTheme } = useTheme();

    return (
        <div className={styles["wrapper"]}>
            <div
                className={cn(styles["header-toggle"], {
                    [styles["active"]]: theme === "dark",
                })}
            >
                <button
                    className={styles["left"]}
                    onClick={() => handleChangeTheme("dark")}
                >
                   dark
                </button>
                <button
                    className={styles["right"]}
                    onClick={() => handleChangeTheme("light")}
                >
                   light
                </button>
            </div>
        </div>
    );
}

export default ButtonTheme;
