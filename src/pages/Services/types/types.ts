import type { TitleBlockPropsI } from "../../../components/TitleBlock/TitleBlock";
import type { ServicesDataI } from "../../../types/mockData";

export interface Test {
    pageTitleData: TitleBlockPropsI;
}

export interface PageServicesFullDataI {
    commonServicesData: ServicesDataI;
    pageServicesData: Test;
}

// const data: PageServicesDataI = {
//           commonServicesData: module,
//           // commonServicesData: module,
//         }
