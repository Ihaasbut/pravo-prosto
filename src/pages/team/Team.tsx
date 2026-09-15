import TitleBlockGrey from "../../components/sections/titleBlockGrey/TitleBlockGrey";
import styles from "./Team.module.css";
import TeamPersons from "./components/teamPersons/TeamPersons";
import { useLanguage } from "../../hooks/use-language";
import HomeProcess from "../home/components/homeProcess/HomeProcess";
import RequestSection from "../../components/sections/requestSection/RequestSection";
import { TEAM_PAGE_DATA } from "./Team.consts";

function Team() {
  const { language } = useLanguage();
  const pageData = TEAM_PAGE_DATA[language];

  return (
    <div className={styles.team}>
      <TitleBlockGrey data={pageData.page} />

      <TeamPersons teamData={pageData.team} />
      <HomeProcess process={pageData.page.process} />
      <RequestSection request={pageData.page.request} />
    </div>
  );
}

export default Team;
