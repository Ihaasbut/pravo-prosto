import Typography from "../../../../components/ui/typography/Typography";
import type { TeamPersonPropsI } from "./TeamPerson.types";

import styles from "./TeamPerson.module.css";

function TeamPerson({ data }: TeamPersonPropsI) {
  const { image, dataPerson, post, details, comment } = data;

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

        {details.map((item) => (
          <Typography key={item.title} variant="body-xs">
            <b>{item.title}</b> {item.description}
          </Typography>
        ))}

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
