export interface LegalPageI {
  title: string;
  slug: string;
}

export type FooterLinksI = LegalPageI[];

export interface FooterCopyrightPropsI {
  address: string;
  notice: string;
  links: FooterLinksI;
}
