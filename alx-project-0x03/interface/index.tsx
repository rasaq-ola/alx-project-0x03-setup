import { ReactNode } from "react";

export interface ButtonProps {
  children?: ReactNode;  
  buttonLabel?: string; 
  buttonSize?: string;
  buttonBackgroundColor?: "red" | "blue" | "orange" | "green";
  action?: () => void;
  onClick?: () => void; 
}

export interface LayoutProps {
  children: ReactNode;
}

export interface PageRouteProps {
  path: string;
  label: string;
}
