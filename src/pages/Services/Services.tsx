import { useEffect, useState } from "react";
import TitleBlockGrey from "../../components/TitleBlockPrimary/TitleBlockPrimary";

import styles from "./Services.module.css";
import { useLanguage } from "../../hooks/use-language";
import ServiceCategory from "./ServiceCategory/ServiceCategory";
import type { PageServicesFullDataI } from "./types/services-page.types";


function Services() {
    const [pageData, setPageData] = useState<PageServicesFullDataI | null>(
        null,
    );
    const { language } = useLanguage();

    useEffect(() => {
        (async () => {
            const servicesModule = await import(
                `../../mockData/services/Services.mockData.${language}.ts`
            );

            const pageModule = await import(
                `./mockData/services-page.mockData.${language}.ts`
            );
          
            const pageServicesFullData: PageServicesFullDataI = {
                serviceCategories: servicesModule.serviceCategories,
                page: pageModule,
            };
            console.log(pageServicesFullData.page)
           
            setPageData(pageServicesFullData);
        })();
    }, [language]);

    if (!pageData) {
        return null;
    }
 
    return (
        <div className={styles["services"]}>
            <TitleBlockGrey
                title={pageData.page.headerPage.title}
                description={pageData.page.headerPage.description}
                buttonText={pageData.page.headerPage.buttonText}
            />
           
                    {pageData.serviceCategories.map((category) => (
                        <ServiceCategory
                            area={category.area}
                            services={category.services}
                        />
                    ))}
  
        </div>
    );
}

export default Services;
