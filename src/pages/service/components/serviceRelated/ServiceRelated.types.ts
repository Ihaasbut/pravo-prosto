import type { ServiceI } from "../../../../types/mockData";

export interface ServiceRelatedPropsI {
  title: string;
  services: Pick<ServiceI, "title" | "slug" | "highlights">[];
}
