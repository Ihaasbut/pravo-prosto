import type { FooterContactsI } from "./components/footerContacts/FooterContacts.types";
import type { FooterLinksI } from "./components/footerCopyright/FooterCopyright.types";

export interface FooterI {
  contacts: FooterContactsI;
  links: FooterLinksI;
  notice: string;
  titleCompany: string;
  address: string;
}
