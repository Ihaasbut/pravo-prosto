import Typography from "../../../../components/ui/typography/Typography";
import LegalPageSectionContent from "./components/legalPageSectionContent/LegalPageSectionContent";
import type { LegalPageSectionsPropsI } from "./LegalPageSections.types";

import styles from "./LegalPageSections.module.css";

function LegalPageSections({ data }: LegalPageSectionsPropsI) {
  return (
    <section className={styles.sections}>
      {data.map((section) => {
        const { title, paragraphs } = section;

        return (
          <div key={title} className={styles.section}>
            <Typography variant="h4" as={"h2"} className={styles.sectionTitle}>
              {title}
            </Typography>
            <LegalPageSectionContent data={paragraphs} />
          </div>
        );
      })}
    </section>
  );
}

export default LegalPageSections;
