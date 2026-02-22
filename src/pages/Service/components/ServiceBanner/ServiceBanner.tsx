import Button from "../../../../components/Button/Button";
import Typography from "../../../../components/Typography/Typography";
import type { ServiceBannerI } from "../../types/service-page.types";
import styles from "./ServiceBanner.module.css";
import cn from "classnames";

function ServiceBanner({ description, buttonText }: ServiceBannerI) {
    return (
        <div className={cn(styles["service-banner"], "block-margin")}>
            <div className={styles["inner"]}>
                <div className={styles["info"]}>
                    <Typography
                        variant="body-l"
                        as={"p"}
                        className={styles["description"]}
                    >
                        <span>[ от себя ] </span> {description}
                    </Typography>
                    <Button variant="fill"> {buttonText} </Button>
                </div>
            </div>
        </div>
    );
}

export default ServiceBanner;
