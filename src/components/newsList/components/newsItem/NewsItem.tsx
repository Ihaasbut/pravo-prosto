import cn from "classnames";
import { Link } from "react-router-dom";

import { useLanguage } from "../../../../hooks/use-language";
import Typography from "../../../ui/typography/Typography";
import styles from "./NewsItem.module.css";
import type { NewsItemI } from "./NewsItem.types";

function NewsItem({ news, variant }: NewsItemI) {
  const { language } = useLanguage();

  return (
    <Link
      to={`/${language}/news/${news.slug}`}
      className={cn(styles.wrapper, variant && styles[variant])}
      data-category={news.categoryId}
    >
      <div className={styles.inner}>
        <span className={styles.badge}>{news.categoryName}</span>
        <Typography variant="body-s" className={styles.title} as="p">
          {news.title}
        </Typography>
        <Typography variant="body-xs" as="p" className={styles.date}>
          {news.date}
        </Typography>
      </div>
    </Link>
  );
}

export default NewsItem;
