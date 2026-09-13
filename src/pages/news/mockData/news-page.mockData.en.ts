import type { TitleBlockPropsI } from "../../../types/titleBlock.types";
import type { HomeRequestDataI } from "../../home/components/homeRequest/HomeRequest.types";
import type { ServicesForWhomDataI } from "../../services/components/servicesForWhom/ServicesForWhom.types";
import type { NewsCategoryI } from "../News.types";

export const headerPage: TitleBlockPropsI = {
  title: "News",
  description:
    "Contract reviews, cases, and short notes for IT teams — without legalese.",
};

export const newsCategories: NewsCategoryI[] = [
  {
    id: 1,
    title: "All",
  },
  {
    id: 2,
    title: "Our News",
  },
  {
    id: 3,
    title: "Our Cases",
  },
  {
    id: 4,
    title: "Video",
  },
  {
    id: 5,
    title: "Useful",
  },
];

export const topics: ServicesForWhomDataI = {
  title: "What we write about",
  description:
    "Not a digest of “all law”, but what an IT team meets at work: offers, NDAs, SLAs, rights to code.",
  items: [
    {
      title: "Our news",
      description:
        "The office, talks, new formats. What is happening in the firm and what you can use.",
    },
    {
      title: "Cases",
      description:
        "A specific task and what we did: an enterprise deal, a seed round, a platform offer. No names if we cannot name them.",
    },
    {
      title: "Video",
      description:
        "Short document reviews you can show a founder or sales before a consultation.",
    },
    {
      title: "Useful",
      description:
        "How to read an invoice-offer, which NDA clauses work, when an SLA is already needed. Checklists, not lectures.",
    },
  ],
};

export const request: HomeRequestDataI = {
  title: "A similar task?",
  description:
    "Send a document or describe the situation in a few lines. We will say what to do next — or that it is too early.",
  label: "[ consultation ]",
};
