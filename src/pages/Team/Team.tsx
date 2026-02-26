import { useEffect, useState } from "react";
import TitleBlockGrey from "../../components/TitleBlockPrimary/TitleBlockPrimary";
import styles from "./Team.module.css";
import TeamPersons from "./components/TeamPersons/TeamPersons";
import type { PageTeamFullDataI } from "./types/team-page.types";
import { useLanguage } from "../../hooks/use-language";

function Team() {
    const [pageData, setPageData] = useState<PageTeamFullDataI | null>(null);
    const { language } = useLanguage();

    useEffect(() => {
        (async () => {
            const teamModule = await import(
                `../../mockData/team/Team.mockData.${language}.ts`
            );

            const pageModule = await import(
                `../Team/mockData/team-page.mockData.${language}.ts`
            );

            const fullData: PageTeamFullDataI = {
                team: teamModule.team,
                page: pageModule.pageTeam,
            };

            setPageData(fullData);
            console.log(fullData.team)
        })();
    }, [language]);

    if (!pageData) {
        return "Данные не пришли";
    }

    return (
        <div className={styles["team"]}>
            <TitleBlockGrey title={pageData.page.title} buttonText={pageData.page.buttonText} />

            <TeamPersons teamData={pageData.team}/>
        </div>
    );
}

export default Team;
