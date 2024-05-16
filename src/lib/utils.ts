import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function truncateAddress(address: string) {
  const first = address?.substring(0, 5);
  const last = address?.substring(address.length - 5, address.length);
  return `${first}...${last}`;
}
