import { useModal } from "../../../hooks/use-modal";
import Button from "../../ui/button/Button";
import Typography from "../../ui/typography/Typography";
import type { TitleBlockTransparentPropsI } from "./TitleBlockTransparent.types";

import styles from "./TitleBlockTransparent.module.css";

function TitleBlockTransparent({
  data,
  onButtonClick,
  children,
}: TitleBlockTransparentPropsI) {
  const { openModal } = useModal();
  const { title, description, buttonText, descriptionStyle } = data;

  return (
    <div className={styles.titleBlock}>
      <div className="container">
        <div className="content">
          <div className={styles.inner}>
            <div className={styles.textGroup}>
              <Typography variant="h2" as={"h2"}>
                {title}
              </Typography>
              {description && (
                <Typography
                  variant="body-m"
                  className={descriptionStyle}
                >
                  {description}
                </Typography>
              )}
            </div>
            {children}
            {buttonText && (
              <Button variant="outline" onClick={onButtonClick ?? openModal}>
                {buttonText}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TitleBlockTransparent;
