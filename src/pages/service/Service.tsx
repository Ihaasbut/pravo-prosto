import { useParams } from "react-router-dom";

import TitleBlockGrey from "../../components/sections/titleBlockGrey/TitleBlockGrey";
import { useLanguage } from "../../hooks/use-language";
import { SERVICE_CATEGORIES_DATA } from "../../mockData/services/Services.consts";
import NotFound from "../notFound/NotFound";
import ServiceBanner from "./components/serviceBanner/ServiceBanner";
import ServiceFaq from "./components/serviceFaq/ServiceFaq";
import ServiceRelated from "./components/serviceRelated/ServiceRelated";
import ServiceStages from "./components/serviceStages/ServiceStages";
import WhatWeDo from "./components/whatWeDo/WhatWeDo";
import { SERVICE_PAGE_STATIC_DATA } from "./Service.consts";

function Service() {
  const { slug } = useParams();
  const { language } = useLanguage();
  const serviceCategory = SERVICE_CATEGORIES_DATA[language].find((category) =>
    category.services.some((service) => service.slug === slug),
  );
  const service = serviceCategory?.services.find((item) => item.slug === slug);

  if (!service?.detailPage || !serviceCategory) {
    return <NotFound />;
  }

  const { titleBlock, whatWeDo, stages, faq, banner } = service.detailPage;
  const related = {
    title: SERVICE_PAGE_STATIC_DATA[language].relatedTitle,
    services: serviceCategory.services
      .filter((item) => item.slug !== slug)
      .slice(0, 3),
  };

  return (
    <div>
      <TitleBlockGrey data={titleBlock} />

      <div className="container">
        <div className="content">
          <WhatWeDo data={whatWeDo} />
          <ServiceStages data={stages} />
          <ServiceFaq data={faq} />
          <ServiceRelated data={related} />
        </div>

        <ServiceBanner data={banner} />
      </div>
    </div>
  );
}

export default Service;
