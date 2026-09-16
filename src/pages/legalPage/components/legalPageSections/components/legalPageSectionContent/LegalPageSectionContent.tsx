import Typography from "../../../../../../components/ui/typography/Typography";
import type { LegalPageSectionContentPropsI } from "./LegalPageSectionContent.types";

import styles from "./LegalPageSectionContent.module.css";

function LegalPageSectionContent({ data }: LegalPageSectionContentPropsI) {
  return (
    <div className={styles.sectionContent}>
      {data.map((paragraph) => (
        <Typography
          key={paragraph}
          variant="body-s"
          className={styles.paragraph}
        >
          {paragraph}
        </Typography>
      ))}
    </div>
  );
}

export default LegalPageSectionContent;
