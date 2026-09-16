import type { TitleBlockI } from "../../types/titleBlock.types";

export interface ContactItemI {
  value: string;
  href: string;
}

export interface ContactGroupI {
  label: string;
  items: ContactItemI[];
}

export interface ContactAddressI {
  label: string;
  lines: string[];
  href: string;
}

export interface ContactsI {
  address: ContactAddressI;
  phones: ContactGroupI;
  emails: ContactGroupI;
}

export interface PageContactsI {
  titleBlock: TitleBlockI;
  contacts: ContactsI;
}
