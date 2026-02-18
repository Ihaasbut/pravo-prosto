import TitleBlockGrey from "../../components/TitleBlockPrimary/TitleBlockPrimary";
import styles from "./Team.module.css";

function Team() {
    return (
        <div className={styles["team"]}>
            <TitleBlockGrey title="Команда" buttonText="ВАКАНСИИ" />
        </div>
    );
}

export default Team;
