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

export interface ContactsPageI {
  title: string;
  buttonText: string;
  address: ContactAddressI;
  phones: ContactGroupI;
  emails: ContactGroupI;
}
