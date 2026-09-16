import { useState } from "react";

import NewsList from "../../components/sections/newsList/NewsList";
import RequestSection from "../../components/sections/requestSection/RequestSection";
import TitleBlockGrey from "../../components/sections/titleBlockGrey/TitleBlockGrey";
import { useLanguage } from "../../hooks/use-language";
import ServicesForWhom from "../services/components/servicesForWhom/ServicesForWhom";
import NewsCategories from "./components/newsCategories/NewsCategories";
import { NEWS_PAGE_DATA } from "./News.consts";

function News() {
  const { language } = useLanguage();
  const { news, page } = NEWS_PAGE_DATA[language];
  const { titleBlock, newsCategories, topics, request } = page;
  const [activeCategory, setActiveCategory] = useState(1);

  const filteredNews =
    activeCategory === 1
      ? news
      : news.filter((item) => item.categoryId === activeCategory);

  return (
    <>
      <TitleBlockGrey data={titleBlock}>
        <NewsCategories
          data={newsCategories}
          onFilterChange={setActiveCategory}
          activeCategory={activeCategory}
        />
      </TitleBlockGrey>
      <NewsList variant="allPage" data={filteredNews} />
      <ServicesForWhom data={topics} />
      <RequestSection data={request} />
    </>
  );
}

export default News;
