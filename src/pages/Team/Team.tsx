import TitleBlockGrey from "../../components/TitleBlockGrey/TitleBlockGrey";
import styles from "./Team.module.css";

function Team() {
    return <div className={styles["team"]}>
          <TitleBlockGrey title="Команда" buttonText="ВАКАНСИИ"/>
    </div>;
}

export default Team;
