import styles from "./TeamPersons.module.css";
import cn from "classnames";
import type { TeamPersonI, TeamPersonsI } from "../../../../types/team.types";
import TeamPerson from "../TeamPerson/TeamPerson";
import { Swiper, SwiperSlide } from "swiper/react";

function TeamPersons({ teamData }: TeamPersonsI) {
    return (
        <div className="container block-margin">
            <div className="content">
                <div
                    className={cn(styles["team-persons"], styles["is-dekstop"])}
                >
                    {teamData.map((person: TeamPersonI) => (
                        <TeamPerson props={person} />
                    ))}
                </div>

                <div className={styles["is-mobile"]}>
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={1.2}
                        breakpoints={{
                            700: {
                                slidesPerView: 2.1,
                            },
                            500: {
                                slidesPerView: 1.6,
                            },
                            320: {
                                slidesPerView: 1.1,
                            },
                        }}
                    >
                        {teamData.map((person: TeamPersonI) => (
                            <SwiperSlide>
                                {" "}
                                <TeamPerson props={person} />{" "}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default TeamPersons;
