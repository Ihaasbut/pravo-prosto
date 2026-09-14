import type { ServicesCategoryI } from "../../types/mockData";
import type { NewI } from "../../types/news.types";
import type { TeamPersonI } from "../../types/team.types";
import type { TitleBlockPropsI } from "../../types/titleBlock.types";
import type { RequestSectionDataI } from "../../components/sections/requestSection/RequestSection.types";
import type { HomeAboutDataI } from "./components/homeAbout/HomeAbout.types";
import type { HeroI } from "./components/hero/Hero.types";
import type { HomeProcessDataI } from "./components/homeProcess/HomeProcess.types";

export interface PageHomeFullDataI {
  hero: HeroI;
  about: HomeAboutDataI;
  servicesBlock: TitleBlockPropsI;
  featuredCategory: ServicesCategoryI;
  process: HomeProcessDataI;
  teamBlock: TitleBlockPropsI;
  team: TeamPersonI[];
  newsBlock: TitleBlockPropsI;
  featuredNews: NewI[];
  request: RequestSectionDataI;
}
