import { useLanguage } from "../../hooks/use-language";
import Hero from "./components/hero/Hero";
import HomeAbout from "./components/homeAbout/HomeAbout";
import HomeNews from "./components/homeNews/HomeNews";
import HomeProcess from "./components/homeProcess/HomeProcess";
import RequestSection from "../../components/sections/requestSection/RequestSection";
import HomeServices from "./components/homeServices/HomeServices";
import HomeTeam from "./components/homeTeam/HomeTeam";
import { HOME_DATA } from "./Home.consts";

function Home() {
  const { language } = useLanguage();
  const pageData = HOME_DATA[language];

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
