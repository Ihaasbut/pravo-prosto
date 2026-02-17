import { Link } from "react-router-dom";
import Typography from "../../../components/Typography/Typography";
import type { ServiceCardI } from "../../../types/mockData";
import styles from "./ServicesBlock.module.css";

interface ServicesBlockPropsI {
    area: string;
    serviceCards: ServiceCardI[];
}

function ServicesBlock({ serviceCards, area }: ServicesBlockPropsI) {
    return (
        <div className={styles["services-area"]}>
            <Typography
                variant="h3"
                as={"h3"}
                className={styles["service-title"]}
            >
                {area}
            </Typography>
            <div className={styles["services-theme-list"]}>
                {serviceCards.map((el) => (
                    <Link to={el.slug} className={styles["services-theme-list-item"]}>
                        <Typography
                            variant="text-24"
                            as={"p"}
                            className={styles["services-theme-list-item-title"]}
                        >
                            {el.title}
                        </Typography>
                        {el.aboutList.map((item) => (
                            <Typography
                                variant="text-16"
                                as={"p"}
                                className={
                                    styles["services-theme-list-item-about"]
                                }
                            >
                                - {item}
                            </Typography>
                        ))}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default ServicesBlock;
