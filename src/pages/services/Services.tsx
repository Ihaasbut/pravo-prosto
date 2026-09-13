import { useEffect, useState } from "react";
import TitleBlockGrey from "../../components/titleBlockPrimary/TitleBlockPrimary";

import styles from "./Services.module.css";
import { useLanguage } from "../../hooks/use-language";
import ServiceCategory from "./serviceCategory/ServiceCategory";
import type { PageServicesFullDataI } from "./Services.types";
import PageSkeleton from "../../components/pageSkeleton/PageSkeleton";
import HomeRequest from "../home/components/homeRequest/HomeRequest";
import ServicesForWhom from "./components/servicesForWhom/ServicesForWhom";

function Services() {
  const [pageData, setPageData] = useState<PageServicesFullDataI | null>(null);
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
        page: {
          headerPage: pageModule.headerPage,
          audiences: pageModule.audiences,
          request: pageModule.request,
        },
      };

      setPageData(pageServicesFullData);
    })();
  }, [language]);

  if (!pageData) {
    return <PageSkeleton variant="services" />;
  }

  return (
    <div className={styles.services}>
      <TitleBlockGrey
        title={pageData.page.headerPage.title}
        description={pageData.page.headerPage.description}
        buttonText={pageData.page.headerPage.buttonText}
      />

      {pageData.serviceCategories.map((category) => (
        <ServiceCategory
          key={category.area}
          area={category.area}
          services={category.services}
        />
      ))}
      <ServicesForWhom audiences={pageData.page.audiences} />
      <HomeRequest request={pageData.page.request} />
    </div>
  );
}

export default Services;
