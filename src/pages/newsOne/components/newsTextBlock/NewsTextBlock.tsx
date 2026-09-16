import cn from "classnames";

import Typography from "../../../../components/ui/typography/Typography";
import type { NewsTextBlockPropsI } from "./NewsTextBlock.types";

import styles from "../NewsBlock.module.css";

function NewsTextBlock({ data }: NewsTextBlockPropsI) {
  const { text } = data;

  return (
    <div className={styles.wrapper}>
      <Typography
        variant={"body-m"}
        className={cn(styles.text, styles.textOnly)}
      >
        {text}
      </Typography>
    </div>
  );
}

export default NewsTextBlock;
