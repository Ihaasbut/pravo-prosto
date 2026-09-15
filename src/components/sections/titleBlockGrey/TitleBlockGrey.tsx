import TitleBlockTransparent from "../titleBlockTransparent/TitleBlockTransparent";
import type { TitleBlockGreyPropsI } from "./TitleBlockGrey.types";
import styles from "./TitleBlockGrey.module.css";

function TitleBlockGrey({
  data,
  onButtonClick,
  children,
}: TitleBlockGreyPropsI) {
  return (
    <div className={styles.wrapper}>
      <TitleBlockTransparent data={data} onButtonClick={onButtonClick}>
        {children}
      </TitleBlockTransparent>
    </div>
  );
}

export default TitleBlockGrey;
