import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Utility function to get the URL of an image from the public/images directory
 * @param imageName - The name of the image file (e.g., 'profile.jpg')
 * @returns The full URL to the image
 */
export function getImageUrl(imageName: string): string {
  return `/images/${imageName}`
}
