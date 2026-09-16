import TitleBlockGrey from "../../components/sections/titleBlockGrey/TitleBlockGrey";
import { useLanguage } from "../../hooks/use-language";
import LegalPageIntro from "./components/legalPageIntro/LegalPageIntro";
import LegalPageSections from "./components/legalPageSections/LegalPageSections";
import { LEGAL_PAGES_DATA } from "./LegalPage.consts";
import type { LegalPageProps } from "./LegalPage.types";

import styles from "./LegalPage.module.css";

function LegalPage({ pageKey }: LegalPageProps) {
  const { language } = useLanguage();
  const { titleBlock, intro, sections } =
    LEGAL_PAGES_DATA[language].pages[pageKey];

  return (
    <div className={styles.legal}>
      <TitleBlockGrey data={titleBlock} />

      <div className="container">
        <div className="content">
          <div className={styles.contentWrapper}>
            <LegalPageIntro data={intro} />
            <LegalPageSections data={sections} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LegalPage;
