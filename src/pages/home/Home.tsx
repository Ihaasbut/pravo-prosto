import { useLanguage } from "../../hooks/use-language";
import Hero from "./components/hero/Hero";
import { useEffect, useState } from "react";
import type { PageHomeFullDataI } from "./Home.types";
import PageSkeleton from "../../components/pageSkeleton/PageSkeleton";
import HomeAbout from "./components/homeAbout/HomeAbout";
import HomeNews from "./components/homeNews/HomeNews";
import HomeProcess from "./components/homeProcess/HomeProcess";
import RequestSection from "../../components/sections/requestSection/RequestSection";
import HomeServices from "./components/homeServices/HomeServices";
import HomeTeam from "./components/homeTeam/HomeTeam";

function Home() {
  const [pageData, setPageData] = useState<PageHomeFullDataI | null>(null);
  const { language } = useLanguage();

  useEffect(() => {
    (async () => {
      const pageModule = await import(
        `./mockData/Home.mockData.${language}.ts`
      );
      const servicesModule = await import(
        `../../mockData/services/Services.mockData.${language}.ts`
      );
      const newsModule = await import(
        `../../mockData/news/News.mockData.${language}.ts`
      );
      const teamModule = await import(
        `../../mockData/team/Team.mockData.${language}.ts`
      );

      const featuredCategory = servicesModule.serviceCategories[0];

      if (!featuredCategory) {
        return;
      }

      setPageData({
        hero: pageModule.hero,
        about: pageModule.about,
        servicesBlock: pageModule.servicesBlock,
        featuredCategory,
        process: pageModule.process,
        teamBlock: pageModule.teamBlock,
        team: teamModule.team,
        newsBlock: pageModule.newsBlock,
        featuredNews: newsModule.news.slice(0, 4),
        request: pageModule.request,
      });
    })();
  }, [language]);

  if (!pageData) {
    return <PageSkeleton variant="home" />;
  }

  return (
    <>
      <Hero hero={pageData.hero} />
      <HomeAbout about={pageData.about} />
      <HomeServices
        servicesBlock={pageData.servicesBlock}
        category={pageData.featuredCategory}
      />
      <HomeProcess process={pageData.process} />
      <HomeTeam teamBlock={pageData.teamBlock} team={pageData.team} />
      <HomeNews newsBlock={pageData.newsBlock} news={pageData.featuredNews} />
      <RequestSection request={pageData.request} />
    </>
  );
}

export default Home;
