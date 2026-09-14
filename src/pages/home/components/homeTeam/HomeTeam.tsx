import { useNavigate } from "react-router-dom";
import TitleBlockHome from "../../../../components/titleBlockHome/TitleBlockHome";
import Typography from "../../../../components/ui/typography/Typography";
import { useLanguage } from "../../../../hooks/use-language";
import type { HomeTeamPropsI } from "./HomeTeam.types";
import styles from "./HomeTeam.module.css";

function HomeTeam({ teamBlock, team }: HomeTeamPropsI) {
  const navigate = useNavigate();
  const { language } = useLanguage();

  return (
    <section className={styles.section}>
      <TitleBlockHome
        title={teamBlock.title}
        description={teamBlock.description}
        buttonText={teamBlock.buttonText}
        onButtonClick={() => navigate(`/${language}/team`)}
      />

      <div className="container">
        <div className="content">
          <ul className={styles.grid}>
            {team.map((person) => (
              <li className={styles.card} key={person.dataPerson}>
                <div className={styles.inner}>
                  <div className={styles.image}>
                    <img src={person.image} alt={person.dataPerson} />
                  </div>
                  <Typography variant="body-s" as="h3" className={styles.name}>
                    {person.dataPerson}
                  </Typography>
                  <Typography variant="body-xs" as="p" className={styles.post}>
                    {person.post}
                  </Typography>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default HomeTeam;
