import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type {
  ServiceI,
  ServicesCategoryI,
  ServiceDetailI,
  ServiceExtrasI,
} from "../../types/mockData";
import { useLanguage } from "../../hooks/use-language";
import TitleBlockGrey from "../../components/titleBlockPrimary/TitleBlockPrimary";
import type { ServicePageStaticI } from "./Service.types";
import PageSkeleton from "../../components/pageSkeleton/PageSkeleton";
import ServiceBanner from "./components/serviceBanner/ServiceBanner";
import ServiceFaq from "./components/serviceFaq/ServiceFaq";
import ServiceRelated from "./components/serviceRelated/ServiceRelated";
import ServiceStages from "./components/serviceStages/ServiceStages";
import WhatWeDo from "./components/whatWeDo/WhatWeDo";

interface ServicePageDataI {
  detail: ServiceDetailI;
  extras: ServiceExtrasI | null;
  related: Pick<ServiceI, "title" | "slug" | "highlights">[];
}

function Service() {
  const params = useParams();
  const [pageData, setPageData] = useState<ServicePageDataI | null>(null);
  const [staticData, setStaticData] = useState<ServicePageStaticI | null>(null);
  const { language } = useLanguage();

  useEffect(() => {
    (async () => {
      const servicesModule = await import(
        `../../mockData/services/Services.mockData.${language}.ts`
      );
      const extrasModule = await import(
        `../../mockData/services/serviceExtras.mockData.${language}.ts`
      );
      const servicePageModule = await import(
        `./mockData/service-page.mockData.${language}.ts`
      );

      setStaticData(servicePageModule.servicePageStaticData);
      const serviceCategory = servicesModule.serviceCategories.find(
        (category: ServicesCategoryI) => {
          return category.services.some(
            (service) => service.slug === params.slug,
          );
        },
      );

      const service = serviceCategory?.services.find(
        (service: ServiceI) => service.slug === params.slug,
      );

      if (!service?.detailPage) {
        setPageData(null);
        return;
      }

      const related = (serviceCategory?.services ?? [])
        .filter((item: ServiceI) => item.slug !== params.slug)
        .slice(0, 3)
        .map((item: ServiceI) => ({
          title: item.title,
          slug: item.slug,
          highlights: item.highlights,
        }));

      setPageData({
        detail: service.detailPage,
        extras: params.slug
          ? (extrasModule.serviceExtras[params.slug] ?? null)
          : null,
        related,
      });
    })();
  }, [language, params.slug]);

  if (!pageData || !staticData) {
    return <PageSkeleton variant="service" />;
  }

  return (
    <div>
      <TitleBlockGrey
        title={pageData.detail.title}
        description={pageData.detail.description}
        descriptionStyle={"justify"}
      />
      <div className="container">
        <div className="content">
          <WhatWeDo
            title={staticData.whatWeDoTitle}
            features={pageData.detail.features}
          />
          {pageData.extras ? (
            <>
              <ServiceStages
                title={staticData.stagesTitle}
                stages={pageData.extras.stages}
              />
              <ServiceFaq
                title={staticData.faqTitle}
                items={pageData.extras.faq}
              />
            </>
          ) : null}
          <ServiceRelated
            title={staticData.relatedTitle}
            services={pageData.related}
          />
        </div>

        <ServiceBanner
          description={pageData.detail.banner.description}
          buttonText={pageData.detail.banner.buttonText}
          image={pageData.detail.banner.image}
          labelText={staticData.bannerLabel}
        />
      </div>
    </div>
  );
}

export default Service;
