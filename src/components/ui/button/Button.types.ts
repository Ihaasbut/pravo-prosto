import type { MouseEventHandler, ReactNode } from "react";

export type ButtonVariant = "fill" | "outline";

export interface ButtonPropsI {
  children: ReactNode;
  variant: ButtonVariant;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}
