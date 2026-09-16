import RequestSection from "../../components/sections/requestSection/RequestSection";
import { useLanguage } from "../../hooks/use-language";
import Hero from "./components/hero/Hero";
import HomeAbout from "./components/homeAbout/HomeAbout";
import HomeNews from "./components/homeNews/HomeNews";
import HomeProcess from "./components/homeProcess/HomeProcess";
import HomeServices from "./components/homeServices/HomeServices";
import HomeTeam from "./components/homeTeam/HomeTeam";
import { HOME_DATA } from "./Home.consts";

function Home() {
  const { language } = useLanguage();
  const { hero, about, services, process, team, news, request } =
    HOME_DATA[language];

  return (
    <>
      <Hero data={hero} />
      <HomeAbout data={about} />
      <HomeServices data={services} />
      <HomeProcess data={process} />
      <HomeTeam data={team} />
      <HomeNews data={news} />
      <RequestSection data={request} />
    </>
  );
}

export default Home;
