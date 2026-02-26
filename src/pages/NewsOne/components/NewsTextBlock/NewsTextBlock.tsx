import Typography from "../../../../components/Typography/Typography";
import type { NewsTextBlockI } from "../../../../types/news.types";
import styles from "../NewsBlock.module.css";
import cn from "classnames"

function NewsTextBlock({ text }: NewsTextBlockI) {
    return (
     
          
                <div className={styles["news-wrapper"]}>
                    <Typography
                        variant={"body-m"}
                        as={"p"}
                        className={cn(styles["text"], styles["text-only"])}
                    >
                        {text}
                    </Typography>
                </div>
       
    );
}

export default NewsTextBlock;
