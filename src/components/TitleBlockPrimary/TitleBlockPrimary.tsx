import styles from "./TitleBlockPrimary.module.css";
import TitleBlock from "../TitleBlockHome/TitleBlockHome";
import type { TitleBlockPropsI } from "../../types/TitleBlock.types";

function TitleBlockGrey({
    title,
    description,
    buttonText,
    descriptionStyle,
}: TitleBlockPropsI) {
    return (
        <div className={styles["title-block-wrapper"]}>
            <TitleBlock
                title={title}
                description={description}
                buttonText={buttonText}
                descriptionStyle={descriptionStyle}
            />
        </div>
    );
}

export default TitleBlockGrey;
