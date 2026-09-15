export interface TelephoneI {
  telephone: string;
  hrefForHtml: string;
}

export interface MailI {
  mail: string;
  hrefForHtml: string;
}

export interface FooterContactsI {
  mail: MailI[];
  phones: TelephoneI[];
}

export interface FooterContactsPropsI {
  contacts: FooterContactsI;
}
