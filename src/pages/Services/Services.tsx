import { useEffect, useState } from "react";
import TitleBlockGrey from "../../components/TitleBlockPrimary/TitleBlockPrimary";

import styles from "./Services.module.css";
import { useLanguage } from "../../hooks/use-language";
import ServiceCategory from "./ServiceCategory/ServiceCategory";
import type { PageServicesFullDataI } from "./types/types";

function Services() {
    const [data, setData] = useState<PageServicesFullDataI | null>(null);
    const { language } = useLanguage();

    useEffect(() => {
        (async () => {
            const servicesModule = await import(
                `../../mockData/mockData.${language}.ts`
            );

            const pageModule = await import(
                `./mockData/mockData.${language}.ts`
            );

            const servicesPageData: PageServicesFullDataI = {
                servicesData: servicesModule.serviceCategories,
                pageServicesData: pageModule,
            };

            setData(servicesPageData);
            console.log(servicesPageData)
        })();
    }, [language]);

    if (!data) {
        return null;
    }

    return (
        <div className={styles["services"]}>
            <TitleBlockGrey
                title={data.pageServicesData.headerPage.title}
                description={data.pageServicesData.headerPage.description}
                buttonText={data.pageServicesData.headerPage.buttonText}
            />
            <div className="container">
                <div className="content">
                    {data.servicesData.map((category) => (
                        <ServiceCategory
                            area={category.area}
                            services={category.services}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Services;
