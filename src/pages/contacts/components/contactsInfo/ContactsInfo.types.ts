import type { ContactAddressI, ContactGroupI } from "../../Contacts.types";

export interface ContactsInfoPropsI {
  address: ContactAddressI;
  phones: ContactGroupI;
  emails: ContactGroupI;
}
