import { useLanguage } from "../../hooks/use-language";
import Hero from "./components/Hero/Hero";
import { useEffect, useState } from "react";
import type { PageHomeFullDataI } from "./types/home-page.types";
import PagePreloader from "../../components/PagePreloader/PagePreloader";

function Home() {
    const [pageData, setPageData] = useState<PageHomeFullDataI | null>(null);
    const { language } = useLanguage();

    useEffect(() => {
        (async () => {
            const pageModule = await import(
                `./mockData/Home.mockData.${language}.ts`
            );
            setPageData(pageModule);
        })();
    }, [language]);

    if (!pageData) {
        return <PagePreloader label="Loading home page" />;
    }

    return (
        <>
            <Hero hero={pageData.hero} />
        </>
    );
}

export default Home;
