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
          titleBlock: {
            title: "Contracts & Legal Documentation",
            description:
            "Safe and clear contracts are the foundation of any business. We adapt legal language to the real needs of developers, startups, studios, and product teams. We account for IT specifics: Agile, licenses, IP, SaaS, open source, and metrics. We negotiate on your behalf — on paper and in substance.",
            descriptionStyle: "justify",
          },
          whatWeDo: {
            title: "What we do",
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
          },
          stages: {
            title: "How it works",
            stages: [
            {
              title: "The task",
              description:
                "You send a draft, a thread, or a description of the deal. We pin the parties, what you sell, and where the risk sits.",
            },
            {
              title: "The draft",
              description:
                "We write or amend the contract for your model: SaaS, contractor work, a licence, a team. We mark the terms you should not give away.",
            },
            {
              title: "Negotiation",
              description:
                "We comment on the other side’s edits, hold the line, or give wording you can send as-is.",
            },
            {
              title: "Signature",
              description:
                "We close the pack: contract, annexes, acts, IP transfer. Then you can work, not argue about what was meant.",
            },
          ],
          },
          faq: {
            title: "Questions",
            items: [
            {
              question: "Can we send our own template?",
              answer:
                "Yes. That is often the start: we look at what is already signed and fix the risk, instead of rewriting from scratch for no reason.",
            },
            {
              question: "How long does one contract take?",
              answer:
                "A typical document takes a few working days after the brief. A pack with IP, SLA, and a team takes longer. We give a date after the review.",
            },
            {
              question: "Do you explain what we are signing?",
              answer:
                "Yes. Each contested clause is translated into the deal: what happens if a deadline slips, who owns the code, how you exit.",
            },
            {
              question: "Do you work with English-language contracts?",
              answer:
                "Yes, for product and cross-border deals. The legal meaning and the Russian business model have to match.",
            },
          ],
          },
          banner: {
            image: "/service-banner.webp",
            description:
              "We don't just write 'from a template' — we dive into the substance of your business and create documents that protect you in real life, not just in theory.",
            buttonText: "Submit a request",
            labelText: "[ from our side ]",
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
          titleBlock: {
            title: "Deals, Investments & Corporate Support",
            description:
            "We support IT companies at every stage: from project launch to business exit. We help attract investments, formalize partnerships, protect interests in deals, and build structures that won't trip you up at due diligence.",
            descriptionStyle: "justify",
          },
          whatWeDo: {
            title: "What we do",
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
                "We support spin-offs, mergers, and internal restructuring: preparing the documents, aligning the corporate structure, and reducing risk for founders and the product",
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
          },
          stages: {
            title: "How it works",
            stages: [
            {
              title: "The map",
              description:
                "Who is in, who is out, what is being sold, and which promises already live in chat. Documents do not hold without that.",
            },
            {
              title: "The structure",
              description:
                "Cap table, options, corporate approvals, restrictions. We look at what will break in due diligence.",
            },
            {
              title: "The papers",
              description:
                "SPA, corporate consents, a term sheet, or a round pack. We negotiate the wording with the other side.",
            },
            {
              title: "Closing",
              description:
                "We get to signature and filings. We record what remains after the deal: options, debt, lock-ups.",
            },
          ],
          },
          faq: {
            title: "Questions",
            items: [
            {
              question: "Do we need an investor already in hand?",
              answer:
                "No. We often start by cleaning corporate and contract hygiene so due diligence does not stop the round.",
            },
            {
              question: "Do you only work with Russian companies?",
              answer:
                "The core is Russian. Foreign structures are reviewed as part of the main deal, not as a standalone “offshore service”.",
            },
            {
              question: "What if the founders are already in conflict?",
              answer:
                "We first check whether documents and talks can close it. If not, we say you need a dispute, not a cosmetic charter edit.",
            },
            {
              question: "How fast can a round pack be assembled?",
              answer:
                "It depends how messy the corporate file is. After the review we give a real timeline, not “we will handle it in a week”.",
            },
          ],
          },
          banner: {
            image: "/service-banner.webp",
            description:
              "We structure deals and corporate changes so your business stays clear to investors, banks, and the team running it.",
            buttonText: "Submit a request",
            labelText: "[ from our side ]",
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
          titleBlock: {
            title: "Litigation & Claims",
            description:
            "Not all conflicts can be resolved through negotiation — but we'll try first. And if that doesn't work, we'll build a defense strategy, gather evidence, and represent your interests in court. We specialize in IT disputes, intellectual property, contract enforcement, and corporate conflicts.",
            descriptionStyle: "justify",
          },
          whatWeDo: {
            title: "What we do",
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
              title:
                "Representation in arbitration and general jurisdiction courts",
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
          },
          stages: {
            title: "How it works",
            stages: [
            {
              title: "Review",
              description:
                "Contract, correspondence, acts, money. We say whether the dispute is worth running or better closed with a claim letter.",
            },
            {
              title: "Position",
              description:
                "Facts, evidence, and a line: claim, defence, or talks. Without that, court is noise.",
            },
            {
              title: "Conduct",
              description:
                "Letters, claim, defence, hearings. You stay informed without a daily legal stream.",
            },
            {
              title: "Enforcement",
              description:
                "If there is a judgment, we take it to money or action. A dispute does not end on a PDF with a stamp.",
            },
          ],
          },
          faq: {
            title: "Questions",
            items: [
            {
              question: "Do you go to court at once?",
              answer:
                "No. We first count what can actually be recovered and what it will cost. A letter and a pause in the work can be stronger than a claim.",
            },
            {
              question: "Do you take non-IT disputes?",
              answer:
                "The focus is contracts, IP, corporate, and IT delivery. General “anything” disputes are out of scope.",
            },
            {
              question: "Do you need every original on day one?",
              answer:
                "Scans of the contract, the thread, and payments are enough to start. Originals and witnesses come in once the dispute is real.",
            },
            {
              question: "Can the dispute be run remotely?",
              answer:
                "Preparation, yes. Hearings depend on the court and the format. We settle that at the start, not on the hearing day.",
            },
          ],
          },
          banner: {
            image: "/service-banner.webp",
            description:
              "We assess the case realistically, keep the dispute moving, and stay in control from the first claim to enforcement.",
            buttonText: "Submit a request",
            labelText: "[ from our side ]",
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
          titleBlock: {
            title: "Intellectual Property & Copyright",
            description:
            "Code, design, content, and brand are assets — not just files. We help you register, protect, and monetize them. Working with IT products, games, SaaS, and content, we know exactly where ideas end and rights begin.",
            descriptionStyle: "justify",
          },
          whatWeDo: {
            title: "What we do",
            features: [
            {
              title:
                "Formalizing rights to code, design, interfaces, and content",
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
              title:
                "Evaluating and securing rights to team and contractor work results",
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
          },
          stages: {
            title: "How it works",
            stages: [
            {
              title: "Inventory",
              description:
                "Code, design, brand, content, data. Who wrote it, on which contracts, and what already leaked into open source.",
            },
            {
              title: "Title",
              description:
                "We close the chain: employees, contractors, licences. Without that, the asset exists only in the repo.",
            },
            {
              title: "Paper",
              description:
                "Contracts, acts, licences, registration where it actually protects you, not where it looks nice.",
            },
            {
              title: "The regime",
              description:
                "How you transfer and license going forward, so the next deal does not collapse.",
            },
          ],
          },
          faq: {
            title: "Questions",
            items: [
            {
              question: "Do we have to register the code?",
              answer:
                "Not always. First close the contracts and the transfer of rights. Registration helps when it strengthens protection or a deal, not as a badge.",
            },
            {
              question: "What about open source in the product?",
              answer:
                "We look at the stack and the licences. Sometimes a policy and a NOTICE file are enough. Sometimes a dependency has to go before a release or a round.",
            },
            {
              question: "A contractor wrote code with no contract. Too late?",
              answer:
                "Late is more expensive, not impossible. Rights have to be closed properly after the fact. The longer you wait, the worse it gets.",
            },
            {
              question: "Do you handle title disputes?",
              answer:
                "Yes: letter, talks, claim. First we check whether the chain of title even exists. If it does not, there is nothing to fight over.",
            },
          ],
          },
          banner: {
            image: "/service-banner.webp",
            description:
              "We secure product rights before a dispute becomes a crisis: formalizing ownership, closing gaps, and strengthening your evidence base.",
            buttonText: "Submit a request",
            labelText: "[ from our side ]",
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
          titleBlock: {
            title: "IT Tax Benefits & Accreditation",
            description:
            "To benefit from tax and HR incentives for IT companies, it's essential to properly obtain accreditation and maintain compliance. We handle it all — from submitting the application to supporting audits and reporting.",
            descriptionStyle: "justify",
          },
          whatWeDo: {
            title: "What we do",
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
              title:
                "Support during FTS and Ministry of Digital Development audits",
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
                "We help build the reporting package, internal confirmations, and compliance calendar needed to support benefits and accreditation in practice",
            },
            {
              title: "Support in disputes over IT company status",
              description:
                "We participate in arbitration defense, prepare documents, and handle both legal and accounting aspects",
            },
            {
              title:
                "Consulting on OKVED changes, activity types, and group structure",
              description:
                "We adapt the business to incentive requirements without risking legal or tax security",
            },
          ],
          },
          stages: {
            title: "How it works",
            stages: [
            {
              title: "Criteria",
              description:
                "Revenue, headcount, codes, and the actual profile of the work against current accreditation and tax-benefit rules.",
            },
            {
              title: "The file",
              description:
                "Activity description, contracts, reporting. We remove wording that gets an application sent back.",
            },
            {
              title: "Filing",
              description:
                "We run the application and the correspondence. If you already have status, we check you will not lose it on the next report.",
            },
            {
              title: "Hold",
              description:
                "We set a control on the metrics so a change in model, contract, or group structure does not drop the benefit.",
            },
          ],
          },
          faq: {
            title: "Questions",
            items: [
            {
              question: "Do you guarantee accreditation?",
              answer:
                "No. A government decision cannot be guaranteed. We can say whether you meet the criteria now and what to fix before filing.",
            },
            {
              question: "We already have accreditation. Why call you?",
              answer:
                "So you do not lose it. Status often breaks on a revenue mix, outstaff, or the wrong contract, not on the original filing.",
            },
            {
              question: "Is this tied to accounting?",
              answer:
                "Yes. The legal model and the books have to say the same thing. Otherwise the benefit lasts only until the first review.",
            },
            {
              question: "How long does preparation take?",
              answer:
                "Faster if the criteria are already met. If contracts and revenue need cleaning, we review first, then give a date.",
            },
          ],
          },
          banner: {
            image: "/service-banner.webp",
            description:
              "We help maintain IT company status in real operating conditions, with documentation, logic, and enough resilience for audits.",
            buttonText: "Submit a request",
            labelText: "[ from our side ]",
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
          "Non-standard legal analysis",
          "Legal hypotheses",
          "Risk review of decisions",
        ],
        slug: "pravovoi-rnd-i-audit",
        detailPage: {
          titleBlock: {
            title: "Legal R&D and Audit",
            description:
            "When a legal question has no template answer, we break down the business model, identify the applicable regulation, and propose workable legal scenarios. This format is suited for new products, complex launches, and decisions where the cost of a mistake is high.",
            descriptionStyle: "justify",
          },
          whatWeDo: {
            title: "What we do",
            features: [
            {
              title: "Analysis of non-standard legal models",
              description:
                "We assess how regulation applies to a new product, platform, service, or internal process with no obvious market precedent",
            },
            {
              title: "Legal hypotheses and options memos",
              description:
                "We prepare structured opinions with several implementation options, their limits, and the risks attached to each scenario",
            },
            {
              title: "Risk mapping before launch",
              description:
                "We identify critical legal, tax, and operational risks before a product release, integration, or market entry",
            },
            {
              title: "Audit of product and process documentation",
              description:
                "We review current contracts, policies, and internal documents to spot gaps that could affect scaling, investment, or compliance",
            },
            {
              title: "Support for management decisions",
              description:
                "We help founders and managers compare scenarios, document reasoning, and move forward with a legally defensible position",
            },
            {
              title: "Legal position for partners and investors",
              description:
                "We package complex conclusions into a clear format suitable for negotiations, approvals, or due diligence discussions",
            },
          ],
          },
          stages: {
            title: "How it works",
            stages: [
            {
              title: "The hypothesis",
              description:
                "Which product, market, and constraint. Without a question, an audit becomes a wall of text.",
            },
            {
              title: "Risk map",
              description:
                "Model, contracts, data, IP, regulation. We mark what blocks launch and what can wait in the backlog.",
            },
            {
              title: "The memo",
              description:
                "What is allowed, on what terms, and what you must not promise to clients or investors.",
            },
            {
              title: "Implementation",
              description:
                "We turn the findings into documents, policies, and process so the research does not stay a PDF.",
            },
          ],
          },
          faq: {
            title: "Questions",
            items: [
            {
              question: "Is this a legal opinion on everything?",
              answer:
                "No. We take a concrete model or launch. A wide “company audit” with no question produces little use and a lot of prose.",
            },
            {
              question: "Does this work before an investor?",
              answer:
                "Yes, if you need a risk read on the product and the file, not a marketing “all clear”. We set the format for the reader.",
            },
            {
              question: "Can we get a risk map without documents?",
              answer:
                "Yes. Sometimes you only need to know the stop line. Documents come second, once you know what you are launching.",
            },
            {
              question: "Do you take unusual models?",
              answer:
                "Yes. That is the R&D zone: data marketplaces, mixed licences, new processing loops. There is no template here.",
            },
          ],
          },
          banner: {
            image: "/service-banner.webp",
            description:
              "We turn uncertain legal questions into structured decisions your team can actually act on.",
            buttonText: "Submit a request",
            labelText: "[ from our side ]",
          },
        },
      },
      {
        title: "Legal Consulting for AI/ML",
        highlights: [
          "AI service compliance",
          "Content and personal data",
          "AI product launch support",
        ],
        slug: "konsalting-po-ai-ml",
        detailPage: {
          titleBlock: {
            title: "Legal Consulting for AI/ML",
            description:
            "We help teams launch and scale AI products without overlooking risks around data, generated content, model licensing, and product claims. We adapt legal requirements to the realities of ML pipelines, APIs, copilots, and internal AI tools.",
            descriptionStyle: "justify",
          },
          whatWeDo: {
            title: "What we do",
            features: [
            {
              title: "AI product compliance review",
              description:
                "We assess the legal architecture of the service: what data it uses, what it generates, and where the key compliance boundaries are",
            },
            {
              title: "Terms, policies, and user disclosures",
              description:
                "We prepare public documents and in-product disclaimers covering generated content, limitations, moderation, and acceptable use",
            },
            {
              title: "Generated content and IP risks",
              description:
                "We analyze authorship, training data constraints, reuse risks, and the legal boundaries for commercial exploitation of outputs",
            },
            {
              title: "Vendor, API, and model licensing review",
              description:
                "We check agreements with model providers and infrastructure vendors to align your product with licensing and usage restrictions",
            },
            {
              title: "Personal data and sensitive data controls",
              description:
                "We help structure consent, processing logic, and internal restrictions when AI features interact with personal or confidential data",
            },
            {
              title: "Incident and regulator response support",
              description:
                "We help formulate positions and responses if the product triggers complaints, takedown demands, or regulatory questions",
            },
          ],
          },
          stages: {
            title: "How it works",
            stages: [
            {
              title: "The scenario",
              description:
                "Whose data, which model, what is generated, who the user is. Without that, policies are decoration.",
            },
            {
              title: "Risks",
              description:
                "IP in model output, personal data, provider licences, marketing claims. Priorities, not a hundred-page checklist.",
            },
            {
              title: "Documents",
              description:
                "Terms, policies, provider and customer contracts. Wording you can show to a user and to a regulator.",
            },
            {
              title: "The regime",
              description:
                "What to do on an incident, a request, or a model change, so launch is not a one-off paper.",
            },
          ],
          },
          faq: {
            title: "Questions",
            items: [
            {
              question: "Do we need a separate “AI contract”?",
              answer:
                "Not always. Often the rules sit in the offer, the data terms, and the provider contract. A separate layer is for when the model is the product.",
            },
            {
              question: "Do you review the model itself?",
              answer:
                "Not as data scientists. We review the legal contour: data, rights, disclosures, liability. Technical audit stays with your team.",
            },
            {
              question: "Who owns generated content?",
              answer:
                "We unpack who it belongs to, what you can promise a customer, and which provider licences cut that promise. This often stops a B2B sale.",
            },
            {
              question: "Do you help with a regulator request?",
              answer:
                "Yes: position, documents, and an explanation of the scenario. Better to build that before the request, not the night before the answer.",
            },
          ],
          },
          banner: {
            image: "/service-banner.webp",
            description:
              "We make AI launches legally clearer without slowing down product development.",
            buttonText: "Submit a request",
            labelText: "[ from our side ]",
          },
        },
      },
      {
        title: "Biometrics and Digital Identification Systems",
        highlights: [
          "Storage, transfer, consents",
          "152-FZ requirements",
          "ESIA, SBP, and FinTech",
        ],
        slug: "biometriya-i-cifrovaya-identifikaciya",
        detailPage: {
          titleBlock: {
            title: "Biometrics and Digital Identification Systems",
            description:
            "Biometric and identification projects operate at the intersection of personal data, sector regulation, and technical architecture. We help structure those projects so the product logic, user flows, and document framework can withstand partner, regulator, and audit scrutiny.",
            descriptionStyle: "justify",
          },
          whatWeDo: {
            title: "What we do",
            features: [
            {
              title: "Mapping biometric and identification data flows",
              description:
                "We document what data is collected, where it is stored, who processes it, and how it moves through the system",
            },
            {
              title: "Consent and document package preparation",
              description:
                "We draft consents, notices, public documents, and internal forms for lawful work with biometric and identification data",
            },
            {
              title: "Internal policies and regulatory notifications",
              description:
                "We prepare local acts, access rules, retention logic, and filings required for regulated identification processes",
            },
            {
              title: "Contracts with vendors and processors",
              description:
                "We formalize roles and liability for integrators, processors, identification providers, and technical partners",
            },
            {
              title: "Audit of user identification scenarios",
              description:
                "We review onboarding, verification, storage, and reuse scenarios to identify legal weaknesses before launch or scaling",
            },
            {
              title: "Support in regulator and partner discussions",
              description:
                "We help explain the legal model to banks, platform partners, compliance teams, and supervisory authorities",
            },
          ],
          },
          stages: {
            title: "How it works",
            stages: [
            {
              title: "Flows",
              description:
                "Where biometrics are captured, where they go, who the processor is, why they exist in the product. The map matters more than a pile of consents.",
            },
            {
              title: "Grounds",
              description:
                "Consents, notices, internal rules. We check whether the scenario is allowed at all, not only whether a checkbox is signed.",
            },
            {
              title: "Contracts",
              description:
                "Integrators, cloud, banks, partners. Who is liable on a leak and on a request.",
            },
            {
              title: "Support",
              description:
                "A review of live scenarios after launch, and support in talks with a regulator or a large customer.",
            },
          ],
          },
          faq: {
            title: "Questions",
            items: [
            {
              question: "Is in-app consent enough?",
              answer:
                "No. For biometrics, consent is only a layer. You need grounds, scope, storage, and contracts with whoever processes it.",
            },
            {
              question: "Can identification run through a vendor?",
              answer:
                "Yes, if the contract is clear on who the operator is, where the contour sits, and what happens to templates. Otherwise the risk stays with you.",
            },
            {
              question: "Do you only write policies?",
              answer:
                "No. A policy without a flow map and integrator contracts does not protect you. We start from the product scenario.",
            },
            {
              question: "Do you work with banks and public contours?",
              answer:
                "Yes, on the legal packaging of the integration. We read the venue rules with your team, not instead of it.",
            },
          ],
          },
          banner: {
            image: "/service-banner.webp",
            description:
              "We align complex identification projects with real regulatory and partner expectations.",
            buttonText: "Submit a request",
            labelText: "[ from our side ]",
          },
        },
      },
      {
        title: "Due Diligence and Counterparty Verification",
        highlights: [
          "Legal review of IT products",
          "Pre-investment checks",
          "Counterparty risk assessment",
        ],
        slug: "due-diligence-i-proverka-kontragentov",
        detailPage: {
          titleBlock: {
            title: "Due Diligence and Counterparty Verification",
            description:
            "We run legal checks before investments, partnerships, acquisitions, and other critical decisions. The goal is not just to list documents, but to show where the real legal and business risk sits and what can be fixed before the deal moves forward.",
            descriptionStyle: "justify",
          },
          whatWeDo: {
            title: "What we do",
            features: [
            {
              title: "Corporate and structural review",
              description:
                "We assess ownership, governance, authority, encumbrances, and the legal structure of the target company or counterparty",
            },
            {
              title: "Contracts and rights chain verification",
              description:
                "We review commercial contracts, team arrangements, and IP transfer documents to confirm the business actually owns what it sells",
            },
            {
              title: "Regulatory and compliance review",
              description:
                "We identify licensing, accreditation, personal data, and other compliance risks that may affect the deal or future operations",
            },
            {
              title: "Litigation and enforcement check",
              description:
                "We analyze disputes, claims, enforcement actions, and other red flags that may signal hidden liabilities",
            },
            {
              title: "Counterparty reliability assessment",
              description:
                "We verify public records, connections, risk indicators, and practical signs that the partner may be unstable or unsafe to work with",
            },
            {
              title: "Actionable due diligence report",
              description:
                "We deliver a report with red flags, priorities, and concrete recommendations for negotiations, cleanup, or deal structuring",
            },
          ],
          },
          stages: {
            title: "How it works",
            stages: [
            {
              title: "Scope",
              description:
                "Company, deal, contractor, IP. Without bounds, a review sprawls and does not answer the deal question.",
            },
            {
              title: "Collection",
              description:
                "Corporate file, contracts, disputes, licences, data. We request the list once so we are not walking in circles.",
            },
            {
              title: "Review",
              description:
                "Breaks in title, debt, shareholder conflict, regulation. We separate a stop from “know and live with it”.",
            },
            {
              title: "The report",
              description:
                "Priorities and what to fix before signing. Not an encyclopedia, a decision list.",
            },
          ],
          },
          faq: {
            title: "Questions",
            items: [
            {
              question: "Is this an open-source check?",
              answer:
                "Not only. Public data is a layer. A deal needs the company file, contracts, and IP. Otherwise it is a briefing, not due diligence.",
            },
            {
              question: "How long does a review take?",
              answer:
                "A narrow counterparty check is faster. Full DD before a purchase or a round depends on volume and how quickly papers come back.",
            },
            {
              question: "Can you review IP only?",
              answer:
                "Yes. That is a common ask before buying a product. We lock the scope in writing so it does not morph into a full company audit.",
            },
            {
              question: "Can the report go to an investor?",
              answer:
                "Yes, if we agree that at the start. We write so the reader sees the risk, not a stack of charter quotes.",
            },
          ],
          },
          banner: {
            image: "/service-banner.webp",
            description:
              "We show where the actual legal risk is before it turns into an expensive surprise.",
            buttonText: "Submit a request",
            labelText: "[ from our side ]",
          },
        },
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
        slug: "uchet-ip-i-nma",
        detailPage: {
          titleBlock: {
            title: "IP and Intangible Assets Accounting",
            description:
            "We help IT businesses treat code, brands, databases, and digital products as managed assets rather than scattered files and assumptions. We align legal formalization with accounting logic so the asset base stands up to audits, investment review, and internal reporting.",
            descriptionStyle: "justify",
          },
          whatWeDo: {
            title: "What we do",
            features: [
            {
              title: "Inventory of IP and intangible assets",
              description:
                "We identify which developments, brands, databases, and other results can be recognized, documented, and managed as assets",
            },
            {
              title: "Primary documents and asset recognition support",
              description:
                "We help prepare acts, supporting files, and internal documents needed to confirm creation and acceptance of intangible assets",
            },
            {
              title: "Capitalization and accounting policy setup",
              description:
                "We help define recognition criteria, useful lives, depreciation logic, and the accounting treatment that fits your business model",
            },
            {
              title: "Alignment of legal and accounting documents",
              description:
                "We reconcile contracts, rights transfer documents, and accounting records so the ownership chain matches the financial statements",
            },
            {
              title: "Preparation for audits and investments",
              description:
                "We structure the asset package so auditors, investors, and buyers can quickly understand what exists and on what basis",
            },
            {
              title: "Support for finance and management teams",
              description:
                "We advise on edge cases, internal controls, and documentation standards for ongoing accounting of digital assets",
            },
          ],
          },
          stages: {
            title: "How it works",
            stages: [
            {
              title: "Inventory",
              description:
                "Which code, brand, and content can actually go on the books. Legal reality and accounting have to match.",
            },
            {
              title: "Grounds",
              description:
                "Contracts, acts, costs, recognition tests. Without that, the asset will not survive an audit.",
            },
            {
              title: "Policy",
              description:
                "Capitalisation, useful life, amortisation. We set it for a product model, not an abstract template.",
            },
            {
              title: "The pack",
              description:
                "Legal and accounting papers in one chain, so investors and auditors see the same story.",
            },
          ],
          },
          faq: {
            title: "Questions",
            items: [
            {
              question: "Is this accounting or legal work?",
              answer:
                "Both. Without a transfer of rights, accounting has nothing to stand on. Without accounting logic, the legal pack is not an asset.",
            },
            {
              question: "Can we book code written by contractors?",
              answer:
                "Yes, if title is closed. If not, contracts and acts first, then the books. Otherwise the asset is fictional.",
            },
            {
              question: "Do we need this before a round?",
              answer:
                "Often yes. Due diligence asks what the asset is and on what grounds. Better to build the pack in advance.",
            },
            {
              question: "Do you run the books ongoing?",
              answer:
                "We can set the contour and stay on the hard cases. We do not replace day-to-day accounting if you already have a finance team.",
            },
          ],
          },
          banner: {
            image: "/service-banner.webp",
            description:
              "We help turn digital developments into documented assets the business can rely on.",
            buttonText: "Submit a request",
            labelText: "[ from our side ]",
          },
        },
      },
      {
        title: "IT Benefits and Tax Base Control",
        highlights: [
          "Help maintain accredited company status",
          "Check conditions, documents, and reporting",
        ],
        slug: "kontrol-it-lgot-i-nalogov",
        detailPage: {
          titleBlock: {
            title: "IT Benefits and Tax Base Control",
            description:
            "Tax benefits for IT companies require constant monitoring, not a one-time setup. We help track the indicators that matter, keep the supporting logic in order, and prepare the business for audits, reorganizations, and changes in revenue structure.",
            descriptionStyle: "justify",
          },
          whatWeDo: {
            title: "What we do",
            features: [
            {
              title: "Monitoring compliance with IT benefit criteria",
              description:
                "We track headcount, revenue composition, activity profile, and other indicators that affect eligibility for tax incentives",
            },
            {
              title: "Revenue and expense structure review",
              description:
                "We help separate qualifying and non-qualifying income streams and assess how they influence the tax base and benefit status",
            },
            {
              title: "Supporting document package preparation",
              description:
                "We organize the internal and external documents needed to justify benefits during tax reviews and spot checks",
            },
            {
              title: "Risk assessment before business changes",
              description:
                "We analyze how changes in contracts, group structure, product model, or accounting logic may affect tax incentives",
            },
            {
              title: "Support during audits and objections",
              description:
                "We help respond to requests, explain the business model, and protect the company's position if questions arise",
            },
            {
              title: "Periodic compliance review",
              description:
                "We conduct regular checks to identify issues early and keep the company in a stable compliance zone",
            },
          ],
          },
          stages: {
            title: "How it works",
            stages: [
            {
              title: "Snapshot",
              description:
                "Revenue, headcount, contract mix, costs. Where the benefit is thin right now.",
            },
            {
              title: "Rules",
              description:
                "Which flows are eligible and which are not, and how to book them so reporting does not fight the contracts.",
            },
            {
              title: "The file",
              description:
                "Internal notes, contracts, explanations. Something to answer with when the tax office writes.",
            },
            {
              title: "Control",
              description:
                "A periodic review before a model change, a hire, or new revenue. The benefit lives in motion, not in one filing.",
            },
          ],
          },
          faq: {
            title: "Questions",
            items: [
            {
              question: "How is this different from accreditation?",
              answer:
                "Accreditation is the door into status. This contour is so the benefits do not fall off later because of revenue, contracts, or the books.",
            },
            {
              question: "Our accountant already “runs everything”. Why this?",
              answer:
                "Because an IT mix — licences, contractors, mixed revenue — is often invisible to ordinary bookkeeping.",
            },
            {
              question: "Do you help in a tax review?",
              answer:
                "Yes: explanations, the document pack, the position. The earlier we have seen the contour, the calmer the review.",
            },
            {
              question: "Can you review a single year?",
              answer:
                "Yes. A one-off snapshot makes sense before a reorganisation, a round, or if nobody has looked at the criteria in a long time.",
            },
          ],
          },
          banner: {
            image: "/service-banner.webp",
            description:
              "We help keep IT tax benefits under control before a reporting issue turns into a tax dispute.",
            buttonText: "Submit a request",
            labelText: "[ from our side ]",
          },
        },
      },
      {
        title: "Management Accounting (Cash Flow, P&L)",
        highlights: [
          "Financial model setup for business",
          "Transparency and efficiency control",
        ],
        slug: "upravlencheskii-uchet-dds-pl",
        detailPage: {
          titleBlock: {
            title: "Management Accounting (Cash Flow, P&L)",
            description:
            "We build management accounting for IT businesses in a way that reflects how the company actually earns, spends, and scales. This helps founders and managers see unit economics, cash gaps, margin drivers, and operational discipline in one system.",
            descriptionStyle: "justify",
          },
          whatWeDo: {
            title: "What we do",
            features: [
            {
              title: "Management reporting model setup",
              description:
                "We design the structure of Cash Flow, P&L, and related reports based on your business model and decision-making needs",
            },
            {
              title: "Revenue and cost center structuring",
              description:
                "We help classify income streams, teams, products, and projects so reporting reflects real business performance",
            },
            {
              title: "Cash gap and payment discipline control",
              description:
                "We help track inflows, outflows, obligations, and forecast periods of liquidity pressure before they become operational problems",
            },
            {
              title: "Unit economics and profitability analysis",
              description:
                "We build a reporting logic that shows margin by product, client segment, service line, or delivery model",
            },
            {
              title: "Budgeting and scenario planning",
              description:
                "We prepare planning models for growth, hiring, and investment scenarios so management decisions are grounded in numbers",
            },
            {
              title: "Dashboards for founders and managers",
              description:
                "We help turn raw accounting data into clear management views for regular operational and strategic review",
            },
          ],
          },
          stages: {
            title: "How it works",
            stages: [
            {
              title: "The model",
              description:
                "How products, teams, and money actually work. Without that, P&L is a pretty table about nothing.",
            },
            {
              title: "The contour",
              description:
                "Cash flow, P&L, cost centres. Set so you see margin and a cash gap, not only tax.",
            },
            {
              title: "Rules",
              description:
                "How to allocate revenue, contractors, payroll, and infrastructure, so you are not arguing “where to put it” every month.",
            },
            {
              title: "The rhythm",
              description:
                "Reports and a cadence for management, so decisions sit on numbers, not on a feeling at quarter-end.",
            },
          ],
          },
          faq: {
            title: "Questions",
            items: [
            {
              question: "Is this instead of bookkeeping?",
              answer:
                "No. Bookkeeping closes the regulatory contour. Management accounts answer where you earn and where you lose money.",
            },
            {
              question: "Do we need our own finance team?",
              answer:
                "Preferably. We set the model and the rules. Day-to-day input stays with you or with a dedicated contour.",
            },
            {
              question: "Does this fit a 10-person studio?",
              answer:
                "Yes, if you already cannot see margin by project. The model is simpler than a subscription product, but the logic is the same.",
            },
            {
              question: "Can we start with cash flow only?",
              answer:
                "Yes. That is a common start: money first, then profit by line. We do not drag a full contour if you do not need it.",
            },
          ],
          },
          banner: {
            image: "/service-banner.webp",
            description:
              "We make financial reporting understandable enough to support real management decisions.",
            buttonText: "Submit a request",
            labelText: "[ from our side ]",
          },
        },
      },
    ],
  },
];
