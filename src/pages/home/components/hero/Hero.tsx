import Button from "../../../../components/ui/button/Button";
import Typography from "../../../../components/ui/typography/Typography";
import { useModal } from "../../../../hooks/use-modal";
import type { HeroPropsI } from "./Hero.types";
import HeroEmbla from "./heroEmbla/HeroEmbla";

import "swiper/swiper.css";
import styles from "./Hero.module.css";

function Hero({ data }: HeroPropsI) {
  const { openModal } = useModal();

  return (
    <div className="container">
      <section className={styles.hero}>
        <div className="content">
          <div className={styles.inner}>
            <Typography variant="h1" as="h1">
              [{data.title}]
            </Typography>
            <Typography variant="body-l">
              {data.description}
            </Typography>

            <Button variant="fill" onClick={openModal}>
              {data.button}
            </Button>
          </div>
        </div>

        <HeroEmbla serviceKeywords={data.serviceKeywords} />
      </section>
    </div>
  );
}

export default Hero;
