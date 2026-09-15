import { useLanguage } from "../../../hooks/use-language";
import styles from "./ButtonLanguage.module.css";
import cn from "classnames";

function ButtonLanguage() {
  const { language, handleChangeLanguage } = useLanguage();

  return (
    <div className={styles.wrapper}>
      <div className={cn(styles.toggle, language === "en" && styles.active)}>
        <button
          className={styles.left}
          onClick={() => handleChangeLanguage("en")}
        >
          en
        </button>
        <button
          className={styles.right}
          onClick={() => handleChangeLanguage("ru")}
        >
          ru
        </button>
      </div>
    </div>
  );
}

export default ButtonLanguage;
