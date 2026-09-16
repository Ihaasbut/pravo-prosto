import NewsList from "../../../../components/sections/newsList/NewsList";
import type { NewsOneSidebarPropsI } from "./NewsOneSidebar.types";

import styles from "./NewsOneSidebar.module.css";

function NewsOneSidebar({ data }: NewsOneSidebarPropsI) {
  const { title, news } = data;

  return (
    <aside className={styles.sidebar}>
      <p className={styles.sidebarTitle}>{title}</p>
      <NewsList data={news} variant="detailPage" />
    </aside>
  );
}

export default NewsOneSidebar;
