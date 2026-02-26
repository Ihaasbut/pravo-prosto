import { useState } from "react";
import Typography from "../../../../components/Typography/Typography";
import styles from "./TeamPerson.module.css";
import cn from "classnames";
import type { TeamPersonPropsI } from "../../types/team-page.types";

function TeamPerson({ props }: TeamPersonPropsI) {
    const [isOpenInfo, setIsOpen] = useState<boolean>(false);
    const { image, dataPerson, post, study, area, experience, comment } = props;

    const onToggleInfo = () => {
        setIsOpen(!isOpenInfo);
    };

    return (
        <div className={styles["team-person"]}>
            <div className={styles["image-and-about"]}>
                <div className={styles["image"]}>
                    <img src={image} alt="" />
                </div>
                <div
                    className={cn(styles["about"], {
                        [styles["active"]]: isOpenInfo,
                    })}
                >
                    <Typography variant="body-xs" as={"p"}>
                        <b> {study.title} </b> {study.description}
                    </Typography>
                    <Typography variant="body-xs" as={"p"}>
                        <b> {experience.title} </b>
                        {experience.description}
                    </Typography>
                    <Typography variant="body-xs" as={"p"}>
                        <b> {area.title} </b>
                        {area.description}
                    </Typography>
                    <Typography variant="body-xs" as={"p"} className={styles["comment"]}>
                        {comment}
                    </Typography>
                </div>
            </div>

            <div className={styles["bottom"]}>
                <Typography
                    variant="body-l"
                    as={"p"}
                    className={styles["name-female"]}
                >
                    {dataPerson}
                </Typography>
                <Typography variant="body-m" as={"p"}>
                    <b>{post}</b>
                </Typography>
                <button className={styles["button-team"]} onClick={onToggleInfo}> Подробнее </button>
            </div>
        </div>
    );
}

export default TeamPerson;
