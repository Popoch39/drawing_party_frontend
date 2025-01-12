import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sleep = (time: number): Promise<unknown> => {
  return new Promise((resolve) => setTimeout(resolve, time));
};
