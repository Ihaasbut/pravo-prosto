export type LegalPageKey = "privacyPolicy" | "userAgreement";

export type LegalPageSectionI = {
    title: string;
    paragraphs: string[];
};

export type LegalPageI = {
    title: string;
    intro: string[];
    sections: LegalPageSectionI[];
};

export type LegalPagesDataI = {
    loadErrorText: string;
    pages: Record<LegalPageKey, LegalPageI>;
};
