import type { MouseEventHandler } from "react";

export interface CrossPropsI {
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}
