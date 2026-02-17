import { useLanguage } from "../../hooks/use-language";
import Hero from "./components/Hero/Hero";
import { useEffect, useState } from "react";
import type { HomeDataI } from "./types/Mocdata";

function Home() {
    const [data, setData] = useState<HomeDataI | null>(null);
    const { language } = useLanguage();

    useEffect(() => {
        (async () => {
            const module = await import(`./mocData/mockData.${language}.ts`);
            setData(module);
        })();
    }, [language]);

    if (!data) {
        return null;
    }

    return (
        <>
            <Hero heroData={data.heroData} />
        </>
    );
}

export default Home;
