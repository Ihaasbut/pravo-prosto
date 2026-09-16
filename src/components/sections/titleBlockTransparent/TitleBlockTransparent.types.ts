import type { ReactNode } from "react";

import type { TitleBlockI } from "../../../types/titleBlock.types";

export interface TitleBlockTransparentPropsI {
  data: TitleBlockI;
  onButtonClick?: () => void;
  children?: ReactNode;
}
