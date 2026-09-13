export type LegalPageKey = "privacyPolicy" | "userAgreement";

export interface LegalPageSectionI {
    title: string;
    paragraphs: string[];
}

export interface LegalPageI {
    title: string;
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
