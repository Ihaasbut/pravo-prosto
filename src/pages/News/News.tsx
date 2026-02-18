import TitleBlockGrey from "../../components/TitleBlockPrimary/TitleBlockPrimary";
import styles from "./News.module.css";

function News() {
    return (
        <div className={styles["news"]}>
            <TitleBlockGrey title="Новости" />
        </div>
    );
}

export default News;
