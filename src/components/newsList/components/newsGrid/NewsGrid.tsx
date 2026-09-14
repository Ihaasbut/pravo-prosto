import cn from "classnames";

import NewsItem from "../newsItem/NewsItem";
import styles from "./NewsGrid.module.css";
import type { NewsGridI } from "./NewsGrid.types";

function NewsGrid({ pageData, variant }: NewsGridI) {
  return (
    <div className={cn(styles.desktop, styles[variant])}>
      {pageData.map((element, index) => (
        <NewsItem news={element} variant={variant} key={index} />
      ))}
    </div>
  );
}

export default NewsGrid;
