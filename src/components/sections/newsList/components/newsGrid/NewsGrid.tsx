import cn from "classnames";

import NewsItem from "../newsItem/NewsItem";
import type { NewsGridI } from "./NewsGrid.types";

import styles from "./NewsGrid.module.css";

function NewsGrid({ data, variant }: NewsGridI) {
  return (
    <div className={cn(styles.desktop, styles[variant])}>
      {data.map((element) => (
        <NewsItem news={element} variant={variant} key={element.slug} />
      ))}
    </div>
  );
}

export default NewsGrid;
