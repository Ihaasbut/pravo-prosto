import type { ServiceI } from "../../../../types/mockData";

export interface ServiceRelatedDataI {
  title: string;
  services: Pick<ServiceI, "title" | "slug" | "highlights">[];
}

export interface ServiceRelatedPropsI {
  data: ServiceRelatedDataI;
}
