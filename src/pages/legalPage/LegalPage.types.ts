import type { TitleBlockI } from "../../types/titleBlock.types";

export type LegalPageKey = "privacyPolicy" | "userAgreement";

export interface LegalPageSectionI {
  title: string;
  paragraphs: string[];
}

export interface LegalPageI {
  titleBlock: TitleBlockI;
  intro: string[];
  sections: LegalPageSectionI[];
}

export interface LegalPagesDataI {
  loadErrorText: string;
  pages: Record<LegalPageKey, LegalPageI>;
}

export interface LegalPageProps {
  pageKey: LegalPageKey;
}
