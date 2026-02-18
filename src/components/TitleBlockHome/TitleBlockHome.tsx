import Button from "../Button/Button";
import Typography from "../Typography/Typography";
import styles from "./TitleBlockHome.module.css";
import type { TitleBlockPropsI } from "../../types/TitleBlock.types";

function TitleBlockHome({
    title,
    description,
    buttonText,
    descriptionStyle,
}: TitleBlockPropsI) {
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
                            <Button variant="outline"> {buttonText}</Button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TitleBlockHome;
