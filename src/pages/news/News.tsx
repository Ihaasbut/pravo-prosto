import { useEffect, useState } from "react";
import TitleBlockGrey from "../../components/titleBlockPrimary/TitleBlockPrimary";
import styles from "./News.module.css";

import { useLanguage } from "../../hooks/use-language";
import type { NewsCategoriesDataI, PageNewsFullDataI } from "./News.types";
import NewsList from "../../components/newsList/NewsList";
import NewsCategories from "./components/newsCategories/NewsCategories";
import PageSkeleton from "../../components/pageSkeleton/PageSkeleton";
import RequestSection from "../../components/sections/requestSection/RequestSection";
import ServicesForWhom from "../services/components/servicesForWhom/ServicesForWhom";

function News() {
  const [pageData, setPageData] = useState<PageNewsFullDataI | null>(null);
  const [filterData, setFilterData] = useState<NewsCategoriesDataI>({
    news: [],
    activeCategory: 1,
  });

  const { language } = useLanguage();

  useEffect(() => {
    (async () => {
      const newsModule = await import(
        `../../mockData/news/News.mockData.${language}.ts`
      );

      const pageModule = await import(
        `./mockData/news-page.mockData.${language}.ts`
      );

      const pageNewsFullData: PageNewsFullDataI = {
        news: newsModule.news,
        page: {
          headerPage: pageModule.headerPage,
          newsCategories: pageModule.newsCategories,
          topics: pageModule.topics,
          request: pageModule.request,
        },
      };

      setPageData(pageNewsFullData);
      setFilterData({ news: newsModule.news, activeCategory: 1 });
    })();
  }, [language]);

  if (!pageData) {
    return <PageSkeleton variant="news" />;
  }

  const onFilterChange = (id: number) => {
    if (id === 1) {
      setFilterData({ news: pageData.news, activeCategory: 1 });

      return;
    }
    const filteredData = pageData.news.filter((news) => {
      return news.categoryId === id;
    });
    setFilterData({ news: filteredData, activeCategory: id });
  };

  return (
    <div className={styles.news}>
      <TitleBlockGrey
        title={pageData.page.headerPage.title}
        description={pageData.page.headerPage.description}
        className={styles.header}
      >
        <NewsCategories
          newsCategories={pageData.page.newsCategories}
          onFilterChange={onFilterChange}
          activeCategory={filterData.activeCategory}
        />
      </TitleBlockGrey>
      <div className={styles.list}>
        <div className="container">
          <NewsList variant="allPage" pageData={filterData.news} />
        </div>
      </div>
      <ServicesForWhom audiences={pageData.page.topics} />
      <RequestSection request={pageData.page.request} />
    </div>
  );
}

export default News;
