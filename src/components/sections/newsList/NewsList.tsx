import NewsGrid from "./components/newsGrid/NewsGrid";
import NewsSlider from "./components/newsSlider/NewsSlider";
import styles from "./NewsList.module.css";
import type { NewsListI } from "./NewsList.types";

function NewsList({ pageData, variant }: NewsListI) {
  return (
    <div className={styles[variant]}>
      {variant === "allPage" && <NewsSlider pageData={pageData} />}
      <NewsGrid pageData={pageData} variant={variant} />
    </div>
  );
}

export default NewsList;
