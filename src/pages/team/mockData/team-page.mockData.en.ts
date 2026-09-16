import type { PageTeamI } from "../Team.types";

export const pageTeam: PageTeamI = {
  titleBlock: {
    title: "Team",
    description:
      "Lawyers with practice in IT, fintech, and intellectual property. We work as part of your team — from contracts to disputes.",
  },
  process: {
    titleBlock: {
      title: "How we work with a client",
      description:
        "We do not split the job into “the legal part” and your headache. We take the contour and run it to a clear next step.",
    },
    steps: [
      {
        title: "The task, not the title",
        description:
          "Write what is happening. You do not need to guess “which lawyer you need” — we will see it from the facts.",
      },
      {
        title: "Materials first",
        description:
          "We look at the contract, the product, and the deadline. Then we say what can be closed now and what can wait.",
      },
      {
        title: "One owner",
        description:
          "One lawyer leads and brings colleagues in by contour: IP, data, a dispute.",
      },
      {
        title: "Files that live",
        description:
          "You get a document and a rule for how to use it. Not a folder “just in case”.",
      },
    ],
  },
  request: {
    title: "Talk to the team",
    description:
      "Write it in your own words. We will say who will join and what to send — not a general consultation about everything.",
    label: "[ consultation ]",
  },
};
