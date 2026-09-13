import type { ComponentType } from "react";
import type { NewI } from "../../types/news.types";
import NewsTitleTextBlock from "../../pages/newsOne/components/newsTitleTextBlock/NewsTitleTextBlock";
import NewsTextBlock from "../../pages/newsOne/components/newsTextBlock/NewsTextBlock";

export const news: NewI[] = [
  {
    title: "We moved to the B. Rameev IT Park",
    image: "/news/newTest.png",
    categoryId: 2,
    categoryName: "Our News",
    slug: "ofis-v-it-parke-rameeva",
    date: "12.03.2026",
    blocks: [
      {
        component: NewsTitleTextBlock as ComponentType,
        title:
          "Pravo Prosto’s head office is now in the B. Rameev IT Park in Kazan.",
        text: "We moved closer to product teams, startups, and park residents on purpose. Legal work for IT is faster when you can review an offer, NDA, or a disputed SLA clause the same day instead of waiting a week for a separate meeting. In the park it is easier to catch a founder between a demo and a client call, show a contract edit, and agree the wording on the spot. For us this is not a prestige address. It is a way to work at the same pace as product teams.",
      },
      {
        component: NewsTextBlock as ComponentType,
        text: "The new space makes short document reviews, founder sessions, and live contract edits with the commercial team easier. The format stays the same: no legalese, clear priorities, and a next step the team can actually use. You can sit at one table, open the offer, the SLA, and the client chat, and close in an hour what usually stretches across several emails. If a longer review is needed, we book a slot and collect the questions in advance so the time is not spent hunting for files.",
      },
      {
        component: NewsTextBlock as ComponentType,
        text: "If you are a park resident or a nearby IT company, bring one specific contract. Even a short review often removes a risk before talks with a large customer or an investor begin. It is better to bring one document and one question: can we sign this, what is missing, where can they squeeze us. After the meeting you leave with a list of edits and a clear split between what the team can fix itself and what should go to a lawyer.",
      },
    ],
  },
  {
    title: "What an invoice-offer is and when it is enough",
    image: "/news/news-3.png",
    categoryId: 5,
    categoryName: "Useful",
    slug: "chto-takoe-schet-oferta",
    date: "25.02.2026",
    blocks: [
      {
        component: NewsTitleTextBlock as ComponentType,
        title:
          "An invoice-offer is an invoice that also acts as a proposal to enter into a contract on the terms stated in it.",
        text: "If the buyer pays that invoice, they are treated as having accepted the terms. A separate signed contract may not be needed. That works well for small deliveries, one-off services, and fast deals. For a complex IT project it is often not enough. Teams like the invoice-offer because it can be issued the same day, without waiting for a ten-page contract to clear. The problem starts when the scope grows, revisions appear, and expectations that never made it into the invoice become “obvious” to one side only.",
      },
      {
        component: NewsTextBlock as ComponentType,
        text: "The invoice-offer should make the parties, subject, price, term, and key conditions clear. If it has no scope, acceptance process, support period, or IP rules, any later dispute turns into “what the parties meant”. That is especially risky when development has already started after a short message and an invoice. In practice, payment is followed by questions about access, milestones, who pays for extra work, and who owns the code. If the document is silent, the argument moves to chat, and chat rarely survives a real conflict.",
      },
      {
        component: NewsTextBlock as ComponentType,
        text: "The format fits a standard service with a fixed price: an audit, a consultation, a ready document pack. Do not use it as the only paper when the work includes product development, integration, SLA, access to personal data, or exclusive deliverables. Those deals have too many forks: what counts as done, how stages are accepted, who is liable for downtime, and what happens if the client changes the brief mid-stream. In those cases the invoice can be an annex, but it should not be the whole relationship.",
      },
      {
        component: NewsTextBlock as ComponentType,
        text: "A practical rule: if payment will be followed by revisions, acceptance, bug fixes, rights to code, or downtime liability, an invoice-offer is not enough. You need a contract, or at least a detailed annex to the offer. Before paying, ask whether you could prove the scope, deadline, and result from this invoice alone a month later. If the answer is “no” or “we will sort it in chat”, stop and write the missing terms while both sides still want to work together.",
      },
    ],
  },
  {
    title: "We launched a rapid contract audit for SaaS companies",
    image: "/news/newTest.png",
    categoryId: 2,
    categoryName: "Our News",
    slug: "ekspress-audit-dogovorov-dlya-saas",
    date: "10.02.2026",
    blocks: [
      {
        component: NewsTitleTextBlock as ComponentType,
        title:
          "In five working days we show the weak points in the offer, SLA, NDA, and data documents.",
        text: "The service is for teams that already sell a product but built their contract stack deal by deal. You get a risk map, a prioritized list of fixes, and a clear order: what to close before talks with a larger customer. We do not start by rewriting the whole pack. First we look at the papers that actually go to clients, where they contradict each other, and which clauses already slow sales. That saves time: we fix the documents the team uses every day, not a polished template nobody sends.",
      },
      {
        component: NewsTextBlock as ComponentType,
        text: "We most often see B2B SaaS products, marketplaces, and service studios. Versions multiply fast: one offer on the website, another PDF for sales, a third attached to an invoice. The customer’s procurement and security teams notice immediately. Another typical picture is last year’s NDA, a privacy policy with another company’s name, and an SLA that support has never read. In the audit we put those files on one map and show which document should be the source of truth, and which one only duplicates the risk.",
      },
      {
        component: NewsTextBlock as ComponentType,
        text: "The audit does not turn into a wall of comments. We mark what blocks the deal, what can stay, and which wording is better to keep ready instead of inventing it on a call with the client’s legal team. For every red item we give a short recommendation: remove it, narrow it, or move it into a separate enterprise template. After that the team knows not only what is weak, but in which order to repair it so the next deal does not stall.",
      },
    ],
  },
  {
    title: "How a public offer differs from a SaaS contract",
    image: "/news/news-ilana.png",
    categoryId: 5,
    categoryName: "Useful",
    slug: "oferta-i-dogovor-v-saas",
    date: "28.01.2026",
    blocks: [
      {
        component: NewsTitleTextBlock as ComponentType,
        title:
          "A public offer covers mass sales. A negotiated contract is needed when the client bargains over liability, data, and SLA.",
        text: "A website offer is convenient: the user accepts the terms, pays, and access opens. That is a normal model for self-serve plans. Trouble starts when the same text is sent to an enterprise client with the hope they will sign it unchanged. A large buyer has its own checklist: caps, audit, exit, personal data, and what happens if the product is down during a reporting period. A public offer either skips those topics or closes them too harshly in the vendor’s favour, and both versions fail internal review.",
      },
      {
        component: NewsTextBlock as ComponentType,
        text: "A contract usually adds liability caps, claims process, security audit, data processing, exit, and data return. If the offer has none of that, a large client will either walk away or impose their paper in full. Their paper is almost always worse: unlimited liability, someone else’s SLA, and rights to a “result” that a SaaS product does not really have. It is cheaper to keep your own master agreement ready than to fight a holding company’s template on every deal.",
      },
      {
        component: NewsTextBlock as ComponentType,
        text: "A working setup is a short public offer for standard plans and a separate master agreement template for custom deals. Sales then does not promise “we’ll sign the website terms”, and legal does not rewrite the whole product for every invoice. One more rule matters: the offer and the contract must not contradict each other. If the website has one data-deletion period and the contract has another, the client will pick the version that helps them, and the dispute will start with a simple support ticket.",
      },
    ],
  },
  {
    title: "Case: we prepared a B2B SaaS company for enterprise negotiations",
    image: "/news/news-ilana.png",
    categoryId: 3,
    categoryName: "Our Cases",
    slug: "case-b2b-saas-enterprise-negotiation",
    date: "15.12.2025",
    blocks: [
      {
        component: NewsTitleTextBlock as ComponentType,
        title:
          "The client was entering a deal with an industrial holding and received a long list of markups to the master agreement, SOW, and SLA.",
        text: "We rebuilt the sections on service levels, liability, damage caps, data, and ownership of deliverables. We also prepared a negotiation cheat sheet: which points can be given and which are better kept. The goal was not to win every comment, but to keep the product model intact: a service stays a service, not a works contract with unlimited liability for the customer’s own stack. For every contested block we prepared a fallback clause in advance, so nobody had to invent wording live on the call.",
      },
      {
        component: NewsTextBlock as ComponentType,
        text: "On the buyer’s side, security, procurement, internal legal, and IT all had to approve. So instead of general comments we delivered a clean draft, a risk table, and short answers to each objection. That shortened the review loop: each team got an answer in its own language. Security saw access and incidents, procurement saw caps and service credits, legal saw claims and governing law. Without that split, the same paragraph came back four times with four different complaints.",
      },
      {
        component: NewsTextBlock as ComponentType,
        text: "The pilot was agreed without critical IP concessions and without disproportionate liability for indirect losses or downtime on the customer’s infrastructure. The client also got a corridor for the next deals of the same size: which markups are acceptable, and which already break the unit economics of the plan. After the pilot the template was not thrown away. It stayed as the working base and is now adapted only in small spots for new enterprise buyers.",
      },
    ],
  },
  {
    title:
      "NDA: which clauses actually protect you, and which only take up space",
    image: "/news/news-4.webp",
    categoryId: 5,
    categoryName: "Useful",
    slug: "nda-kakie-punkty-rabotayut",
    date: "02.12.2025",
    blocks: [
      {
        component: NewsTitleTextBlock as ComponentType,
        title:
          "A short NDA is useful. An endless NDA with a vague secret almost never protects anyone.",
        text: "A working document answers four questions: what counts as confidential, who it can be shared with, how long the duty lasts, and what happens after a leak. If the secret is defined as “everything a party learned”, the dispute is later hard to prove. It is better to list types of information: code, customer base, financial models, access credentials, unannounced features. Then a conflict can point to a specific file or login, instead of arguing whether a secret existed at all. The term should also be realistic: eternal secrecy over every chat looks strict and is rarely followed.",
      },
      {
        component: NewsTextBlock as ComponentType,
        text: "Empty clauses show up often: a ban on mentioning the talks at all, a penalty with no link to actual harm, and a duty to keep public information secret. They look strict, but they slow the deal and rarely help in a conflict. Another extra layer is a rule that every paragraph must be stamped “confidential”. Teams do not do that in real work, and the other side later says there was no secret without the stamp. If marking is needed, describe it as helpful, not as the only condition of protection.",
      },
      {
        component: NewsTextBlock as ComponentType,
        text: "For IT, the useful list is different: source code, customer base, pricing logic, roadmap, and access credentials. And separately: an NDA does not replace a development contract and does not transfer rights to the product. After signing an NDA you can safely show a demo and the numbers, but you cannot assume the code is already yours or that a contractor will not take the idea to a neighbouring project. If the goal is to lock rights, you need a contract, an acceptance act, and a clear deliverable. An NDA only keeps the conversation closed while the parties decide whether they will work together.",
      },
    ],
  },
  {
    title: "Video: how to read an invoice-offer in 10 minutes",
    image: "/news/news2.webp",
    categoryId: 4,
    categoryName: "Video",
    slug: "video-kak-chitat-schet-ofertu",
    date: "18.11.2025",
    blocks: [
      {
        component: NewsTitleTextBlock as ComponentType,
        title:
          "A short briefing for founders and account managers: what to check in an invoice before paying or issuing it.",
        text: "The video walks through a six-line checklist: parties, subject, scope, term, price, and what happens after payment. If even one line is missing, do not treat the invoice as a complete deal. The review is built on a live example, not abstract theory. We show where a vague subject like “development services” usually hides, and how one extra phrase about “other work as agreed” later turns into endless extra tasks with no extra fee.",
      },
      {
        component: NewsTextBlock as ComponentType,
        text: "We also unpack the trap “they paid, so they agreed to everything”. Payment covers what is written in the invoice. Unwritten promises from a messenger chat do not travel there on their own. If the chat promised three months of support and the invoice only covers development, the party relying on the chat almost always loses. That is why, before payment, the key promises should be moved into the document itself, or at least into an annex with the same invoice number.",
      },
      {
        component: NewsTextBlock as ComponentType,
        text: "Sales teams can watch it in 10 minutes and see when an invoice-offer is enough, and when a contract with annexes is already required. After the video a manager gets a simple filter. A one-off service with a fixed price can go out as an invoice. Long development, access, IP, and liability need a contract first. That cuts the number of deals that look “closed by payment” while legally they are still unfinished.",
      },
    ],
  },
  {
    title:
      "We spoke at a roundtable on AI, data, and digital service liability",
    image: "/news/news-4.webp",
    categoryId: 2,
    categoryName: "Our News",
    slug: "roundtable-ai-data-liability",
    date: "04.11.2025",
    blocks: [
      {
        component: NewsTitleTextBlock as ComponentType,
        title:
          "The talk focused on how liability changes when a product adds models, generation, and automated decisions.",
        text: "We reviewed the roles of the customer, the integrator, and the model provider, consent, scenario transparency, and which documents should be updated now rather than after the first incident. The main shift is simple: the user no longer always understands who made the decision and on what data. If the offer and the policy stay silent, the claim still lands on the service owner, even when an external model made the error. That is why a pilot should already state what the system can do, what it does not promise, and how a person can challenge the result.",
      },
      {
        component: NewsTextBlock as ComponentType,
        text: "A separate block covered work with product teams. In an AI project, legal should not act as an emergency brake, but as a participant in the user journey, data policy, and incident response. We looked at where the interface needs a warning, where it needs consent, and where a clear scenario description is enough. If legal joins only before launch, it is usually too late to change log architecture, prompt storage, and a contractor’s access to user data. Then only cosmetic edits remain in the documents, while the risk sits in the product itself.",
      },
      {
        component: NewsTextBlock as ComponentType,
        text: "After the event we put together a short checklist for IT Park residents: what to review in the offer, the data policy, and the contractor agreement if the service already uses a model. The list includes the source of training and inference data, a ban on sending client content into external models, the incident process, and who is liable if generation harms the customer’s own client. The checklist can be walked in one working day and shows which document to fix first.",
      },
    ],
  },
  {
    title: "What to review in a developer agreement before product launch",
    image: "/news/news-3.png",
    categoryId: 5,
    categoryName: "Useful",
    slug: "chto-proverit-v-dogovore-s-razrabotchikom",
    date: "20.10.2025",
    blocks: [
      {
        component: NewsTitleTextBlock as ComponentType,
        title:
          "Before launch, the risk is more often in how the team and contractors are documented, not in the code itself.",
        text: "Check at least four blocks: who transfers rights to code and design, how the result is accepted, what happens with bug fixes after handoff, and how access to the repo, analytics, and infrastructure is managed. If those blocks live only in chat, the launch can still happen, but the next serious review will find the gap. An investor, a buyer, or a large client will not ask whether it looks nice. They will ask whether it is yours and who can take production down. The contract should answer that, not the project manager’s memory.",
      },
      {
        component: NewsTextBlock as ComponentType,
        text: "No acceptance criteria means the dispute becomes a fight over expectations. No IP transfer means the issue returns during fundraising, due diligence, or a product sale. The phrase “everything belongs to the client” is usually not enough on its own. You need a list of deliverables, the moment rights pass, an exception for the contractor’s libraries, and an act tied to that list. Otherwise a year later “rights to everything” cover neither the specific repo, nor the design system, nor the deploy scripts without which the product does not build.",
      },
      {
        component: NewsTextBlock as ComponentType,
        text: "If there are several contractors, make sure the rights meet in one place: the company, not the last freelancer who “just helped before launch”. The chain must be continuous: from each contributor to the company, with a clear scope and no oral carve-outs. Close access separately: who stays in GitHub, the cloud, and analytics after the last invoice is paid. Otherwise the product is yours on paper, and in practice it can still be stopped by someone who is no longer on the team.",
      },
    ],
  },
  {
    title: "Case: we assembled the legal package for an IT startup seed round",
    image: "/news/news3.png",
    categoryId: 3,
    categoryName: "Our Cases",
    slug: "seed-round-legal-package-case",
    date: "03.10.2025",
    blocks: [
      {
        component: NewsTitleTextBlock as ComponentType,
        title:
          "Before the round, the founders needed to lock their internal deals and collect the papers investors look at first.",
        text: "We updated the founder framework, roles and vesting, IP and contractor documents. For the data room we prepared short comments so standard questions would not be written the night before the meeting. The starting point was typical for an early stage: the product was already live, and the paperwork lagged behind. Some of the code was written “on enthusiasm”, the designer was hired through friends, and equity lived in a chat. Before the round that stopped being an internal story and became a list of questions that needed calm answers.",
      },
      {
        component: NewsTextBlock as ComponentType,
        text: "The job was not to generate files, but to remove red flags: oral arrangements, undocumented IP transfer, informal contractor payments, and gaps in product paperwork. We mapped the real picture, not an ideal one. Where an act could be restored, we restored it. Where a contractor had already disappeared, we recorded the risk and closed at least what could still be signed. Investors prefer an honest map to a suddenly perfect archive that appeared three days before the meeting.",
      },
      {
        component: NewsTextBlock as ComponentType,
        text: "The team met investors with a clear legal story and a pack they can grow later, instead of rewriting from scratch at every next round. After the deal the framework stayed in place: vesting, the IP chain, and templates for new contractors remained a working system. That is the result seed actually needs. Not a pretty folder, but a frame that can take hiring, new counterparties, and the next due diligence without panic.",
      },
    ],
  },
  {
    title: "7 SLA points that make enterprise sales much harder to skip",
    image: "/news/newTest.png",
    categoryId: 5,
    categoryName: "Useful",
    slug: "sem-punktov-sla-dlya-enterprise",
    date: "12.09.2025",
    blocks: [
      {
        component: NewsTitleTextBlock as ComponentType,
        title:
          "Enterprise almost never buys a service “as is”. It needs a measurable uptime level and a clear response to failure.",
        text: "A working SLA usually includes availability, response time, restore time, escalation channels, exclusions, and what the client gets if the level is missed. Without that, the talk quickly becomes “you will compensate us for everything”. One more point teams often forget is how downtime is counted: by calendar, by the client’s business hours, or only for production. Until the formula is written down, the parties sincerely argue about minutes that are not in the contract. The seventh block is planned work: when you may release updates and how you warn in advance, so a maintenance window is not treated as an outage.",
      },
      {
        component: NewsTextBlock as ComponentType,
        text: "An important detail: SLA is not a penalty equal to the whole contract value. Service credits, a liability cap, and a closed list of direct losses are more honest for both sides and easier to get through procurement. If the template immediately says “we will cover any damage”, procurement may like it and the vendor’s finance lead will not. It is better to calculate in advance what credit you can really give for an hour of downtime, and not promise compensation that kills the plan’s economics after a single incident.",
      },
      {
        component: NewsTextBlock as ComponentType,
        text: "Before sending a template to a client, check that support can actually deliver what is promised. A legally elegant SLA that the team cannot keep at night later hurts more than having none. Match the numbers to on-call rotas, communication channels, and the time it really takes to raise an incident. If the contract promises a 15-minute response and the first reply arrives in two hours, the client will be right both on paper and in fact. Then the SLA stops being a sales tool and becomes a permanent source of claims.",
      },
    ],
  },
  {
    title: "We launched free document reviews for IT Park residents",
    image: "/news/news-ilana.png",
    categoryId: 2,
    categoryName: "Our News",
    slug: "razbory-dokumentov-dlya-rezidentov-it-park",
    date: "28.08.2025",
    blocks: [
      {
        component: NewsTitleTextBlock as ComponentType,
        title:
          "Every two weeks we review one real resident document: an offer, NDA, contractor agreement, or invoice-offer.",
        text: "The format is short: 40 minutes, specific edits, no lecture on “the law in general”. The goal is for the team to leave with 3–5 changes they can make immediately. We read the document in advance and arrive with notes in the text, not with general advice. That leaves time on the call for the contested spots and for the question “what happens if we leave it as is”. The resident then understands not only how to rewrite a paragraph, but which risk they are accepting if there is no time to fix it now.",
      },
      {
        component: NewsTextBlock as ComponentType,
        text: "At the first sessions people most often brought website offer templates and contracts copied from “a lawyer they know”. In both cases the same things break: subject, rights to the result, and liability. Another frequent guest is a ten-page NDA from which you cannot tell what counts as a secret. We do not suggest throwing the document away. Usually it is enough to narrow the subject, remove dead penalties, and add what happens after payment or after access to the service ends.",
      },
      {
        component: NewsTextBlock as ComponentType,
        text: "You can book a slot if you are an IT Park resident or are preparing a deal with a resident. One document per slot. That keeps the review practical instead of turning it into a catch-all consultation. Send the file before the meeting and write in one line what deal sits behind it: a plan sale, a contractor, fundraising, or hiring. The context decides which edits come first. If there is no document yet, bring the nearest template the team already uses, rather than asking for “a contract in general”.",
      },
    ],
  },
  {
    title: "License or assignment: how to transfer rights to code",
    image: "/news/news3.png",
    categoryId: 5,
    categoryName: "Useful",
    slug: "licenziya-ili-otchuzhdenie-prav-na-kod",
    date: "14.07.2025",
    blocks: [
      {
        component: NewsTitleTextBlock as ComponentType,
        title:
          "“Everything created belongs to the company” sounds calm, but it rarely closes rights to code on its own.",
        text: "There are two working models. Assignment: rights to a specific result move to the client. License: the contractor keeps the rights and lets the client use the code within agreed limits. Mixing them in one paragraph is a mistake. If the contract says both “rights pass” and “the contractor keeps a license to everything”, the parties themselves do not know who owns what. That surfaces later, when the product needs to go into a deal, be handed to another contractor, or simply grow without the author of the first commits.",
      },
      {
        component: NewsTextBlock as ComponentType,
        text: "For a company product you usually need assignment of the custom code and a separate license for libraries, templates, and shared pieces the contractor reuses in other projects. Otherwise either you cannot grow the product, or the contractor can no longer use their internal stack. A good practice is to split three baskets: unique project code, the contractor’s reusable modules, and third-party libraries. Each basket gets its own regime. Then you do not have to pretend that React, the contractor’s internal CLI, and your landing page live under the same rules.",
      },
      {
        component: NewsTextBlock as ComponentType,
        text: "Check three more things: when rights pass, what counts as the result, and whether there is an acceptance act. Until there is an act and a repo description, the fight will not be about rights, but about what was actually delivered. Describe the result not as “a website” or “an app”, but as specific repositories, branches, mockups, and environments. The moment rights pass should also be tied to an event: signing the act, paying a milestone, or going to production. Without that tie, a nice sentence about rights stays a promise that is hard to put into due diligence.",
      },
    ],
  },
  {
    title: "Case: we fixed a marketplace offer after a seller claim",
    image: "/news/news-3.png",
    categoryId: 3,
    categoryName: "Our Cases",
    slug: "case-oferta-marketpleysa",
    date: "03.06.2025",
    blocks: [
      {
        component: NewsTitleTextBlock as ComponentType,
        title:
          "A seller challenged a commission hold and an account freeze. The offer described those scenarios too vaguely.",
        text: "We rewrote the platform rules: when an account can be limited, how commission is calculated, the claims process, and what the platform may change unilaterally. We also prepared short wording for support. The point was not to harden the offer for its own sake, but to let moderation explain a decision by pointing to a specific clause instead of “internal rules”. For disputed cases we added response times, a claims channel, and what happens to the money while the account is limited.",
      },
      {
        component: NewsTextBlock as ComponentType,
        text: "In parallel we aligned the offer with the actual interface: checkboxes, notices, and status history. If the product says one thing and the text says another, even a strong offer does not help. We checked whether the seller sees the reason for a freeze, can download a commission report, and gets a notice before withdrawals are limited. Where the interface was silent, we added product fixes. Legal text without those signals still looks like a sudden platform decision, even when it is formally correct.",
      },
      {
        component: NewsTextBlock as ComponentType,
        text: "The claim was closed without court. The real result for the client was not a one-off reply to the seller, but an offer that support and moderation can use every day. After this case the team stopped editing the rules “as needed” in chat and started collecting changes in batches. That lowers the risk that the offer still has the old commission while the cabinet already shows a new one. For a marketplace that is not cosmetics: a gap between the text and the product becomes the next claim’s argument on its own.",
      },
    ],
  },
  {
    title: "Video: 5 mistakes when transferring rights to code and design",
    image: "/news/news2.webp",
    categoryId: 4,
    categoryName: "Video",
    slug: "video-5-oshibok-prava-na-kod-i-dizayn",
    date: "18.04.2025",
    blocks: [
      {
        component: NewsTitleTextBlock as ComponentType,
        title:
          "Why the phrase “everything created belongs to the company” does not save you in a dispute on its own.",
        text: "The video covers five typical mistakes: no specific deliverable, a gap between the contract and the acts, the wrong license model, forgetting the design system, and using a template that does not match actual development. Each mistake is shown as a short story: what the team thought, what they wrote, and what follows if the contractor disappears tomorrow. Design gets its own pass. Mockups, components, and brand files often stay in the contractor’s personal Figma account, even though the contract already says “everything belongs to the client”.",
      },
      {
        component: NewsTextBlock as ComponentType,
        text: "The format is short and visual: founders and product leads can watch it before the first consultation and talk about facts instead of the fear that “we will definitely get burned”. After watching it is easier to gather the source data: where the repo lives, who accepted the stages, which acts exist, who owns the mockups. The consultation then starts with checking the chain, not with translating anxiety into legal language. That saves both time and money, especially before launch, when every day counts.",
      },
      {
        component: NewsTextBlock as ComponentType,
        text: "If after the video it still feels like repo rights are “done the way everyone does it”, that is a reason to check the documents before launch or a round. “The way everyone does it” usually means: a template was downloaded, no act was signed, and the freelancer was paid on an invoice without an IP transfer. That setup lives until someone asks. People ask at fundraising, at a product sale, and in a fight with a contractor. It is better to find the break now than to explain it to the person the deal depends on.",
      },
    ],
  },
];
