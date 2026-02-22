import { useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "../../../hooks/use-language";
import styles from "./ButtonLanguage.module.css";
import cn from "classnames";

function ButtonLanguage() {
    const { language, handleChangeLanguage } = useLanguage();
    const navigate = useNavigate();
    const location = useLocation();

    const changeUrl = (newlang: string) => {
        const pathname = location.pathname;
        const segments = pathname.split("/").filter(Boolean);
        const newPath =
            segments.length > 0
                ? `/${newlang}/${segments.slice(1).join("/")}`
                : `/${newlang}`;
        navigate(newPath, { replace: true });
    };
    return (
        <div className={styles["wrapper"]}>
            <div
                className={cn(styles["header-toggle"], {
                    [styles["active"]]: language === "en",
                })}
            >
                <button
                    className={styles["left"]}
                    onClick={() => {
                        handleChangeLanguage("en");
                        changeUrl("en");
                    }}
                >
                    en
                </button>
                <button
                    className={styles["right"]}
                    onClick={() => {
                        handleChangeLanguage("ru");
                        changeUrl("ru");
                    }}
                >
                    ru
                </button>
            </div>
        </div>
    );
}

export default ButtonLanguage;
