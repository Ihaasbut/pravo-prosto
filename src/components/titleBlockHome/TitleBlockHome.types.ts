import type { ReactNode } from "react";
import type { TitleBlockPropsI } from "../../types/titleBlock.types";

export interface TitleBlockHomePropsI extends TitleBlockPropsI {
  onButtonClick?: () => void;
  children?: ReactNode;
}
