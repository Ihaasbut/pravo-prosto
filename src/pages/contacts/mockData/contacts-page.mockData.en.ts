import type { ContactsPageI } from "../Contacts.types";

export const headerPage: ContactsPageI = {
  title: "Contacts",
  buttonText: "Consultation",
  address: {
    label: "Address",
    lines: [
      "IT Park named after B. Rameev",
      "Spartakovskaya St., 2, office 25",
      "Kazan, 420107",
    ],
    href: "https://yandex.ru/maps/?text=%D0%9F%D1%80%D0%B0%D0%B2%D0%BE%20%D0%9F%D1%80%D0%BE%D1%81%D1%82%D0%BE%20%D0%A1%D0%BF%D0%B0%D1%80%D1%82%D0%B0%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F%20%D0%9A%D0%B0%B7%D0%B0%D0%BD%D1%8C",
  },
  phones: {
    label: "Phones",
    items: [
      {
        value: "+7 917 265 11 17",
        href: "tel:+79172651117",
      },
      {
        value: "+7 800 250 01 31",
        href: "tel:+78002500131",
      },
    ],
  },
  emails: {
    label: "Email",
    items: [
      {
        value: "info@pravoprosto.com",
        href: "mailto:info@pravoprosto.com",
      },
    ],
  },
};
