import Button from "../Button/Button";
import Typography from "../Typography/Typography";
import styles from "./TitleBlock.module.css";

export interface TitleBlockPropsI {
    title: string;
    description?: string;
    buttonText?: string;
    classname?: string;
}

function TitleBlock({ title, description, buttonText, classname }: TitleBlockPropsI) {
    return (
        <div className={styles["title-block"]}>
            <div className="container">
                <div className="content">
                    <div className={styles["title-block-info"]}>
                        <div className={styles["title-block-text"]}>
                            <Typography variant="h2" as={"h2"}>
                                {title}
                            </Typography>
                            {description && (
                                <Typography variant="text-20" as={"p"} className={classname}>
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

export default TitleBlock;
