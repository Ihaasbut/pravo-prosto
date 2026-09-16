import { useParams } from "react-router-dom";

import RequestSection from "../../components/sections/requestSection/RequestSection";
import TitleBlockGrey from "../../components/sections/titleBlockGrey/TitleBlockGrey";
import { useLanguage } from "../../hooks/use-language";
import { NEWS_PAGE_DATA } from "../news/News.consts";
import NotFound from "../notFound/NotFound";
import NewsOneArticle from "./components/newsOneArticle/NewsOneArticle";
import NewsOneSidebar from "./components/newsOneSidebar/NewsOneSidebar";

import styles from "./NewsOne.module.css";

function NewsOne() {
  const { language } = useLanguage();
  const { slug } = useParams();
  const pageData = NEWS_PAGE_DATA[language];
  const article = pageData.news.find((newsItem) => newsItem.slug === slug);

  if (!article) {
    return <NotFound />;
  }

  const { news, page } = NEWS_PAGE_DATA[language];
  const { request, sidebarTitle } = page;
  const sidebar = {
    title: sidebarTitle,
    news: news.filter((newsItem) => newsItem.slug !== slug).slice(0, 3),
  };

  return (
    <div className={styles.newsOne}>
      <div className={styles.title}>
        <TitleBlockGrey data={article} />
      </div>

      <div className="container">
        <div className="content">
          <div className={styles.layout}>
            <NewsOneArticle data={article} />
            <NewsOneSidebar data={sidebar} />
          </div>
        </div>
      </div>
      <RequestSection data={request} />
    </div>
  );
}

export default NewsOne;
