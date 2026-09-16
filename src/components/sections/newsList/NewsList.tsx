import cn from "classnames";

import NewsGrid from "./components/newsGrid/NewsGrid";
import NewsSlider from "./components/newsSlider/NewsSlider";
import type { NewsListI } from "./NewsList.types";

import styles from "./NewsList.module.css";

function NewsList({ data, variant }: NewsListI) {
  return (
    <div
      className={cn(variant === "allPage" && "container", styles[variant])}
    >
      {variant === "allPage" && <NewsSlider data={data} />}
      <NewsGrid data={data} variant={variant} />
    </div>
  );
}

export default NewsList;
