import cn from "classnames";

import type { NewsCategoriesPropsI } from "./NewsCategories.types";

import styles from "./NewsCategories.module.css";

function NewsCategories({
  data,
  onFilterChange,
  activeCategory,
}: NewsCategoriesPropsI) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.categories}>
        {data.map((category) => {
          const handleClick = () => onFilterChange(category.id);

          return (
            <button
              type="button"
              className={cn(
                styles.button,
                category.id === activeCategory && styles.active,
              )}
              onClick={handleClick}
              key={category.id}
            >
              {category.title}
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default NewsCategories;
