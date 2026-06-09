import { useEffect, useState } from "react";
import TitleBlockGrey from "../../components/TitleBlockPrimary/TitleBlockPrimary";
import Typography from "../../components/Typography/Typography";
import { useLanguage } from "../../hooks/use-language";
import styles from "./LegalPage.module.css";
import type {
    LegalPageI,
    LegalPageKey,
    LegalPagesDataI,
} from "./types/legal-page.types";
import PagePreloader from "../../components/PagePreloader/PagePreloader";

type LegalPageProps = {
    pageKey: LegalPageKey;
};

function LegalPage({ pageKey }: LegalPageProps) {
    const [pageData, setPageData] = useState<LegalPageI | null>(null);
    const [legalPagesData, setLegalPagesData] =
        useState<LegalPagesDataI | null>(null);
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
        return (
            <PagePreloader
                label={legalPagesData?.loadErrorText ?? "Loading legal page"}
            />
        );
    }

    return (
        <div className={styles["legal-page"]}>
            <TitleBlockGrey title={pageData.title} />

            <div className="container">
                <div className="content">
                    <div className={styles["content-wrapper"]}>
                        <div className={styles["intro"]}>
                            {pageData.intro.map((paragraph) => (
                                <Typography
                                    key={paragraph}
                                    variant="body-m"
                                    as={"p"}
                                    className={styles["paragraph"]}
                                >
                                    {paragraph}
                                </Typography>
                            ))}
                        </div>

                        <div className={styles["sections"]}>
                            {pageData.sections.map((section) => (
                                <section
                                    key={section.title}
                                    className={styles["section"]}
                                >
                                    <Typography
                                        variant="h4"
                                        as={"h2"}
                                        className={styles["section-title"]}
                                    >
                                        {section.title}
                                    </Typography>

                                    <div className={styles["section-content"]}>
                                        {section.paragraphs.map((paragraph) => (
                                            <Typography
                                                key={paragraph}
                                                variant="body-s"
                                                as={"p"}
                                                className={styles["paragraph"]}
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
