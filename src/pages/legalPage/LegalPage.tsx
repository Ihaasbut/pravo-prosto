import { useEffect, useState } from "react";
import TitleBlockGrey from "../../components/titleBlockPrimary/TitleBlockPrimary";
import Typography from "../../components/ui/typography/Typography";
import { useLanguage } from "../../hooks/use-language";
import styles from "./LegalPage.module.css";
import type {
  LegalPageI,
  LegalPageProps,
  LegalPagesDataI,
} from "./LegalPage.types";
import PageSkeleton from "../../components/pageSkeleton/PageSkeleton";

function LegalPage({ pageKey }: LegalPageProps) {
  const [pageData, setPageData] = useState<LegalPageI | null>(null);
  const [legalPagesData, setLegalPagesData] = useState<LegalPagesDataI | null>(
    null,
  );
  const { language } = useLanguage();

  useEffect(() => {
    (async () => {
      const legalPageModule = await import(
        `./mockData/legal-page.mockData.${language}.ts`
      );
      const data = legalPageModule.legalPagesData;

      setLegalPagesData(data);
      setPageData(data.pages[pageKey]);
    })();
  }, [language, pageKey]);

  if (!pageData || !legalPagesData) {
    return <PageSkeleton variant="legal" />;
  }

  return (
    <div className={styles.legal}>
      <TitleBlockGrey title={pageData.title} />

      <div className="container">
        <div className="content">
          <div className={styles.contentWrapper}>
            <div className={styles.intro}>
              {pageData.intro.map((paragraph) => (
                <Typography
                  key={paragraph}
                  variant="body-m"
                  as={"p"}
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
                        as={"p"}
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
