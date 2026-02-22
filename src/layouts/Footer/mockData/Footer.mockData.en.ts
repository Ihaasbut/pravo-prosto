import type { FooterI } from "../types/footer.types";

export const footerData: FooterI = {
    notice: "Pravo Prosto LLC © 2018–2025",
    titleCompany: "PRAVO PROSTO",
    address:
        "420107, Republic of Tatarstan, Kazan, Spartakovskaya St., 2, office 25",
    links: {
        tel1: {
            telephone: "+7 917 265 11 17",
            hrefForHtml: "tel:+79172651117",
        },
        tel2: {
            telephone: "+7 800 250 01 31",
            hrefForHtml: "tel:+78002500131",
        },
        mail: {
            mail: "info@pravoprosto.com",
            hrefForHtml: "mailto:info@pravoprosto.com",
        },
        userAgreement: {
            title: "User Agreement",
            slug: "/en/user-agreement",
        },
        privacyPolicy: {
            title: "Privacy Policy",
            slug: "/en/privacy-policy",
        },
    },
};
