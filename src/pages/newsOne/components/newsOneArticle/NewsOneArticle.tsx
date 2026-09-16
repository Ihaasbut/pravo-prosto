import NewsOneArticleBlocks from "./components/newsOneArticleBlocks/NewsOneArticleBlocks";
import type { NewsOneArticlePropsI } from "./NewsOneArticle.types";

import styles from "./NewsOneArticle.module.css";

function NewsOneArticle({ data }: NewsOneArticlePropsI) {
  const { categoryName, date, blocks } = data;

  return (
    <article className={styles.detail}>
      <div className={styles.meta}>
        <span>{categoryName}</span>
        <span>{date}</span>
      </div>
      <NewsOneArticleBlocks data={blocks} />
    </article>
  );
}

export default NewsOneArticle;
