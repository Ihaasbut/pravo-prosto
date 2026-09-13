import Typography from "../../../../components/typography/Typography";
import styles from "./Hero.module.css";
import "swiper/swiper.css";

import Button from "../../../../components/button/Button";
import HeroEmbla from "./heroEmbla/HeroEmbla";
import type { HeroPropsI } from "./Hero.types";
import { useModal } from "../../../../hooks/use-modal";

function Hero({ hero }: HeroPropsI) {
    const { openModal } = useModal();

    return (
        <div className="container">
            <div className={styles.hero}>
                <div className="content">
                    <div className={styles.inner}>
                        <Typography variant="h1" as="h1">
                            [{hero.title}]
                        </Typography>
                        <Typography variant="body-l" as="p">
                            {hero.description}
                        </Typography>

                        <Button variant="fill" onClick={openModal}>
                            {hero.button}{" "}
                        </Button>
                    </div>
                </div>

                <HeroEmbla serviceKeywords={hero.serviceKeywords} />
            </div>
        </div>
    );
}

export default Hero;
