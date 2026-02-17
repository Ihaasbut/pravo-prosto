import Typography from "../../../../components/Typography/Typography";
import styles from "./Hero.module.css";
import "swiper/swiper.css";

import Button from "../../../../components/Button/Button";
import HeroEmbla from "./HeroEmbla/HeroEmbla";
import type { HeroPropsI } from "../../types/Mocdata";

function Hero({ heroData }: HeroPropsI) {
    return (
        <div className="container">
            <div className={styles["hero"]}>
                <div className="content">
                    <div className={styles["hero-info"]}>
                        <Typography variant="h1" as="h1">
                            [{heroData.title}]
                        </Typography>
                        <Typography variant="text-24" as="p">
                            {heroData.description}
                        </Typography>

                        <Button> {heroData.button} </Button>
                    </div>
                </div>

                <HeroEmbla services={heroData.services} />
            </div>
        </div>
    );
}

export default Hero;
