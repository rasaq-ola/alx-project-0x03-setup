import { ReactNode } from "react";

import { ReactNode } from "react";

export interface ButtonProps {
  children?: ReactNode;  // Add this line to allow children
  buttonLabel?: string;  // optional if you use children instead
  buttonSize?: string;
  buttonBackgroundColor?: "red" | "blue" | "orange" | "green";
  action?: () => void;
  onClick?: () => void;  // add if you use onClick prop directly
}

export interface LayoutProps {
  children: ReactNode;
}
