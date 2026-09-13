import { useNavigate } from "react-router-dom";
import NewsTable from "../../../../components/newsTable/NewsTable";
import TitleBlockHome from "../../../../components/titleBlockHome/TitleBlockHome";
import { useLanguage } from "../../../../hooks/use-language";
import type { HomeNewsPropsI } from "./HomeNews.types";
import styles from "./HomeNews.module.css";

function HomeNews({ newsBlock, news }: HomeNewsPropsI) {
  const navigate = useNavigate();
  const { language } = useLanguage();

  return (
    <section className={styles.section}>
      <TitleBlockHome
        title={newsBlock.title}
        description={newsBlock.description}
        buttonText={newsBlock.buttonText}
        onButtonClick={() => navigate(`/${language}/news`)}
      />
      <div className={styles.list}>
        <div className="container">
          <NewsTable
            className="newsAll"
            pageData={news}
            toPrefix="news/"
            compact
          />
        </div>
      </div>
    </section>
  );
}

export default HomeNews;
