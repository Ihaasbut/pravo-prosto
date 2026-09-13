import type { MouseEventHandler, ReactNode } from "react";
export interface ButtonPropsI {
  children: ReactNode;
  variant: "fill" | "outline";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}
