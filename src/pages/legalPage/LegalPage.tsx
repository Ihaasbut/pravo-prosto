import TitleBlockGrey from "../../components/sections/titleBlockGrey/TitleBlockGrey";
import Typography from "../../components/ui/typography/Typography";
import { useLanguage } from "../../hooks/use-language";
import { LEGAL_PAGES_DATA } from "./LegalPage.consts";
import styles from "./LegalPage.module.css";
import type { LegalPageProps } from "./LegalPage.types";

function LegalPage({ pageKey }: LegalPageProps) {
  const { language } = useLanguage();
  const pageData = LEGAL_PAGES_DATA[language].pages[pageKey];

  return (
    <div className={styles.legal}>
      <TitleBlockGrey data={pageData} />

      <div className="container">
        <div className="content">
          <div className={styles.contentWrapper}>
            <div className={styles.intro}>
              {pageData.intro.map((paragraph) => (
                <Typography
                  key={paragraph}
                  variant="body-m"
                  className={styles.paragraph}
                >
                  {paragraph}
                </Typography>
              ))}
            </div>

            <div className={styles.sections}>
              {pageData.sections.map((section) => (
                <section key={section.title} className={styles.section}>
                  <Typography
                    variant="h4"
                    as={"h2"}
                    className={styles.sectionTitle}
                  >
                    {section.title}
                  </Typography>

                  <div className={styles.sectionContent}>
                    {section.paragraphs.map((paragraph) => (
                      <Typography
                        key={paragraph}
                        variant="body-s"
                        className={styles.paragraph}
                      >
                        {paragraph}
                      </Typography>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LegalPage;
