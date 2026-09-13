export interface InputsI {
    name: string;
    nameError: string;
    phone: string;
    phoneError: string;
    company: string;
    companyError: string;
    description: string;
    descriptionError: string;
}

export interface FormI {
    titleForm: string;
    input: InputsI;
    buttonText: string;
}
