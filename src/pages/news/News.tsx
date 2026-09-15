import { useState } from "react";
import TitleBlockGrey from "../../components/sections/titleBlockGrey/TitleBlockGrey";
import styles from "./News.module.css";

import { useLanguage } from "../../hooks/use-language";
import NewsList from "../../components/sections/newsList/NewsList";
import NewsCategories from "./components/newsCategories/NewsCategories";
import RequestSection from "../../components/sections/requestSection/RequestSection";
import ServicesForWhom from "../services/components/servicesForWhom/ServicesForWhom";
import { NEWS_PAGE_DATA } from "./News.consts";

function News() {
  const { language } = useLanguage();
  const pageData = NEWS_PAGE_DATA[language];
  const [activeCategory, setActiveCategory] = useState(1);

  const filteredNews =
    activeCategory === 1
      ? pageData.news
      : pageData.news.filter((news) => news.categoryId === activeCategory);

  return (
    <div className={styles.news}>
      <TitleBlockGrey data={pageData.page.headerPage}>
        <NewsCategories
          newsCategories={pageData.page.newsCategories}
          onFilterChange={setActiveCategory}
          activeCategory={activeCategory}
        />
      </TitleBlockGrey>
      <div className={styles.list}>
        <div className="container">
          <NewsList variant="allPage" pageData={filteredNews} />
        </div>
      </div>
      <ServicesForWhom audiences={pageData.page.topics} />
      <RequestSection request={pageData.page.request} />
    </div>
  );
}

export default News;
