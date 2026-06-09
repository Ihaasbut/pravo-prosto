import { useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "../../../hooks/use-language";
import type { ServiceI, ServicesCategoryI } from "../../../types/mockData";
import styles from "./ButtonLanguage.module.css";
import cn from "classnames";

function ButtonLanguage() {
    const { language, handleChangeLanguage } = useLanguage();
    const navigate = useNavigate();
    const location = useLocation();

    const changeUrl = async (newlang: string) => {
        const pathname = location.pathname;
        const segments = pathname.split("/").filter(Boolean);

        if (
            segments.length === 3 &&
            segments[1] === "services" &&
            segments[2]
        ) {
            const currentServicesModule = await import(
                `../../../mockData/services/Services.mockData.${language}.ts`
            );
            const nextServicesModule = await import(
                `../../../mockData/services/Services.mockData.${newlang}.ts`
            );
            const currentServiceCategories: ServicesCategoryI[] =
                currentServicesModule.serviceCategories;
            const nextServiceCategories: ServicesCategoryI[] =
                nextServicesModule.serviceCategories;

            for (
                let categoryIndex = 0;
                categoryIndex < currentServiceCategories.length;
                categoryIndex++
            ) {
                const serviceIndex = currentServiceCategories[
                    categoryIndex
                ].services.findIndex(
                    (service: ServiceI) => service.slug === segments[2],
                );

                if (serviceIndex !== -1) {
                    const nextSlug =
                        nextServiceCategories[categoryIndex]?.services[
                            serviceIndex
                        ]?.slug;

                    if (nextSlug) {
                        navigate(`/${newlang}/services/${nextSlug}`, {
                            replace: true,
                        });
                        return;
                    }
                }
            }
        }

        const newPath =
            segments.length > 0
                ? `/${newlang}/${segments.slice(1).join("/")}`
                : `/${newlang}`;
        navigate(newPath, { replace: true });
    };
    return (
        <div className={styles["wrapper"]}>
            <div
                className={cn(styles["header-toggle"], {
                    [styles["active"]]: language === "en",
                })}
            >
                <button
                    className={styles["left"]}
                    onClick={async () => {
                        handleChangeLanguage("en");
                        await changeUrl("en");
                    }}
                >
                    en
                </button>
                <button
                    className={styles["right"]}
                    onClick={async () => {
                        handleChangeLanguage("ru");
                        await changeUrl("ru");
                    }}
                >
                    ru
                </button>
            </div>
        </div>
    );
}

export default ButtonLanguage;
