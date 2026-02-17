import { useEffect, useState } from "react";
import TitleBlockGrey from "../../components/TitleBlockGrey/TitleBlockGrey";

import styles from "./Services.module.css";
import { useLanguage } from "../../hooks/use-language";
import ServicesBlock from "./ServicesBlock/ServicesBlock";
import type { PageServicesFullDataI } from "./types/types";

function Services() {
    const [data, setData] = useState<PageServicesFullDataI | null>(null);
    const { language } = useLanguage();

    useEffect(() => {
        (async () => {
            const commonServicesModule = await import(
                `../../mockData/mockData.${language}.ts`
            );

            const pageServicesModule = await import(
              `./mockData/mockData.${language}.ts`
          );
         

            const data: PageServicesFullDataI = {
              commonServicesData: commonServicesModule,
              pageServicesData: pageServicesModule,
            }    

            setData(data);
        })();
    }, [language]);


    if (!data) {
        return null;
    }



    return (
        <div className={styles["services"]}>
            <TitleBlockGrey
                title={data.pageServicesData.pageTitleData.title}
                description={data.pageServicesData.pageTitleData.description}
                buttonText={data.pageServicesData.pageTitleData.buttonText}
            />
            <div className="container">
                <div className="content">
                    {data.commonServicesData.servicesBlocks.map((el) => (
                        <ServicesBlock
                            area={el.area}
                            serviceCards={el.serviceCards}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Services;
