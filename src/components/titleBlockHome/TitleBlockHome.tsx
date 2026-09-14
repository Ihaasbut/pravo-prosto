import Button from "../ui/button/Button";
import Typography from "../ui/typography/Typography";
import styles from "./TitleBlockHome.module.css";
import type { TitleBlockHomePropsI } from "./TitleBlockHome.types";
import { useModal } from "../../hooks/use-modal";

function TitleBlockHome({
  title,
  description,
  buttonText,
  descriptionStyle,
  onButtonClick,
  children,
}: TitleBlockHomePropsI) {
  const { openModal } = useModal();
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
                  as={"p"}
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

export default TitleBlockHome;
