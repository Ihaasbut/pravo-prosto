import Typography from "../../../../components/ui/typography/Typography";
import styles from "./TeamPerson.module.css";
import type { TeamPersonPropsI } from "./TeamPerson.types";

function TeamPerson({ props }: TeamPersonPropsI) {
  const { image, dataPerson, post, study, area, experience, comment } = props;

  return (
    <article className={styles.person}>
      <div className={styles.image}>
        <img src={image} alt={dataPerson} />
      </div>

      <div className={styles.info}>
        <Typography variant="body-m" as="h3" className={styles.name}>
          {dataPerson}
        </Typography>
        <Typography variant="body-s" className={styles.post}>
          {post}
        </Typography>
        <Typography variant="body-xs">
          <b>{study.title}</b> {study.description}
        </Typography>
        <Typography variant="body-xs">
          <b>{experience.title}</b> {experience.description}
        </Typography>
        <Typography variant="body-xs">
          <b>{area.title}</b> {area.description}
        </Typography>
        {comment ? (
          <Typography variant="body-xs" className={styles.comment}>
            {comment}
          </Typography>
        ) : null}
      </div>
    </article>
  );
}

export default TeamPerson;
