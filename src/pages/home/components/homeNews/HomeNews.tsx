import { useNavigate } from "react-router-dom";
import NewsList from "../../../../components/sections/newsList/NewsList";
import TitleBlockTransparent from "../../../../components/sections/titleBlockTransparent/TitleBlockTransparent";
import { useLanguage } from "../../../../hooks/use-language";
import type { HomeNewsPropsI } from "./HomeNews.types";
import styles from "./HomeNews.module.css";

function HomeNews({ newsBlock, news }: HomeNewsPropsI) {
  const navigate = useNavigate();
  const { language } = useLanguage();

  return (
    <section className={styles.section}>
      <TitleBlockTransparent
        data={newsBlock}
        onButtonClick={() => navigate(`/${language}/news`)}
      />
      <div className={styles.list}>
        <div className="container">
          <NewsList variant="allPage" pageData={news} />
        </div>
      </div>
    </section>
  );
}

export default HomeNews;
