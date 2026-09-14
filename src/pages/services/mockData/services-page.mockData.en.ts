import type { TitleBlockPropsI } from "../../../types/titleBlock.types";
import type { RequestSectionDataI } from "../../../components/sections/requestSection/RequestSection.types";
import type { ServicesForWhomDataI } from "../components/servicesForWhom/ServicesForWhom.types";

export const headerPage: TitleBlockPropsI = {
  title: "Legal and accounting services for IT",
  description: "We are not just lawyers. We are part of your IT team.",
  buttonText: "Consultation",
};

export const audiences: ServicesForWhomDataI = {
  title: "Who it is for",
  description:
    "We work with IT businesses that need contracts, tax status, IP, and deals without a translation from legal into human.",
  items: [
    {
      title: "Startups and founders",
      description:
        "A round, options, team contracts, the first serious customer. So due diligence does not start from an empty chain of title.",
    },
    {
      title: "Product companies",
      description:
        "SaaS, licences, data, accreditation. Documents that match how the product is actually sold.",
    },
    {
      title: "Studios and outsourcing",
      description:
        "Delivery contracts, SLA, transfer of code, scope disputes. So the result belongs to you, not to “we’ll see”.",
    },
    {
      title: "Fintech, AI, data",
      description:
        "Unusual models, biometrics, generated content. A risk map first, then papers you can show a regulator and a customer.",
    },
  ],
};

export const request: RequestSectionDataI = {
  title: "Cannot see the right contour?",
  description:
    "Describe the task in your own words. We will say which service it is — or tell you if it is not for us.",
  label: "[ consultation ]",
};
