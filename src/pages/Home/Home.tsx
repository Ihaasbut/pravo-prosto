import { useLanguage } from "../../hooks/use-language";
import Hero from "./components/Hero/Hero";
import { useEffect, useState } from "react";
import type { PageHomeFullDataI } from "./types/home-page.types";
import PageSkeleton from "../../components/PageSkeleton/PageSkeleton";

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
        return <PageSkeleton variant="home" />;
    }

    return (
        <>
            <Hero hero={pageData.hero} />
        </>
    );
}

export default Home;
