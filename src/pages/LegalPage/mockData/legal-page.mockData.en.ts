import type { LegalPagesDataI } from "../types/legal-page.types";

export const legalPagesData: LegalPagesDataI = {
    loadErrorText: "The page failed to load",
    pages: {
        privacyPolicy: {
            title: "Privacy Policy",
            intro: [
                "This Privacy Policy describes the general procedure for processing and protecting information provided by users when using the Pravo Prosto website.",
                "By using the website, the user confirms that they have read this Privacy Policy and agree with its basic terms.",
            ],
            sections: [
                {
                    title: "What data may be processed",
                    paragraphs: [
                        "As part of the website operation, the company may process a user's name, phone number, email address, and other information voluntarily submitted through feedback forms.",
                        "The website may also technically collect anonymized information about page visits, user actions, and device parameters to ensure proper service performance.",
                    ],
                },
                {
                    title: "Purposes of data processing",
                    paragraphs: [
                        "The information is used to contact users, process requests, provide consultations, and improve the quality of the website.",
                        "The company does not use personal data for purposes unrelated to website operation or service delivery.",
                    ],
                },
                {
                    title: "Information storage and protection",
                    paragraphs: [
                        "The company takes reasonable organizational and technical measures to protect data from loss, unauthorized access, alteration, or distribution.",
                        "The storage period depends on the purposes of processing, legal requirements, and the need to maintain communication with the user.",
                    ],
                },
                {
                    title: "Feedback",
                    paragraphs: [
                        "For questions related to personal data processing or website use, the user may contact the company using the details published on the website.",
                    ],
                },
            ],
        },
        userAgreement: {
            title: "User Agreement",
            intro: [
                "This User Agreement defines the general rules for using the Pravo Prosto website.",
                "By continuing to use the website, the user confirms acceptance of the terms of this agreement.",
            ],
            sections: [
                {
                    title: "General provisions",
                    paragraphs: [
                        "The website is informational in nature and is intended to present the company's services, news, contact details, and other materials.",
                        "The company may update the website content and the provisions of this agreement without prior notice to the user.",
                    ],
                },
                {
                    title: "Website usage rules",
                    paragraphs: [
                        "The user agrees to use the website in good faith, not to interfere with its operation, and not to submit false information through website forms.",
                        "It is prohibited to use website materials in a way that violates the law or infringes the rights of the company or third parties.",
                    ],
                },
                {
                    title: "Limitation of liability",
                    paragraphs: [
                        "The company makes reasonable efforts to keep the published information up to date, but does not guarantee absolute completeness or the absence of technical errors on every page.",
                        "The company is not liable for possible losses resulting from the use of, or inability to use, the website.",
                    ],
                },
                {
                    title: "Contacts",
                    paragraphs: [
                        "Any requests related to the use of the website or this agreement may be sent using the contact information published on the website.",
                    ],
                },
            ],
        },
    },
};
