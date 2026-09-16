import { useNavigate } from "react-router-dom";

import TitleBlockTransparent from "../../../../components/sections/titleBlockTransparent/TitleBlockTransparent";
import { useLanguage } from "../../../../hooks/use-language";
import HomeTeamList from "./components/homeTeamList/HomeTeamList";
import type { HomeTeamPropsI } from "./HomeTeam.types";

import styles from "./HomeTeam.module.css";

function HomeTeam({ data }: HomeTeamPropsI) {
  const { titleBlock, team } = data;
  const navigate = useNavigate();
  const { language } = useLanguage();
  const goToTeam = () => navigate(`/${language}/team`);

  return (
    <section className={styles.section}>
      <TitleBlockTransparent data={titleBlock} onButtonClick={goToTeam} />

      <div className="container">
        <div className="content">
          <HomeTeamList data={team} />
        </div>
      </div>
    </section>
  );
}

export default HomeTeam;
