import { useParams } from "react-router-dom";
import styles from "./Service.module.css";
import type {
    ServiceCardI,
    ServiceDetailI,
    ServicesI,
} from "../../types/mockData";
import { useEffect, useState } from "react";
import { useLanguage } from "../../hooks/use-language";
import TitleBlockGrey from "../../components/TitleBlockGrey/TitleBlockGrey";
// import { useEffect } from "react";
// import { useLanguage } from "../../hooks/use-language";

function Service() {
    const params = useParams();
    const [data, setData] = useState<ServiceDetailI | null>(null);
    const { language } = useLanguage();

    useEffect(() => {
        (async () => {
            const servicesModule = await import(
                `../../mockData/mockData.${language}.ts`
            );
            const servicesBlock = servicesModule.servicesBlocks.find(
                (el: ServicesI) => {
                    return el.serviceCards.some(
                        (card) => card.slug === params.slug,
                    );
                },
            );

            const serviceAreaCard = servicesBlock.serviceCards.find(
                (serviceDetail: ServiceCardI) =>
                    serviceDetail.slug === params.slug,
            );

            setData(serviceAreaCard.detailPage);
        })();
    }, [language, params.slug]);

    if (!data) {
        return "такой услуги нет";
    }

    return (
        <div className={styles["service"]}>
            <TitleBlockGrey title={data.title} description={data.description} classname={"justify"}/>
        </div>
    );
}

export default Service;
