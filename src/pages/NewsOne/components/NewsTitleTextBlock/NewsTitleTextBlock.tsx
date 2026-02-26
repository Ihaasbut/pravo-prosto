import Typography from "../../../../components/Typography/Typography";
import type { NewsTitleTextBlockI } from "../../../../types/news.types";
import styles from "../NewsBlock.module.css";

function NewsTitleTextBlock({ title, text }: NewsTitleTextBlockI) {
    return (

            
                <div className={styles["news-wrapper"]}>
                    <div className={styles["title-and-text"]}>
                        <Typography
                            variant="h4"
                            as={"h4"}
                            className={styles["title"]}
                        >
                            {title}
                        </Typography>
                        <Typography
                            variant="body-m"
                            as={"p"}
                            className={styles["text"]}
                        >
                            {text}
                        </Typography>
                    </div>
                </div>
        
      
    );
}

export default NewsTitleTextBlock;
