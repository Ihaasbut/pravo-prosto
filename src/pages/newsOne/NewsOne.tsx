import TitleBlockGrey from "../../components/sections/titleBlockGrey/TitleBlockGrey";
import styles from "./NewsOne.module.css";
import { useLanguage } from "../../hooks/use-language";
import { useParams } from "react-router-dom";

import NewsList from "../../components/sections/newsList/NewsList";
import PageSkeleton from "../../components/pageSkeleton/PageSkeleton";
import RequestSection from "../../components/sections/requestSection/RequestSection";
import { NEWS_PAGE_DATA } from "../news/News.consts";

function NewsOne() {
  const { language } = useLanguage();
  const { slug } = useParams();
  const pageData = NEWS_PAGE_DATA[language];
  const article = pageData.news.find((newsItem) => newsItem.slug === slug);

  if (!article) {
    return <PageSkeleton variant="news-detail" />;
  }

  const sidebar = pageData.news
    .filter((newsItem) => newsItem.slug !== slug)
    .slice(0, 3);

  return (
    <div className={styles.newsOne}>
      <div className={styles.title}>
        <TitleBlockGrey data={article} />
      </div>

      <div className="container">
        <div className="content">
          <div className={styles.layout}>
            <article className={styles.detail}>
              <div className={styles.meta}>
                <span>{article.categoryName}</span>
                <span>{article.date}</span>
              </div>
              {article.blocks.map((block, id) => {
                const Component = block.component;
                return <Component key={id} {...block} />;
              })}
            </article>

            <aside className={styles.sidebar}>
              <p className={styles.sidebarTitle}>
                {language === "en" ? "More news" : "Ещё новости"}
              </p>
              <NewsList pageData={sidebar} variant="detailPage" />
            </aside>
          </div>
        </div>
      </div>
      <RequestSection request={pageData.page.request} />
    </div>
  );
}

export default NewsOne;
