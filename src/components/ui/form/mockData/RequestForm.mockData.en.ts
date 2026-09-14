import type { RequestFormDataI } from "../RequestForm.types";

export const formData: RequestFormDataI = {
  fields: {
    name: {
      placeholder: "Your name",
      error: "Please enter your name",
    },
    phone: {
      placeholder: "+7 (999) 999-99-99",
      error: "Please enter your phone number",
    },
    company: {
      placeholder: "Your company",
      error: "Please enter your company",
    },
    description: {
      placeholder: "Brief task description",
      error: "Please enter a brief task description",
    },
  },
  buttonText: "Submit",
};
