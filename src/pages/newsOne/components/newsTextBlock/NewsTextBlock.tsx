import Typography from "../../../../components/ui/typography/Typography";
import type { NewsTextBlockI } from "../../../../types/news.types";
import styles from "../NewsBlock.module.css";
import cn from "classnames";

function NewsTextBlock({ text }: NewsTextBlockI) {
  return (
    <div className={styles.wrapper}>
      <Typography
        variant={"body-m"}
        as={"p"}
        className={cn(styles.text, styles.textOnly)}
      >
        {text}
      </Typography>
    </div>
  );
}

export default NewsTextBlock;
