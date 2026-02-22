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
import ServiceBanner from "./components/ServiceBanner/ServiceBanner";
import { useIsMobile } from "../../hooks/use-isMobile";
import { Swiper, SwiperSlide } from "swiper/react";

function Service() {
    const params = useParams();
    const [pageData, setPageData] = useState<ServiceDetailI | null>(null);
    const { language } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);
    const isMobile = useIsMobile();
    useSlideRight(containerRef, pageData);

    useEffect(() => {
        (async () => {
            const servicesModule = await import(
                `../../mockData/services/Services.mockData.${language}.ts`
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
                    <div
                        className={cn(styles["what-we-do"], "block-margin")}
                        ref={containerRef}
                    >
                        <Typography variant="h3" as={"h3"} className="title">
                            Что мы делаем
                        </Typography>

                        {isMobile ? (
                            <div className={styles["what-we-do-wrapper"]}>
                                <Swiper
                                    spaceBetween={10}
                                    breakpoints={{
                                        600: {
                                            slidesPerView: 2.4,
                                        },
                                        500: {
                                            slidesPerView: 1.6,
                                        },
                                        320: {
                                            slidesPerView: 1.2,
                                        },
                                    }}
                                >
                                    {pageData.features.map((feature, index) => (
                                        <SwiperSlide
                                            key={index}
                                            className={styles["slide-wrapper"]}
                                        >
                                            <div className={styles["inner"]}>
                                                <Typography
                                                    variant="body-m"
                                                    as={"p"}
                                                    className={
                                                        styles["inner-title"]
                                                    }
                                                >
                                                    {feature.title}
                                                </Typography>
                                                <Typography
                                                    variant="body-s"
                                                    as={"p"}
                                                >
                                                    {feature.description}
                                                </Typography>
                                                <div
                                                    className={cn(
                                                        styles["inner-wrapper"],
                                                        "animate-from-top",
                                                    )}
                                                ></div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        ) : (
                            <div className={styles["what-we-do-wrapper"]}>
                                {pageData.features.map((feature, index) => (
                                    <div
                                        className={styles["inner"]}
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
                                        </Typography>
                                        <div
                                            className={cn(
                                                styles["inner-wrapper"],
                                                "animate-from-top",
                                            )}
                                        ></div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <ServiceBanner
                    description={pageData.banner.description}
                    buttonText={pageData.banner.buttonText}
                    image={pageData.banner.image}
                />
            </div>
        </div>
    );
}

export default Service;
