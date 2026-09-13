import cn from "classnames";
import type { ReactNode } from "react";

import styles from "./TitleBlockPrimary.module.css";
import TitleBlock from "../titleBlockHome/TitleBlockHome";
import type { TitleBlockPropsI } from "../../types/titleBlock.types";

function TitleBlockGrey({
  title,
  description,
  buttonText,
  descriptionStyle,
  children,
  className,
}: TitleBlockPropsI & { children?: ReactNode; className?: string }) {
  return (
    <div className={cn(styles.wrapper, className)}>
      <TitleBlock
        title={title}
        description={description}
        buttonText={buttonText}
        descriptionStyle={descriptionStyle}
      >
        {children}
      </TitleBlock>
    </div>
  );
}

export default TitleBlockGrey;
