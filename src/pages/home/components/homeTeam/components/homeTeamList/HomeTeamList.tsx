import Typography from "../../../../../../components/ui/typography/Typography";
import type { HomeTeamListPropsI } from "./HomeTeamList.types";

import styles from "./HomeTeamList.module.css";

function HomeTeamList({ data }: HomeTeamListPropsI) {
  return (
    <ul className={styles.grid}>
      {data.map((person) => (
        <li className={styles.card} key={person.dataPerson}>
          <div className={styles.inner}>
            <div className={styles.image}>
              <img src={person.image} alt={person.dataPerson} />
            </div>

            <Typography variant="body-s" as="h3" className={styles.name}>
              {person.dataPerson}
            </Typography>

            <Typography variant="body-xs" className={styles.post}>
              {person.post}
            </Typography>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default HomeTeamList;
