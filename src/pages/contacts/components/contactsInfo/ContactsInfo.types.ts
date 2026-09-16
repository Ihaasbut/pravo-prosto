import type { ContactItemI, ContactsI } from "../../Contacts.types";

export type ContactBlockItemI = Pick<ContactItemI, "value"> & {
  href?: ContactItemI["href"];
};

export interface ContactBlockI {
  label: string;
  href?: string;
  items: ContactBlockItemI[];
}

export interface ContactsInfoPropsI {
  data: ContactsI;
}

export interface ContactsInfoPropsI {
  data: ContactsI;
}
