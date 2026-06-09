import { useEffect, useState } from "react";
import TitleBlockGrey from "../../components/TitleBlockPrimary/TitleBlockPrimary";
import styles from "./NewsOne.module.css";
import type { NewI } from "../../types/news.types";
import { useLanguage } from "../../hooks/use-language";
import { useParams } from "react-router-dom";
import cn from "classnames";

import NewsTable from "../../components/NewsTable/NewsTable";
import PageSkeleton from "../../components/PageSkeleton/PageSkeleton";

function NewsOne() {
    const [pageData, setPageData] = useState<NewI | null>(null);
    const [pageSidebar, setPageSidebar] = useState<NewI[] | null>(null);
    const { language } = useLanguage();
    const params = useParams();

    useEffect(() => {
        (async () => {
            const newsModule = await import(
                `../../mockData/news/News.mockData.${language}.ts`
            );

            const newsOne = newsModule.news.find(
                (newsOne: NewI) => newsOne.slug === params.slug,
            );
            const sidebarNews = newsModule.news
                .filter((newsItem: NewI) => newsItem.slug !== params.slug)
                .slice(0, 3);
            setPageData(newsOne);
            setPageSidebar(sidebarNews);
        })();
    }, [language, params.slug]);

    if (!pageData || !pageSidebar) {
        return <PageSkeleton variant="news-detail" />;
    }

    return (
        <div className={styles["newsOne"]}>
            <TitleBlockGrey title={pageData.title} />

            <div className={styles["detail-and-news"]}>
                <div className={cn(styles["detail"], "block-margin")}>
                    {pageData.blocks.map((block, id) => {
                        const Component = block.component;
                        return <Component key={id} {...block} />;
                    })}
                </div>

                <div className={styles["sidebar-wrapper"]}>
                    <div className="container">
                        <div className={styles["sidebar"]}>
                            <NewsTable
                                pageData={pageSidebar}
                                className="news-detail"
                                useSiblingLinks
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsOne;

// import { useEffect, useState } from "react";
// import TitleBlockGrey from "../../components/TitleBlockPrimary/TitleBlockPrimary";
// import styles from "./NewsOne.module.css";
// import type { NewI } from "../../types/news.types";
// import { useLanguage } from "../../hooks/use-language";
// import { useParams } from "react-router-dom";
// // import Typography from "../../components/Typography/Typography";

// function NewsOne() {
//     const [pageData, setPageData] = useState<NewI | null>(null);
//     const { language } = useLanguage();
//     const params = useParams();

//     useEffect(() => {
//         (async () => {
//             const newsModule = await import(
//                 `../../mockData/news/News.mockData.${language}.ts`
//             );

//             const newsOne = newsModule.news.find(
//                 (newsOne: NewI) => newsOne.slug === params.slug,
//             );
//             setPageData(newsOne);
//             console.log(pageData);
//         })();
//     }, [language, params.slug, pageData]);

//     if (!pageData) {
//         return null;
//     }

//     return (
//         <div className={styles["newsOne"]}>
//             <TitleBlockGrey title={pageData.title}/>
//             {pageData.blocks.map((block, id) => {
//                 const Component = block.component;
//                 return <Component key={id} {...block} />;
//             })}
//         </div>
//     );
// }

// export default NewsOne;
