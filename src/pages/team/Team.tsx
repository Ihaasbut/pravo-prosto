import RequestSection from "../../components/sections/requestSection/RequestSection";
import TitleBlockGrey from "../../components/sections/titleBlockGrey/TitleBlockGrey";
import { useLanguage } from "../../hooks/use-language";
import HomeProcess from "../home/components/homeProcess/HomeProcess";
import TeamPersons from "./components/teamPersons/TeamPersons";
import { TEAM_PAGE_DATA } from "./Team.consts";

import styles from "./Team.module.css";

function Team() {
  const { language } = useLanguage();
  const { titleBlock, team, process, request } = TEAM_PAGE_DATA[language];

  return (
    <div className={styles.team}>
      <TitleBlockGrey data={titleBlock} />
      <TeamPersons data={team} />
      <HomeProcess data={process} />
      <RequestSection data={request} />
    </div>
  );
}

export default Team;
