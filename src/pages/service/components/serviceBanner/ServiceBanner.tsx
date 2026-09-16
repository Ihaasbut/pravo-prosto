import cn from "classnames";

import Button from "../../../../components/ui/button/Button";
import Typography from "../../../../components/ui/typography/Typography";
import { useModal } from "../../../../hooks/use-modal";
import type { ServiceBannerPropsI } from "./ServiceBanner.types";

import styles from "./ServiceBanner.module.css";

function ServiceBanner({ data }: ServiceBannerPropsI) {
  const { description, buttonText, labelText } = data;
  const { openModal } = useModal();

  return (
    <section className={cn(styles.banner, "block-margin")}>
      <div className={styles.inner}>
        <div className={styles.info}>
          <Typography variant="body-l" className={styles.description}>
            <span>{labelText} </span> {description}
          </Typography>
          <Button variant="fill" onClick={openModal}>
            {buttonText}{" "}
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ServiceBanner;
