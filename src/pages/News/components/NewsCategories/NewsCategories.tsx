import type { NewsCategoriesI } from "../../types/news-page.types";
import styles from "./NewsCategories.module.css";
import cn from "classnames";

function NewsCategories({ newsCategories, onFilterChange, activeCategory }: NewsCategoriesI) {

    return (
        <div className={styles["wrapper"]}>
            <div className={cn(styles["news-categories"])}>
                {newsCategories.map((category, index) => (
                    <button
                        className={cn(styles["categories-button"], 
                              category.id === activeCategory && styles["active-category"]
                        )}
                        onClick={() => {
                            onFilterChange(category.id);
                        }}
                        key={index}
                    >
                        {category.title}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default NewsCategories;
