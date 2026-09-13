import type { TitleBlockPropsI } from "../../../types/titleBlock.types";
import type { HomeAboutDataI } from "../components/homeAbout/HomeAbout.types";
import type { HomeProcessDataI } from "../components/homeProcess/HomeProcess.types";
import type { HomeRequestDataI } from "../components/homeRequest/HomeRequest.types";
import type { HeroI } from "../components/hero/Hero.types";

export const hero: HeroI = {
  title: "Mathematically accurate legal solutions",
  description:
    "PRAVO PROSTO — a Russian law firm with in-depth expertise in IT, investment transactions, and legal research. We solve multi-level legal tasks and manage complex legal projects for business and private clients. The company's head office is located in the B. Rameev IT Park in Kazan.",
  button: "Consultation",
  serviceKeywords: [
    {
      name: "Contracts",
    },
    {
      name: "Transactions",
    },
    {
      name: "Claims",
    },
    {
      name: "Investments",
    },
    {
      name: "Copyright",
    },
    {
      name: "Audit",
    },
    {
      name: "Reorganization",
    },
    {
      name: "Code Protection",
    },
    {
      name: "Accreditation",
    },
    {
      name: "Legal R&D",
    },
    {
      name: "IT Benefits",
    },
    {
      name: "Biometrics",
    },
    {
      name: "Due Diligence",
    },
    {
      name: "Licensing",
    },
  ],
};

export const about: HomeAboutDataI = {
  title: "Approach",
  description:
    "We join the product team and close legal work so you can use it, not file it away.",
  principles: [
    {
      title: "Product first",
      description:
        "No templates first. We start from the model: SaaS, API, open source, data, tax status — then we write the documents.",
    },
    {
      title: "A usable result",
      description:
        'A contract, position, or deal with a clear effect and named risks. No generic "we handle everything".',
    },
    {
      title: "One track",
      description:
        "IT lawyers and accounting in one loop: contracts, IP, accreditation, and the books.",
    },
  ],
};

export const process: HomeProcessDataI = {
  title: "How we work",
  description:
    "A short cycle: we pin the task, cut what is not needed, and keep the next step obvious.",
  steps: [
    {
      title: "Request",
      description:
        "Describe the task. We jump on a call and set the bounds: what is in, what is out, how long the review takes.",
    },
    {
      title: "Review",
      description:
        "We look at documents, product, and risks. We say what is needed now and what can wait.",
    },
    {
      title: "Plan",
      description:
        "Scope, timing, and format. You know the output and who owns what.",
    },
    {
      title: "Support",
      description:
        "We draft, negotiate, or litigate. You stay in the loop without extra noise.",
    },
  ],
};

export const teamBlock: TitleBlockPropsI = {
  title: "Team",
  description:
    "Lawyers with practice in IT, fintech, and intellectual property. We work as part of your team.",
  buttonText: "More details",
};

export const servicesBlock: TitleBlockPropsI = {
  title: "Services",
  description:
    "Legal and accounting services for IT companies: contracts, transactions, intellectual property, and business support.",
  buttonText: "All services",
};

export const newsBlock: TitleBlockPropsI = {
  title: "News",
  buttonText: "All news",
};

export const request: HomeRequestDataI = {
  title: "Discuss a task",
  description:
    "Tell us what is going on. We will come back with a clear next step — not a generic “consultation on everything”.",
  label: "[ consultation ]",
};
