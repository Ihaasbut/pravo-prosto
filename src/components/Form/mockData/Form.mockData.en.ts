import type { FormI } from "../form.types";

export const formData: FormI = {
    titleForm: "Leave a request",
    input: {
        name: "Your name",
        nameError: "Please enter your name",
        phone: "+7 (999) 999-99-99",
        phoneError: "Please enter your phone number",
        company: "Your company",
        companyError: "Please enter your company",
        description: "Brief task description",
        descriptionError: "Please enter a brief task description",
    },
    buttonText: "Submit",
};