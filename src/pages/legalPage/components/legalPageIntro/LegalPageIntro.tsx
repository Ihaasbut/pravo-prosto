import Typography from "../../../../components/ui/typography/Typography";
import type { LegalPageIntroPropsI } from "./LegalPageIntro.types";

import styles from "./LegalPageIntro.module.css";

function LegalPageIntro({ data }: LegalPageIntroPropsI) {
  return (
    <section className={styles.intro}>
      {data.map((paragraph) => (
        <Typography
          key={paragraph}
          variant="body-m"
          className={styles.paragraph}
        >
          {paragraph}
        </Typography>
      ))}
    </section>
  );
}

export default LegalPageIntro;
