import { useParams } from "react-router-dom";
import styles from "./Service.module.css";
import type {
    ServiceI,
    ServicesCategoryI,
    ServiceDetailI,
} from "../../types/mockData";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../hooks/use-language";
import TitleBlockGrey from "../../components/TitleBlockPrimary/TitleBlockPrimary";
import Typography from "../../components/Typography/Typography";
import { useSlideRight } from "../../hooks/animation/useSlideRight";
import cn from "classnames";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Service() {
    const params = useParams();
    const [pageData, setPageData] = useState<ServiceDetailI | null>(null);
    const { language } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);
    useSlideRight(containerRef, pageData);

    useEffect(() => {
        (async () => {
            const servicesModule = await import(
                `../../mockData/mockData.${language}.ts`
            );

            const serviceCategory = servicesModule.serviceCategories.find(
                (category: ServicesCategoryI) => {
                    return category.services.some(
                        (service) => service.slug === params.slug,
                    );
                },
            );

            const service = serviceCategory.services.find(
                (service: ServiceI) => service.slug === params.slug,
            );

            setPageData(service.detailPage);
        })();
    }, [language, params.slug]);

    if (!pageData) {
        return "Услуга не загрузилась";
    }

    return (
        <div className={styles["service"]}>
            <TitleBlockGrey
                title={pageData.title}
                description={pageData.description}
                descriptionStyle={"justify"}
            />
            <div className="container">
                <div className="content">
                    <div className={styles["what-we-do"]} ref={containerRef}>
                        <Typography variant="h3" as={"h3"} className="title">
                            Что мы делаем
                        </Typography>
                        <div className={styles["what-we-do-wrapper"]}>
                            {pageData.features.map((feature, index) => (
                                <div
                                    className={
                                        styles["inner"]
                              
                                    }
                                    key={index}
                                >
                                    <Typography
                                        variant="body-m"
                                        as={"p"}
                                        className={styles["inner-title"]}
                                    >
                                        {feature.title}
                                    </Typography>
                                    <Typography variant="body-s" as={"p"}>
                                        {feature.description}
                                    </Typography>{" "}
                                    <div
                                        className={cn(styles["inner-wrapper"], "animate-from-top") }
                                    ></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;
