import { useEffect, useState } from "react";
import TitleBlockGrey from "../../components/TitleBlockPrimary/TitleBlockPrimary";
import YandexMap from "../../components/YandexMap/YandexMap";
import { useLanguage } from "../../hooks/use-language";
import type { TitleBlockPropsI } from "../../types/titleBlock.types";
import styles from "./Contacts.module.css";

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
        return null;
    }

    return (
        <div className={styles["contacts"]}>
            <TitleBlockGrey title={pageData.title} />

            <YandexMap />
        </div>
    );
}

export default Contacts;
