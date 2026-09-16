import Typography from "../../../../components/ui/typography/Typography";
import ServiceRelatedList from "./components/serviceRelatedList/ServiceRelatedList";
import type { ServiceRelatedPropsI } from "./ServiceRelated.types";

function ServiceRelated({ data }: ServiceRelatedPropsI) {
  const { title, services } = data;

  if (services.length === 0) {
    return null;
  }

  return (
    <section className="block-margin">
      <Typography variant="h3" as="h3" className="title">
        {title}
      </Typography>
      <ServiceRelatedList data={services} />
    </section>
  );
}

export default ServiceRelated;
