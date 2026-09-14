export interface RequestFormFieldsI {
  name: string;
  phone: string;
  company: string;
  description: string;
}

export interface RequestFormFieldDataI {
  placeholder: string;
  error: string;
}

export type RequestFormFieldsDataI = Record<
  keyof RequestFormFieldsI,
  RequestFormFieldDataI
>;

export interface RequestFormDataI {
  buttonText: string;
  fields: RequestFormFieldsDataI;
}
