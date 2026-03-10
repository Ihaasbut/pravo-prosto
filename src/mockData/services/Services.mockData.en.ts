import type { ServicesCategoryI } from "../../types/mockData";

export const serviceCategories: ServicesCategoryI[] = [
    {
        area: "Core Legal Services",
        services: [
            {
                title: "Contracts & Legal Documentation",
                highlights: [
                    "Drafting from scratch, review, and customization",
                    "We explain what you're signing",
                    "Tailored for IT realities: SaaS, API, subscription models",
                ],
                slug: "contracts-and-documents",
                detailPage: {
                    title: "Contracts & Legal Documentation",
                    description:
                        "Safe and clear contracts are the foundation of any business. We adapt legal language to the real needs of developers, startups, studios, and product teams. We account for IT specifics: Agile, licenses, IP, SaaS, open source, and metrics. We negotiate on your behalf — on paper and in substance.",
                    features: [
                        {
                            title: "Custom contract drafting from scratch",
                            description:
                                "We create legal documents for services, contracting, supply, agency, distribution, SLA, and other business models",
                        },
                        {
                            title: "Review and adaptation of existing contracts",
                            description:
                                "We identify risks, fix unfavorable terms, and bring documents to a legally sound state",
                        },
                        {
                            title: "Template customization for your business",
                            description:
                                "We enrich templates with metrics, work phases, deadlines, penalties, and performance indicators",
                        },
                        {
                            title: "Contracts with teams and contractors",
                            description:
                                "We formalize relationships with developers, designers, and freelancers — covering liability, deadlines, deliverables, KPIs, and IP ownership",
                        },
                        {
                            title: "Transfer of rights to work results",
                            description:
                                "We prepare acts, agreements, licenses, and assignment contracts for code, design, content, and other IP objects",
                        },
                        {
                            title: "B2B and B2G client contracts",
                            description:
                                "We lock in phases, deadlines, liability, payments, bug fixes, and warranty obligations — aligned with your business model",
                        },
                        {
                            title: "Support in contract negotiations",
                            description:
                                "We help secure favorable terms, adapt wording, lead negotiations, or advise throughout the process",
                        },
                        {
                            title: "Legal review of contracts before deals or investments",
                            description:
                                "We conduct a legal audit of documentation for due diligence or partnerships",
                        },
                    ],
                    banner: {
                        image: "/service-banner.webp",
                        description: "We don't just write 'from a template' — we dive into the substance of your business and create documents that protect you in real life, not just in theory.",
                        buttonText: "Submit a request",
                    },
                },
            },
            {
                title: "Deals, Investments & Corporate Support",
                highlights: [
                    "Investment readiness, M&A preparation",
                    "Legal audit and risk clearance",
                    "Restructuring, options, cap table",
                ],
                slug: "deals-investments-corporate",
                detailPage: {
                    title: "Deals, Investments & Corporate Support",
                    description:
                        "We support IT companies at every stage: from project launch to business exit. We help attract investments, formalize partnerships, protect interests in deals, and build structures that won't trip you up at due diligence.",
                    features: [
                        {
                            title: "Investment round preparation",
                            description:
                                "We structure founder relationships, formalize investor agreements, draft cap tables, option schemes, SAFE/convertibles, and protective clauses",
                        },
                        {
                            title: "M&A and business exit support",
                            description:
                                "We help buy or sell a company, draft SPA/APA, negotiate terms, and protect your position at the table",
                        },
                        {
                            title: "Restructuring, spin-offs, and mergers",
                            description:
                                "We help buy or sell a company, draft SPA/APA, negotiate terms, and protect your position at the table",
                        },
                        {
                            title: "Legal due diligence",
                            description:
                                "We audit the company, product, IP, team, and contract base before deals, investments, or public procurement",
                        },
                        {
                            title: "Corporate structure formation",
                            description:
                                "We build the right company structure, distribute roles and control, and prepare founding documents and internal regulations",
                        },
                        {
                            title: "Governance body support",
                            description:
                                "We prepare resolutions, minutes, approvals, changes in participant composition, and documents for government bodies and banks",
                        },
                        {
                            title: "Disputes between shareholders / co-founders",
                            description:
                                "We assess risks, resolve corporate disputes, and propose legally safe exit scenarios",
                        },
                        {
                            title: "Legal support for international structures",
                            description:
                                "We coordinate legal processes with international partners and configure relationships between Russian and foreign legal entities",
                        },
                    ],
                    banner: {
                        image: "/service-banner.webp",
                        description: "We work with products, startups, service companies, and businesses with international structures. Straightforward — but legally precise.",
                        buttonText: "Submit a request",
                    },
                },
            },
            {
                title: "Litigation & Claims",
                highlights: [
                    "Representation in arbitration",
                    "Pre-trial dispute resolution",
                    "Protection of interests under contracts and IP",
                ],
                slug: "litigation-and-claims",
                detailPage: {
                    title: "Litigation & Claims",
                    description:
                        "Not all conflicts can be resolved through negotiation — but we'll try first. And if that doesn't work, we'll build a defense strategy, gather evidence, and represent your interests in court. We specialize in IT disputes, intellectual property, contract enforcement, and corporate conflicts.",
                    features: [
                        {
                            title: "Pre-trial analysis and claims management",
                            description:
                                "We assess the situation, formulate a position, prepare and send claims or responses, and propose settlement scenarios",
                        },
                        {
                            title: "Defense or claim strategy development",
                            description:
                                "We build the case position, gather arguments and documents, and plan the process with your business risks and goals in mind",
                        },
                        {
                            title: "Representation in arbitration and general jurisdiction courts",
                            description:
                                "We attend hearings, handle correspondence with the court and opposing party, and file all necessary documents",
                        },
                        {
                            title: "Support in arbitration tribunals and IT arbitrations",
                            description:
                                "We explore alternative dispute resolution methods, including international or specialized jurisdictions",
                        },
                        {
                            title: "Contract disputes (SLA, licenses, contracting)",
                            description:
                                "We protect your interests in cases of missed deadlines, non-payment, unauthorized IP use, project phase failures, and other claims",
                        },
                        {
                            title: "Corporate conflicts",
                            description:
                                "We assist with business exits, challenging resolutions, share blocking, and documenting participant misconduct",
                        },
                        {
                            title: "Intellectual property claims",
                            description:
                                "We protect rights to code, visuals, interfaces, games, and content. We stop copying and unauthorized use",
                        },
                        {
                            title: "Enforcement of court decisions",
                            description:
                                "We pursue real enforcement: working with bailiffs, freezing assets, recovering assets, and monitoring timelines and actions",
                        },
                    ],
                    banner: {
                        image: "rgmng",
                        description: "We assess chances realistically, don't drag out the process, and speak straight. We stand behind results.",
                        buttonText: "Submit a request",
                    },
                },
            },
            {
                title: "Intellectual Property & Copyright",
                highlights: [
                    "Protection of code, visuals, music, and brand",
                    "Registration of IP objects",
                    "Licensing and assignment of rights",
                ],
                slug: "intellectual-property",
                detailPage: {
                    title: "Intellectual Property & Copyright",
                    description:
                        "Code, design, content, and brand are assets — not just files. We help you register, protect, and monetize them. Working with IT products, games, SaaS, and content, we know exactly where ideas end and rights begin.",
                    features: [
                        {
                            title: "Formalizing rights to code, design, interfaces, and content",
                            description:
                                "We determine who owns the rights, formalize their transfer, register when necessary, and prepare supporting documentation",
                        },
                        {
                            title: "Drafting license agreements and assignment contracts",
                            description:
                                "We configure legal usage models: exclusive or non-exclusive license, royalty, sublicensing, and restrictions",
                        },
                        {
                            title: "Registration of intellectual property objects",
                            description:
                                "We support registration of software, trademarks, databases, patents, and works with Rospatent and other registries",
                        },
                        {
                            title: "Evaluating and securing rights to team and contractor work results",
                            description:
                                "We verify who created what, on what basis, and who owns the IP. We close gaps in rights and risks before sales or investments",
                        },
                        {
                            title: "Legal protection against copying and unauthorized use",
                            description:
                                "We prepare claims and lawsuits, conduct correspondence, block infringers, and pursue compensation",
                        },
                        {
                            title: "Formalizing rights in joint development or outsourcing",
                            description:
                                "We specify who creates what, who owns the results, and who can use them and how",
                        },
                        {
                            title: "Consulting on open source and mixed licenses",
                            description:
                                "We check license compatibility, explain restrictions, and warn about risks of GPL, MIT, Apache, and other models",
                        },
                        {
                            title: "Support in IP disputes",
                            description:
                                "We represent interests in arbitrations and courts, gather evidence, and formulate the legal position",
                        },
                    ],
                    banner: {
                        image: "rgmng",
                        description: "We act proactively: so your product isn't copied, your rights aren't challenged, and your contracts actually hold up in court.",
                        buttonText: "Submit a request",
                    },
                },
            },
            {
                title: "IT Tax Benefits & Accreditation",
                highlights: [
                    "Helping obtain and maintain Ministry of Digital Development accreditation",
                    "Documents and support for tax benefits",
                    "Substantiating digital company status",
                ],
                slug: "it-benefits-and-accreditation",
                detailPage: {
                    title: "IT Tax Benefits & Accreditation",
                    description:
                        "To benefit from tax and HR incentives for IT companies, it's essential to properly obtain accreditation and maintain compliance. We handle it all — from submitting the application to supporting audits and reporting.",
                    features: [
                        {
                            title: "Filing for Ministry of Digital Development accreditation",
                            description:
                                "We prepare the document package, formulate the business activity description, and manage submission and agency interaction",
                        },
                        {
                            title: "Compliance analysis with IT company criteria",
                            description:
                                "We verify whether your company qualifies for benefits: by activity type, revenue, headcount, and income structure",
                        },
                        {
                            title: "Mitigating risks of losing accreditation",
                            description:
                                "We configure processes and documentation to withstand potential audits and document the basis for 'digital' activity classification",
                        },
                        {
                            title: "Support during FTS and Ministry of Digital Development audits",
                            description:
                                "We advise, prepare responses and justifications, and protect your interests in disputed situations",
                        },
                        {
                            title: "Legal support on tax benefit matters",
                            description:
                                "We assess and document eligibility for reduced rates on social contributions, profit tax, and other incentives",
                        },
                        {
                            title: "IT reporting preparation and maintenance",
                            description:
                                "We specify who creates what, who owns the results, and who can use them and how",
                        },
                        {
                            title: "Support in disputes over IT company status",
                            description:
                                "We participate in arbitration defense, prepare documents, and handle both legal and accounting aspects",
                        },
                        {
                            title: "Consulting on OKVED changes, activity types, and group structure",
                            description:
                                "We adapt the business to incentive requirements without risking legal or tax security",
                        },
                    ],
                    banner: {
                        image: "rgmng",
                        description: "We understand how the Ministry of Digital Development and FTS operate in practice, and we know how to protect your status — even if your project is non-standard.",
                        buttonText: "Submit a request",
                    },
                },
            },
        ],
    },
        {
        area: "Expert Areas",
        services: [
            {
                title: "Legal R&D and Audit",
                highlights: [
                    "Analysis of non-standard situations",
                    "Preparation of legal hypotheses",
                    "Risk assessment of complex solutions",
                ],
                slug: "/",
            },
            {
                title: "Legal Consulting for AI/ML",
                highlights: [
                    "Compliance check for AI services",
                    "Risks of content generation, personal data",
                    "Support for AI integration into products",
                ],
                slug: "/",
            },
            {
                title: "Biometrics and Digital Identification Systems",
                highlights: [
                    "Consulting on biometrics: storage, transfer, consents",
                    "Help comply with 152-FZ requirements",
                    "Support for ESIA, SBP, digital passports, and FinTech projects",
                    "Preparation of internal regulations, Roskomnadzor notifications, legal opinions",
                ],
                slug: "/",
            },
            {
                title: "Due Diligence and Counterparty Verification",
                highlights: [
                    "Comprehensive legal analysis of IT products before investment",
                ],
                slug: "/",
            },
        ],
    },
    {
        area: "Accounting for IT",
        services: [
            {
                title: "IP and Intangible Assets Accounting",
                highlights: [
                    "Help capitalize code, brand, games",
                    "Preparation for audits and investments",
                ],
                slug: "/",
            },
            {
                title: "IT Benefits and Tax Base Control",
                highlights: [
                    "Help maintain accredited company status",
                    "Check conditions, documents, and reporting",
                ],
                slug: "/",
            },
            {
                title: "Management Accounting (Cash Flow, P&L)",
                highlights: [
                    "Financial model setup for business",
                    "Transparency and efficiency control",
                ],
                slug: "/",
            },
        ],
    },
];
