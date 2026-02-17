import styles from "./TitleBlockGrey.module.css";
import TitleBlock, { type TitleBlockPropsI } from "../TitleBlock/TitleBlock";

function TitleBlockGrey({ title, description, buttonText, classname }: TitleBlockPropsI) {
    return (
        <div className={styles["title-block-wrapper-grey"]}>
            <TitleBlock
                title={title}
                description={description}
                buttonText={buttonText}
                classname={classname}
            />
        </div>
    );
}

export default TitleBlockGrey;
