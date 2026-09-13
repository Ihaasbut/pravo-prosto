export interface TelephoneI {
    telephone: string;
    hrefForHtml: string;
}

export interface MailI {
    mail: string;
    hrefForHtml: string;
}

export interface LegalPageI {
    title: string;
    slug: string;
}

export interface FooterLinksI {
    tel1: TelephoneI;
    tel2?: TelephoneI;
    mail: MailI;
    userAgreement: LegalPageI;
    privacyPolicy: LegalPageI;
}

export interface FooterI {
    links: FooterLinksI;
    notice: string;
    titleCompany: string;
    address: string;
}
