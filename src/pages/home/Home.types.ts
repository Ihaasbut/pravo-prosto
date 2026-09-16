import type { RequestSectionDataI } from "../../components/sections/requestSection/RequestSection.types";
import type { HeroDataI } from "./components/hero/Hero.types";
import type { HomeAboutDataI } from "./components/homeAbout/HomeAbout.types";
import type { HomeNewsDataI } from "./components/homeNews/HomeNews.types";
import type { HomeProcessDataI } from "./components/homeProcess/HomeProcess.types";
import type { HomeServicesDataI } from "./components/homeServices/HomeServices.types";
import type { HomeTeamDataI } from "./components/homeTeam/HomeTeam.types";

export interface PageHomeFullDataI {
  hero: HeroDataI;
  about: HomeAboutDataI;
  services: HomeServicesDataI;
  process: HomeProcessDataI;
  team: HomeTeamDataI;
  news: HomeNewsDataI;
  request: RequestSectionDataI;
}
