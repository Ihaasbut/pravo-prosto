import { useLanguage } from "../../../hooks/use-language";
import { useModal } from "../../../hooks/use-modal";
import Backdrop from "../../ui/backdrop/Backdrop";
import Cross from "../../ui/cross/Cross";
import RequestForm from "../../ui/form/RequestForm";
import Typography from "../../ui/typography/Typography";
import { MODAL_FORM_TITLES } from "./ModalForm.consts";

import styles from "./ModalForm.module.css";

function ModalForm() {
  const { language } = useLanguage();
  const { isOpenModal, closeModal } = useModal();

  if (!isOpenModal) {
    return null;
  }

  return (
    <div className={styles.modal}>
      <div className={styles.wrapper}>
        <Typography variant="h5" as="h5">
          {MODAL_FORM_TITLES[language]}
        </Typography>

        <RequestForm />
      </div>
      <Cross className={styles.close} onClick={closeModal} />
      <Backdrop onClose={closeModal} isOpened={isOpenModal} />
    </div>
  );
}

export default ModalForm;
