import TitleBlockGrey from "../../components/TitleBlockPrimary/TitleBlockPrimary";
import YandexMap from "../../components/YandexMap/YandexMap";
import styles from "./Contacts.module.css";

function Contacts() {
    return (
        <div className={styles["contacts"]}>
            <TitleBlockGrey title={"Контакты"} />

            <YandexMap />
        </div>
    );
}

export default Contacts;
