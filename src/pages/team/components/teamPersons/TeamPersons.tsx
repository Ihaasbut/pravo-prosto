import type { TeamPersonsI } from "../../../../types/team.types";
import TeamPerson from "../teamPerson/TeamPerson";

import styles from "./TeamPersons.module.css";

function TeamPersons({ data }: TeamPersonsI) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="content">
          <div className={styles.persons}>
            {data.map((person) => (
              <TeamPerson key={person.dataPerson} data={person} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamPersons;
