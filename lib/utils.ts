import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind class names, resolving conflicting utility classes
 * (e.g. "px-2" vs "px-4") in favour of the last one supplied.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createWhatsAppUrl(phoneNumber: string, message?: string) {
  const digits = phoneNumber.replace(/\D/g, "");
  const url = new URL(`https://wa.me/${digits}`);

  if (message) {
    url.searchParams.set("text", message);
  }

  return url.toString();
}
