import { useEffect, useState } from "react";
import TitleBlockGrey from "../../components/titleBlockPrimary/TitleBlockPrimary";
import styles from "./News.module.css";

import { useLanguage } from "../../hooks/use-language";
import type { NewsCategoriesDataI, PageNewsFullDataI } from "./News.types";
import NewsTable from "../../components/newsTable/NewsTable";
import NewsCategories from "./components/newsCategories/NewsCategories";
import PageSkeleton from "../../components/pageSkeleton/PageSkeleton";

function News() {
  const [pageData, setPageData] = useState<PageNewsFullDataI | null>(null);
  const [filterData, setFilterData] = useState<NewsCategoriesDataI>({
    news: [],
    activeCategory: 1,
  });
  // const [activeNewsCategory, setActiveNewsCategory] = useState<number>(1);

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
        page: pageModule,
      };

      setPageData(pageNewsFullData);
      setFilterData({ news: newsModule.news, activeCategory: 1 });
    })();
  }, [language]);

  if (!pageData) {
    return <PageSkeleton variant="news" />;
  }

  const onFilterChange = (id: number) => {
    // setActiveNewsCategory(id);
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
      <TitleBlockGrey title={pageData.page.headerPage.title} />
      <div className={styles.filterAndPage}>
        <NewsCategories
          newsCategories={pageData.page.newsCategories}
          onFilterChange={onFilterChange}
          activeCategory={filterData.activeCategory}
        />{" "}
        <div className="container">
          <NewsTable className="newsAll" pageData={filterData.news} />
        </div>
      </div>
    </div>
  );
}

export default News;

// import { useEffect, useState } from "react";
// import TitleBlockGrey from "../../components/titleBlockPrimary/TitleBlockPrimary";
// import styles from "./News.module.css";

// import { useLanguage } from "../../hooks/use-language";
// import type { PageNewsFullDataI } from "./News.types";
// import NewsTable from "./components/newsTable/NewsTable";
// import NewsCategories from "./components/newsCategories/NewsCategories";
// import type { NewI } from "../../types/news.types";

// function News() {
//     const [pageData, setPageData] = useState<PageNewsFullDataI | null>(null);
//     const [filterData, setFilterData] = useState<NewI[]>([]);
//     const [activeNewsCategory, setActiveNewsCategory] = useState<number>(1)

//     const { language } = useLanguage();

//     useEffect(() => {
//         (async () => {
//             const newsModule = await import(
//                 `../../mockData/news/News.mockData.${language}.ts`
//             );

//             const pageModule = await import(
//                 `./mockData/news-page.mockData.${language}.ts`
//             );

//             const pageNewsFullData: PageNewsFullDataI = {
//                 news: newsModule.news,
//                 page: pageModule,
//             };

//             setPageData(pageNewsFullData);
//             setFilterData(newsModule.news);
//         })();
//     }, [language]);

//     if (!pageData) {
//         return null;
//     }

//     const onFilterChange = (id: number) => {
//         setActiveNewsCategory(id)
//         if (id === 1) {
//             setFilterData(pageData.news);

//             return;
//         }
//         const filteredData = pageData.news.filter((news) => {
//             return news.categoryId === id;
//         });
//         setFilterData(filteredData);
//     };

//     return (
//         <div className={styles.news}>
//             <TitleBlockGrey title={pageData.page.headerPage.title} />
//             <div className={styles.filterAndPage}>
//                 <NewsCategories
//                     newsCategories={pageData.page.newsCategories}
//                     onFilterChange={onFilterChange}
//                     activeCategory={activeNewsCategory}
//                 />
//                 <NewsTable pageData={filterData} />
//             </div>
//         </div>
//     );
// }

// export default News;
