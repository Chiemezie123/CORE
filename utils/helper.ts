import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const queryStringToObject = (queryString: string): Record<string, string> => {
  const pairs = queryString.split("&");
  return pairs.reduce(
    (acc, pair) => {
      const [key, value] = pair.split("=");
      if (key) {
        acc[key] = value;
      }
      return acc;
    },
    {} as Record<string, string>,
  );
};