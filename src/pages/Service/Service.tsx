import { useParams } from "react-router-dom";
import styles from "./Service.module.css";
import type {
    ServiceI,
    ServiceCategoryI,
    ServiceDetailI,
} from "../../types/mockData";
import { useEffect, useState } from "react";
import { useLanguage } from "../../hooks/use-language";
import TitleBlockGrey from "../../components/TitleBlockPrimary/TitleBlockPrimary";

function Service() {
    const params = useParams();
    const [data, setData] = useState<ServiceDetailI | null>(null);
    const { language } = useLanguage();

    useEffect(() => {
        (async () => {
            const servicesModule = await import(
                `../../mockData/mockData.${language}.ts`
            );

            const serviceCategory = servicesModule.serviceCategories.find(
                (category: ServiceCategoryI) => {
                    return category.services.some(
                        (service) => service.slug === params.slug,
                    );
                },
            );


            const service = serviceCategory.services.find(
                (serviceDetail: ServiceI) =>
                    serviceDetail.slug === params.slug,
            );

            setData(service.detailPage);
        })();
    }, [language, params.slug]);

    if (!data) {
        return "такой услуги нет";
    }

    return (
        <div className={styles["service"]}>
            <TitleBlockGrey
                title={data.title}
                description={data.description}
                descriptionStyle={"justify"}
            />
        </div>
    );
}

export default Service;
