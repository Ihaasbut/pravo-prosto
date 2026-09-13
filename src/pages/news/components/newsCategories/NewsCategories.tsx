import type { NewsCategoriesI } from "./NewsCategories.types";
import styles from "./NewsCategories.module.css";
import cn from "classnames";

function NewsCategories({
  newsCategories,
  onFilterChange,
  activeCategory,
}: NewsCategoriesI) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.categories}>
        {newsCategories.map((category) => (
          <button
            type="button"
            className={cn(
              styles.button,
              category.id === activeCategory && styles.active,
            )}
            onClick={() => {
              onFilterChange(category.id);
            }}
            aria-pressed={category.id === activeCategory}
            key={category.id}
          >
            {category.title}
          </button>
        ))}
      </div>
    </div>
  );
}

export default NewsCategories;
