import ServiceCategory from "../../../../components/sections/serviceCategory/ServiceCategory";
import type { ServicesCategoriesPropsI } from "./ServicesCategories.types";

function ServicesCategories({ data }: ServicesCategoriesPropsI) {
  return (
    <section>
      {data.map((category) => (
        <ServiceCategory key={category.area} data={category} />
      ))}
    </section>
  );
}

export default ServicesCategories;
