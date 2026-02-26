import TitleBlockGrey from "../../components/TitleBlockPrimary/TitleBlockPrimary";
import styles from "./Contacts.module.css";

function Contacts() {
    return (
        <div className={styles["contacts"]}>
            <TitleBlockGrey title={"Контакты"} />
        </div>
    );
}

export default Contacts;
