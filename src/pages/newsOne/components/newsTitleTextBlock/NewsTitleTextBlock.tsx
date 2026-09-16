import Typography from "../../../../components/ui/typography/Typography";
import type { NewsTitleTextBlockPropsI } from "./NewsTitleTextBlock.types";

import styles from "../NewsBlock.module.css";

function NewsTitleTextBlock({ data }: NewsTitleTextBlockPropsI) {
  const { title, text } = data;

  return (
    <div className={styles.wrapper}>
      <div className={styles.titleAndText}>
        <Typography variant="h4" as={"h4"} className={styles.title}>
          {title}
        </Typography>
        <Typography variant="body-m" className={styles.text}>
          {text}
        </Typography>
      </div>
    </div>
  );
}

export default NewsTitleTextBlock;
