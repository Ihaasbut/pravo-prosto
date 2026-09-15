import { useParams } from "react-router-dom";
import type { ServiceI } from "../../types/mockData";
import { useLanguage } from "../../hooks/use-language";
import TitleBlockGrey from "../../components/sections/titleBlockGrey/TitleBlockGrey";
import type { TitleBlockI } from "../../types/titleBlock.types";
import PageSkeleton from "../../components/pageSkeleton/PageSkeleton";
import ServiceBanner from "./components/serviceBanner/ServiceBanner";
import ServiceFaq from "./components/serviceFaq/ServiceFaq";
import ServiceRelated from "./components/serviceRelated/ServiceRelated";
import ServiceStages from "./components/serviceStages/ServiceStages";
import WhatWeDo from "./components/whatWeDo/WhatWeDo";
import { SERVICE_CATEGORIES_DATA } from "../../mockData/services/Services.consts";
import { SERVICE_EXTRAS_DATA } from "../../mockData/services/serviceExtras.consts";
import { SERVICE_PAGE_STATIC_DATA } from "./Service.consts";

function Service() {
  const params = useParams();
  const { language } = useLanguage();
  const staticData = SERVICE_PAGE_STATIC_DATA[language];
  const serviceCategory = SERVICE_CATEGORIES_DATA[language].find((category) =>
    category.services.some((service) => service.slug === params.slug),
  );
  const service = serviceCategory?.services.find(
    (item: ServiceI) => item.slug === params.slug,
  );

  if (!service?.detailPage) {
    return <PageSkeleton variant="service" />;
  }

  const related = (serviceCategory?.services ?? [])
    .filter((item: ServiceI) => item.slug !== params.slug)
    .slice(0, 3)
    .map((item: ServiceI) => ({
      title: item.title,
      slug: item.slug,
      highlights: item.highlights,
    }));
  const extras = params.slug
    ? (SERVICE_EXTRAS_DATA[language][params.slug] ?? null)
    : null;

  const data: TitleBlockI = {
    title: service.detailPage.title,
    description: service.detailPage.description,
    descriptionStyle: "justify",
  };

  return (
    <div>
      <TitleBlockGrey data={data} />
      <div className="container">
        <div className="content">
          <WhatWeDo
            title={staticData.whatWeDoTitle}
            features={service.detailPage.features}
          />
          {extras ? (
            <>
              <ServiceStages
                title={staticData.stagesTitle}
                stages={extras.stages}
              />
              <ServiceFaq title={staticData.faqTitle} items={extras.faq} />
            </>
          ) : null}
          <ServiceRelated
            title={staticData.relatedTitle}
            services={related}
          />
        </div>

        <ServiceBanner
          description={service.detailPage.banner.description}
          buttonText={service.detailPage.banner.buttonText}
          image={service.detailPage.banner.image}
          labelText={staticData.bannerLabel}
        />
      </div>
    </div>
  );
}

export default Service;
