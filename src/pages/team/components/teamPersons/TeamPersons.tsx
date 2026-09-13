import styles from "./TeamPersons.module.css";
import type { TeamPersonI, TeamPersonsI } from "../../../../types/team.types";
import TeamPerson from "../teamPerson/TeamPerson";

function TeamPersons({ teamData }: TeamPersonsI) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="content">
          <div className={styles.persons}>
            {teamData.map((person: TeamPersonI) => (
              <TeamPerson key={person.dataPerson} props={person} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamPersons;
