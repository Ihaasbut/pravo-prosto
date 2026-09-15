import type { ServiceExtrasBySlugI } from "../../types/mockData";

export const serviceExtras: ServiceExtrasBySlugI = {
  "contracts-and-documents": {
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
    faq: [
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
  "deals-investments-corporate": {
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
    faq: [
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
  "litigation-and-claims": {
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
    faq: [
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
  "intellectual-property": {
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
    faq: [
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
  "it-benefits-and-accreditation": {
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
    faq: [
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
  "pravovoi-rnd-i-audit": {
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
    faq: [
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
  "konsalting-po-ai-ml": {
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
    faq: [
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
  "biometriya-i-cifrovaya-identifikaciya": {
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
    faq: [
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
  "due-diligence-i-proverka-kontragentov": {
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
    faq: [
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
  "uchet-ip-i-nma": {
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
    faq: [
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
  "kontrol-it-lgot-i-nalogov": {
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
    faq: [
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
  "upravlencheskii-uchet-dds-pl": {
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
    faq: [
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
};
