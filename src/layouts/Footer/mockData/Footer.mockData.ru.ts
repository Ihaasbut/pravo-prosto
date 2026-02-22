import type { FooterI } from "../types/footer.types";

export const footerData: FooterI = {
    notice: "ООО Право Просто © 2018-2025",
    titleCompany: "ПРАВО ПРОСТО",
    address:
        "420107, Республика Татарстан, г Казань, Спартаковская ул, д. 2, помещ. 25",
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
            title: "Пользовательское соглашение",
            slug: "/polzovatelskoe-soglashenie",
        },
        privacyPolicy: {
            title: "Политика конфиденциальности",
            slug: "/privacy-policy",
        },
    },
};
