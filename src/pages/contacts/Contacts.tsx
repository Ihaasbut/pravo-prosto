import { useEffect, useState } from "react";
import TitleBlockGrey from "../../components/titleBlockPrimary/TitleBlockPrimary";
import YandexMap from "../../components/yandexMap/YandexMap";
import { useLanguage } from "../../hooks/use-language";
import type { TitleBlockPropsI } from "../../types/titleBlock.types";
import styles from "./Contacts.module.css";
import PageSkeleton from "../../components/pageSkeleton/PageSkeleton";

function Contacts() {
    const [pageData, setPageData] = useState<TitleBlockPropsI | null>(null);
    const { language } = useLanguage();

    useEffect(() => {
        (async () => {
            const pageModule = await import(
                `./mockData/contacts-page.mockData.${language}.ts`
            );

            setPageData(pageModule.headerPage);
        })();
    }, [language]);

    if (!pageData) {
        return <PageSkeleton variant="contacts" />;
    }

    return (
        <div className={styles.contacts}>
            <TitleBlockGrey title={pageData.title} />

            <YandexMap />
        </div>
    );
}

export default Contacts;
