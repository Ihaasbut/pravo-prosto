import type { ComponentType } from "react";
import type { NewI } from "../../types/news.types";
import NewsTitleTextBlock from "../../pages/NewsOne/components/NewsTitleTextBlock/NewsTitleTextBlock";
import NewsTextBlock from "../../pages/NewsOne/components/NewsTextBlock/NewsTextBlock";

export const news: NewI[] = [
    {
        title: "We launched a rapid contract audit for SaaS companies",
        image: "/news/newTest.png",
        categoryId: 2,
        categoryName: "Our News",
        slug: "ekspress-audit-dogovorov-dlya-saas",
        date: "18.04.2025",
        blocks: [
            {
                component: NewsTitleTextBlock as ComponentType,
                title: "The new format helps product teams identify weak points in their offer, SLA, NDA, and data processing documents within five working days.",
                text: "We designed this service for companies that already sell a product but have not yet systematized their legal document stack. The result is a risk map, a prioritized list of fixes, and a practical roadmap for what should be updated before talking to larger customers.",
            },
            {
                component: NewsTextBlock as ComponentType,
                text: "The format is especially relevant for B2B SaaS products, marketplaces, and service studios, where document versions often grow chaotically and start slowing down procurement, security review, and contract approval.",
            },
            {
                component: NewsTextBlock as ComponentType,
                text: "For the demo version of the website, this article shows the tone we want: modern, business-oriented, and focused on outcomes rather than legal jargon.",
            },
        ],
    },
    {
        title: "Case: we prepared a B2B SaaS company for enterprise negotiations",
        image: "/news/news-ilana.png",
        categoryId: 3,
        categoryName: "Our Cases",
        slug: "case-b2b-saas-enterprise-negotiation",
        date: "02.04.2025",
        blocks: [
            {
                component: NewsTitleTextBlock as ComponentType,
                title: "The client was entering a major deal with an industrial holding and received a long list of markups to the master agreement, SOW, and SLA.",
                text: "We reviewed the full document set and rewrote the sections on service levels, liability, caps on damages, data processing, and ownership of deliverables. We also prepared a negotiation package so the commercial team could respond quickly without waiting for another legal round.",
            },
            {
                component: NewsTextBlock as ComponentType,
                text: "The buyer's approval process included procurement, security, internal legal, and IT. Instead of abstract comments, we delivered clean draft wording, a risk table, and short response language for each disputed clause.",
            },
            {
                component: NewsTextBlock as ComponentType,
                text: "As a result, the client moved forward with the pilot without giving up key IP protections and without accepting disproportionate liability for indirect losses or downtime on the customer's side.",
            },
        ],
    },
    {
        title: "What to review in a developer agreement before product launch",
        image: "/news/news-3.png",
        categoryId: 5,
        categoryName: "Useful",
        slug: "chto-proverit-v-dogovore-s-razrabotchikom",
        date: "21.03.2025",
        blocks: [
            {
                component: NewsTitleTextBlock as ComponentType,
                title: "Before launch, the biggest risks are often hidden not in the codebase, but in how the relationship with the team and contractors is documented.",
                text: "The minimum checklist covers four areas: who transfers rights to code and design, how deliverables are accepted, what happens with bug fixes after handoff, and how access to repositories, analytics, and infrastructure is controlled.",
            },
            {
                component: NewsTextBlock as ComponentType,
                text: "If the agreement does not define acceptance criteria and the scope of deliverables, disputes usually shift into unclear expectations. And if IP transfer is poorly documented, the issue often resurfaces later during fundraising, due diligence, or a product sale.",
            },
            {
                component: NewsTextBlock as ComponentType,
                text: "This article was written in a practical tone on purpose: short, useful, and specific enough to look credible in a portfolio presentation for an employer or partner.",
            },
        ],
    },
    {
        title: "We spoke at a roundtable on AI, data, and digital service liability",
        image: "/news/news-4.webp",
        categoryId: 2,
        slug: "roundtable-ai-data-liability",
        categoryName: "Our News",
        date: "11.03.2025",
        blocks: [
            {
                component: NewsTitleTextBlock as ComponentType,
                title: "The discussion focused on how business liability changes when products add recommendation systems, generative features, and automated decision-making.",
                text: "Our team reviewed practical scenarios around user flows, consent, transparency, allocation of roles between the customer, the integrator, and the model provider, and the documents companies should already be updating today.",
            },
            {
                component: NewsTextBlock as ComponentType,
                text: "A separate part of the discussion covered communication with product teams. We showed why legal should not act as a blocker in AI projects, but as a participant in designing the user journey, data policy, and incident response process.",
            },
            {
                component: NewsTextBlock as ComponentType,
                text: "For a demo portfolio, this kind of story works well because it highlights technology-focused expertise and shows that the firm understands real digital workflows, not only template agreements.",
            },
        ],
    },
    {
        title: "Video: 5 mistakes when transferring rights to code and design",
        image: "/news/news2.webp",
        categoryId: 4,
        categoryName: "Video",
        slug: "video-5-oshibok-prava-na-kod-i-dizayn",
        date: "26.02.2025",
        blocks: [
            {
                component: NewsTitleTextBlock as ComponentType,
                title: "We prepared a short video for founders and product teams explaining why the phrase “everything created belongs to the company” is not enough on its own in a real dispute.",
                text: "The video covers five common mistakes: vague deliverables, a gap between the contract and the acceptance documents, the wrong licensing model, ignoring rights to the design system, and relying on templates that do not match the actual development process.",
            },
            {
                component: NewsTextBlock as ComponentType,
                text: "We intentionally packaged the material in a visual and simple way so it can also work as top-of-funnel content: the video answers basic questions and demonstrates expertise before the first call.",
            },
            {
                component: NewsTextBlock as ComponentType,
                text: "For the news page demo, this adds variety to the feed and makes the content mix feel more realistic: company updates, case studies, and useful educational materials.",
            },
        ],
    },
    {
        title: "Case: we assembled the legal package for an IT startup seed round",
        image: "/news/news3.png",
        categoryId: 3,
        categoryName: "Our Cases",
        slug: "seed-round-legal-package-case",
        date: "10.02.2025",
        blocks: [
            {
                component: NewsTitleTextBlock as ComponentType,
                title: "Before the financing round, the founders needed to clean up internal arrangements and prepare the documents investors usually request at the first stage.",
                text: "We updated the founder framework, clarified roles and vesting, consolidated IP transfer documents, and prepared comments for the data room so the team would not have to draft key answers under deadline pressure.",
            },
            {
                component: NewsTextBlock as ComponentType,
                text: "The goal was not to generate more paperwork, but to remove obvious red flags: undocumented IP transfer, oral agreements between founders, unclear contractor payments, and missing product-related documentation.",
            },
            {
                component: NewsTextBlock as ComponentType,
                text: "The result was a cleaner legal story for investor meetings and a document system the startup could keep using as the business scaled.",
            },
        ],
    },
];
