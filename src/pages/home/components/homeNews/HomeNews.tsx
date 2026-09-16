import { useNavigate } from "react-router-dom";

import NewsList from "../../../../components/sections/newsList/NewsList";
import TitleBlockTransparent from "../../../../components/sections/titleBlockTransparent/TitleBlockTransparent";
import { useLanguage } from "../../../../hooks/use-language";
import type { HomeNewsPropsI } from "./HomeNews.types";

import styles from "./HomeNews.module.css";

function HomeNews({ data }: HomeNewsPropsI) {
  const { titleBlock, news } = data;
  const navigate = useNavigate();
  const { language } = useLanguage();
  const goToNews = () => navigate(`/${language}/news`);

  return (
    <section className={styles.section}>
      <TitleBlockTransparent data={titleBlock} onButtonClick={goToNews} />
      <NewsList variant="allPage" data={news} />
    </section>
  );
}

export default HomeNews;
