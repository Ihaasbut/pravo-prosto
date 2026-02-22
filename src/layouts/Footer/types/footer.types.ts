export type TelephoneI = {
    telephone: string;
    hrefForHtml: string;
};

export type MailI = {
    mail: string;
    hrefForHtml: string;
};

export type LegalPageI = {
    title: string;
    slug: string;
};

export type FooterLinksI = {
    tel1: TelephoneI;
    tel2?: TelephoneI;
    mail: MailI;
    userAgreement: LegalPageI;
    privacyPolicy: LegalPageI;
};

export type FooterI = {
    links: FooterLinksI;
    notice: string;
    titleCompany: string;
    address: string;
};

export type FooterEmblaProps = {
    text: string;
};
