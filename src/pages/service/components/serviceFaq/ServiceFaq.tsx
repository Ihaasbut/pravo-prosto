import Typography from "../../../../components/ui/typography/Typography";
import ServiceFaqList from "./components/serviceFaqList/ServiceFaqList";
import type { ServiceFaqPropsI } from "./ServiceFaq.types";

function ServiceFaq({ data }: ServiceFaqPropsI) {
  const { title, items } = data;

  return (
    <section className="block-margin">
      <Typography variant="h3" as="h3" className="title">
        {title}
      </Typography>
      <ServiceFaqList data={items} />
    </section>
  );
}

export default ServiceFaq;
