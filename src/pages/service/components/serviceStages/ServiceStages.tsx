import Typography from "../../../../components/ui/typography/Typography";
import ServiceStagesList from "./components/serviceStagesList/ServiceStagesList";
import type { ServiceStagesPropsI } from "./ServiceStages.types";

function ServiceStages({ data }: ServiceStagesPropsI) {
  const { title, stages } = data;

  return (
    <section className="block-margin">
      <Typography variant="h3" as="h3" className="title">
        {title}
      </Typography>
      <ServiceStagesList data={stages} />
    </section>
  );
}

export default ServiceStages;
