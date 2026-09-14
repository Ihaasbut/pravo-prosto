import Typography from "../../../../components/ui/typography/Typography";
import type { NewsTitleTextBlockI } from "../../../../types/news.types";
import styles from "../NewsBlock.module.css";

function NewsTitleTextBlock({ title, text }: NewsTitleTextBlockI) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleAndText}>
        <Typography variant="h4" as={"h4"} className={styles.title}>
          {title}
        </Typography>
        <Typography variant="body-m" as={"p"} className={styles.text}>
          {text}
        </Typography>
      </div>
    </div>
  );
}

export default NewsTitleTextBlock;
