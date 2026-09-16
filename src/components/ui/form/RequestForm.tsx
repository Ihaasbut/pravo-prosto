import { useId } from "react";
import { Controller, useForm } from "react-hook-form";
import { IMaskInput } from "react-imask";

import { useLanguage } from "../../../hooks/use-language";
import Button from "../button/Button";
import {
  REQUEST_FORM_DATA,
  REQUEST_FORM_DEFAULT_VALUES,
} from "./RequestForm.consts";
import type { RequestFormFieldsI } from "./RequestForm.types";

import styles from "./RequestForm.module.css";

const PHONE_MASK = "+{7} (000) 000-00-00";

function isFullPhone(value: string) {
  return value.replace(/\D/g, "").length === 11;
}

function FieldError({ message }: { message?: string }) {
  return message ? <span className={styles.error}>{message}</span> : null;
}

function RequestForm() {
  const { language } = useLanguage();
  const formId = useId();
  const { fields, buttonText } = REQUEST_FORM_DATA[language];
  const {
    name: nameField,
    phone: phoneField,
    company: companyField,
    description: descriptionField,
  } = fields;
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<RequestFormFieldsI>({
    defaultValues: REQUEST_FORM_DEFAULT_VALUES,
  });

  const nameId = `${formId}-name`;
  const phoneId = `${formId}-phone`;
  const companyId = `${formId}-company`;
  const descriptionId = `${formId}-description`;

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(() => reset())}
      noValidate
    >
      <div className={styles.field}>
        <label className={styles.visuallyHidden} htmlFor={nameId}>
          {nameField.placeholder}
        </label>
        <input
          id={nameId}
          type="text"
          placeholder={nameField.placeholder}
          autoComplete="name"
          {...register("name", { required: nameField.error })}
        />
        <FieldError message={errors.name?.message} />
      </div>

      <div className={styles.field}>
        <label className={styles.visuallyHidden} htmlFor={phoneId}>
          {phoneField.placeholder}
        </label>
        <Controller
          name="phone"
          control={control}
          rules={{
            required: phoneField.error,
            validate: (value) => isFullPhone(value) || phoneField.error,
          }}
          render={({ field }) => (
            <IMaskInput
              id={phoneId}
              name={field.name}
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              mask={PHONE_MASK}
              value={field.value}
              placeholder={phoneField.placeholder}
              onAccept={(value) => field.onChange(value)}
              onBlur={field.onBlur}
              inputRef={field.ref}
            />
          )}
        />
        <FieldError message={errors.phone?.message} />
      </div>

      <div className={styles.field}>
        <label className={styles.visuallyHidden} htmlFor={companyId}>
          {companyField.placeholder}
        </label>
        <input
          id={companyId}
          type="text"
          placeholder={companyField.placeholder}
          autoComplete="organization"
          {...register("company", { required: companyField.error })}
        />
        <FieldError message={errors.company?.message} />
      </div>

      <div className={styles.field}>
        <label className={styles.visuallyHidden} htmlFor={descriptionId}>
          {descriptionField.placeholder}
        </label>
        <textarea
          id={descriptionId}
          placeholder={descriptionField.placeholder}
          {...register("description", { required: descriptionField.error })}
        />
        <FieldError message={errors.description?.message} />
      </div>

      <Button type="submit" variant="fill" className={styles.button}>
        {buttonText}
      </Button>
    </form>
  );
}

export default RequestForm;
