import type { ServicesCategoryI } from "../../types/mockData";
import type { NewI } from "../../types/news.types";
import type { TeamPersonI } from "../../types/team.types";
import type { TitleBlockI } from "../../types/titleBlock.types";
import type { RequestSectionDataI } from "../../components/sections/requestSection/RequestSection.types";
import type { HomeAboutDataI } from "./components/homeAbout/HomeAbout.types";
import type { HeroI } from "./components/hero/Hero.types";
import type { HomeProcessDataI } from "./components/homeProcess/HomeProcess.types";

export interface PageHomeFullDataI {
  hero: HeroI;
  about: HomeAboutDataI;
  servicesBlock: TitleBlockI;
  featuredCategory: ServicesCategoryI;
  process: HomeProcessDataI;
  teamBlock: TitleBlockI;
  team: TeamPersonI[];
  newsBlock: TitleBlockI;
  featuredNews: NewI[];
  request: RequestSectionDataI;
}
