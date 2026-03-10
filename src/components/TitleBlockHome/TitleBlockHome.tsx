import Button from "../Button/Button";
import Typography from "../Typography/Typography";
import styles from "./TitleBlockHome.module.css";
import type { TitleBlockPropsI } from "../../types/titleBlock.types";
import { useModal } from "../../hooks/use-modal";

function TitleBlockHome({
    title,
    description,
    buttonText,
    descriptionStyle,
}: TitleBlockPropsI) {
    const { onHandleClickModal } = useModal()
    return (
        <div className={styles["title-block"]}>
            <div className="container">
                <div className="content">
                    <div className={styles["inner"]}>
                        <div className={styles["text-group"]}>
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
                        {buttonText && (
                            <Button variant="outline" onClick={onHandleClickModal}> {buttonText}</Button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TitleBlockHome;
