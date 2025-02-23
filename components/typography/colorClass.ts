// colorClasses.ts
import { tailwindColors } from './tailwindColors';

// Generate the colorClasses object
const colorClasses = Object.entries(tailwindColors).reduce((acc, [colorName, shades]) => {
  Object.keys(shades).forEach((shade) => {
    acc[`${colorName}-${shade}`] = `text-${colorName}-${shade}`;
  });
  return acc;
}, {} as Record<string, string>);

// Add additional classes for "text-default", "text-light", "white", and "black"
colorClasses["text-default"] = "text-text-default";
colorClasses["text-light"] = "text-text-light";
colorClasses["white"] = "text-white";
colorClasses["black"] = "text-black";

export default colorClasses;