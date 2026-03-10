import Button from "../../../../components/Button/Button";
import Typography from "../../../../components/Typography/Typography";
import { useModal } from "../../../../hooks/use-modal";
import type { ServiceBannerI } from "../../types/service-page.types";
import styles from "./ServiceBanner.module.css";
import cn from "classnames";

function ServiceBanner({ description, buttonText }: ServiceBannerI) {
    const { onHandleClickModal } = useModal();
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
                    <Button variant="fill" onClick={onHandleClickModal}>
                        {" "}
                        {buttonText}{" "}
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default ServiceBanner;
