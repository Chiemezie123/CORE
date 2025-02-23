import { JSX } from "react";
import { tailwindColors } from './tailwindColors';
// Generate the color keys
type ColorKeys = keyof typeof tailwindColors;
type ShadeKeys = '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '950';

// Create the TypographyColors type
export type TypographyColors =
  | `${ColorKeys}-${ShadeKeys}` // e.g., "cod-gray-50", "black-100"
  | "text-default"
  | "text-light"

  
export const variantMapping = {
    "h-xxl": "h1",
    "h-xl": "h2",
    "h-l": "h3",
    "h-m": "h4",
    "h-s": "h5",
    "h-xs": "h6",
    "p-xxl": "p",
    "p-xl": "p",
    "p-l": "p",
    "p-m": "p",
    "p-s": "p",
    "c-xxl": "h3",
    "c-xl": "h4",
    "c-l": "h5",
    "c-m": "p",
    "c-s": "h6",
    span: "span",
    div: "div",
  };
  
  export type TypographyVariant = keyof typeof variantMapping;
  

  export type TypographyAlign =
    | "start"
    | "end"
    | "left"
    | "right"
    | "center"
    | "justify";
  
  export type TypographyFontWeight =
    | "thin"
    | "extralight"
    | "light"
    | "regular"
    | "medium"
    | "semibold"
    | "bold"
    | "black";
  
  export type TypographyFont = "Satoshi";
  
  export interface TypographyProps
    extends React.HTMLAttributes<HTMLOrSVGElement> {
    tag?: keyof JSX.IntrinsicElements;
    variant?: TypographyVariant;
    color?: TypographyColors;
    fontWeight?: TypographyFontWeight;
    gutterBottom?: boolean;
    align?: TypographyAlign;
    noWrap?: boolean;
    underline?: "none" | "always" | "hover";
    customClassName?: string;
    children?: React.ReactNode;
    font?: TypographyFont;
  }
  