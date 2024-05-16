import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { TRUNCATED_MAX_CHARS_LENGTH } from "./constants";
import { toast } from "@/components/ui/use-toast";

/** merge css class values into one
 * @param inputs - classnames
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** shortens an address and returns the first and last few characters
 * @param address - address to be truncated
 * eg 0x7f3f2cbd27c283396a71d835a565417167e4c7f566ab0d7d628079578ddf8218 = 0x7f3...218
 */
export function truncateAddress(address: string) {
  const first = address.substring(0, TRUNCATED_MAX_CHARS_LENGTH);
  const last = address.substring(
    address.length - TRUNCATED_MAX_CHARS_LENGTH,
    address.length,
  );
  return `${first}...${last}`;
}

/** copies text to clipboard and shows a toast after
 * @param text - text to be copied
 */
export function copyTextToClipboard(text: string) {
  navigator.clipboard.writeText(text);
  toast({
    title: "Copied!",
  });
}
