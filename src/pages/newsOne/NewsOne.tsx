import { useEffect, useState } from "react";
import TitleBlockGrey from "../../components/titleBlockPrimary/TitleBlockPrimary";
import styles from "./NewsOne.module.css";
import type { NewI } from "../../types/news.types";
import { useLanguage } from "../../hooks/use-language";
import { useParams } from "react-router-dom";

import NewsTable from "../../components/newsTable/NewsTable";
import PageSkeleton from "../../components/pageSkeleton/PageSkeleton";
import HomeRequest from "../home/components/homeRequest/HomeRequest";
import type { HomeRequestDataI } from "../home/components/homeRequest/HomeRequest.types";

interface NewsOnePageDataI {
  article: NewI;
  sidebar: NewI[];
  request: HomeRequestDataI;
}

function NewsOne() {
  const [pageData, setPageData] = useState<NewsOnePageDataI | null>(null);
  const { language } = useLanguage();
  const params = useParams();

  useEffect(() => {
    (async () => {
      const newsModule = await import(
        `../../mockData/news/News.mockData.${language}.ts`
      );
      const pageModule = await import(
        `../news/mockData/news-page.mockData.${language}.ts`
      );

      const newsOne = newsModule.news.find(
        (newsOne: NewI) => newsOne.slug === params.slug,
      );
      const sidebarNews = newsModule.news
        .filter((newsItem: NewI) => newsItem.slug !== params.slug)
        .slice(0, 3);

      if (!newsOne) {
        setPageData(null);
        return;
      }

      setPageData({
        article: newsOne,
        sidebar: sidebarNews,
        request: pageModule.request,
      });
    })();
  }, [language, params.slug]);

  if (!pageData) {
    return <PageSkeleton variant="news-detail" />;
  }

  return (
    <div className={styles.newsOne}>
      <TitleBlockGrey
        title={pageData.article.title}
        className={styles.header}
      />

      <div className="container">
        <div className="content">
          <div className={styles.layout}>
            <article className={styles.detail}>
              <div className={styles.meta}>
                <span>{pageData.article.categoryName}</span>
                <span>{pageData.article.date}</span>
              </div>
              {pageData.article.blocks.map((block, id) => {
                const Component = block.component;
                return <Component key={id} {...block} />;
              })}
            </article>

            <aside className={styles.sidebar}>
              <p className={styles.sidebarTitle}>
                {language === "en" ? "More news" : "Ещё новости"}
              </p>
              <NewsTable
                pageData={pageData.sidebar}
                className="newsDetail"
                useSiblingLinks
                compact
              />
            </aside>
          </div>
        </div>
      </div>
      <HomeRequest request={pageData.request} />
    </div>
  );
}

export default NewsOne;
