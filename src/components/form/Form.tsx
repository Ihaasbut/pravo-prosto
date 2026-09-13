import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { useModal } from "../../hooks/use-modal";
import Button from "../button/Button";
import Overlay from "../overlay/Overlay";
import Typography from "../typography/Typography";
import styles from "./Form.module.css";
import { IMaskInput } from "react-imask";
import type { FormI, FormPropsI, InputsI } from "./Form.types";
import { useEffect, useState } from "react";
import { useLanguage } from "../../hooks/use-language";

function Form({ variant = "modal" }: FormPropsI) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<InputsI>({ mode: "onSubmit" });

  const onSubmit: SubmitHandler<InputsI> = () => {
    reset();
  };
  const { isOpenModal, closeModal } = useModal();

  const [formData, setFormData] = useState<FormI | null>(null);
  const { language } = useLanguage();

  useEffect(() => {
    (async () => {
      const formModule = await import(
        `./mockData/Form.mockData.${language}.ts`
      );

      setFormData(formModule.formData);
    })();
  }, [language]);

  useEffect(() => {
    if (variant === "modal" && !isOpenModal) {
      reset();
    }
  }, [isOpenModal, reset, variant]);

  if (!formData) {
    return null;
  }

  const fields = (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder={formData.input.name}
        autoComplete="name"
        {...register("name", {
          required: `${formData.input.nameError}`,
        })}
      />
      {errors.name && <span>{errors.name.message}</span>}
      <Controller
        name="phone"
        control={control}
        rules={{
          required: `${formData.input.phoneError}`,
          validate: (value) =>
            value.replace(/\D/g, "").length === 11 ||
            `${formData.input.phoneError}`,
        }}
        render={({ field }) => (
          <IMaskInput
            mask="+{7} (000) 000-00-00"
            value={field.value || ""}
            placeholder={formData.input.phone}
            onAccept={(value) => field.onChange(value)}
            onBlur={field.onBlur}
            inputRef={field.ref}
          />
        )}
      />
      {errors.phone && <span>{errors.phone.message}</span>}
      <input
        type="text"
        placeholder={formData.input.company}
        autoComplete="organization"
        {...register("company", {
          required: `${formData.input.companyError}`,
        })}
      />
      {errors.company && <span>{errors.company.message}</span>}
      <textarea
        placeholder={formData.input.description}
        {...register("description", {
          required: `${formData.input.descriptionError}`,
        })}
      />
      {errors.description && <span>{errors.description.message}</span>}
      <Button variant="fill" className={styles.button}>
        {formData.buttonText}
      </Button>
    </form>
  );

  if (variant === "inline") {
    return <div className={styles.inline}>{fields}</div>;
  }

  return (
    <>
      {isOpenModal && (
        <div className={styles.modal}>
          <div className={styles.wrapper}>
            <div className={styles.title}>
              <Typography variant="h5" as={"h5"}>
                {formData.titleForm}
              </Typography>
            </div>
            {fields}
          </div>
          <div className={styles.closeWrapper}>
            <button className={styles.close} onClick={closeModal}>
              <div className={styles.left}>[</div>X
              <div className={styles.right}>]</div>
            </button>
          </div>

          <Overlay
            onClosedOverlay={closeModal}
            isOpened={isOpenModal}
            variant="dark"
          />
        </div>
      )}
    </>
  );
}

export default Form;
