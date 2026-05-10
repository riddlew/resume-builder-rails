import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

export function formatSignedNumber(num) {
	return (num > 0 ? "+" : "") + num;
}