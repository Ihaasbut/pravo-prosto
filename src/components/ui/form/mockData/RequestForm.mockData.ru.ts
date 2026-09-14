import type { RequestFormDataI } from "../RequestForm.types";

export const formData: RequestFormDataI = {
  fields: {
    name: {
      placeholder: "Ваше имя",
      error: "Введите Ваше имя",
    },
    phone: {
      placeholder: "+7 (999) 999-99-99",
      error: "Введите Ваш телефон",
    },
    company: {
      placeholder: "Ваша компания",
      error: "Введите Вашу компанию",
    },
    description: {
      placeholder: "Короткое описание задачи",
      error: "Введите короткое описание задачи",
    },
  },
  buttonText: "Отправить",
};
