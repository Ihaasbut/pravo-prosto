import styles from "./TitleBlockPrimary.module.css";
import TitleBlock from "../titleBlockHome/TitleBlockHome";
import type { TitleBlockPropsI } from "../../types/titleBlock.types";

function TitleBlockGrey({
  title,
  description,
  buttonText,
  descriptionStyle,
}: TitleBlockPropsI) {
  return (
    <div className={styles.wrapper}>
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
