import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export function formatViews(views: number) {
  if (views >= 1000) {
    return `${(views / 1000).toFixed(1)}k`
  }
  return views.toString()
}

export function formatCategory(category: string) {
  return category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()
}

export function formatAuthorName(author: { firstName: string; lastName: string }) {
  return `${author.firstName} ${author.lastName}`
}

export function formatStartupTitle(title: string) {
  return title.length > 50 ? `${title.slice(0, 50)}...` : title
}

export function formatStartupDescription(description: string) {
  return description.length > 100 ? `${description.slice(0, 100)}...` : description
}
export function formatImageUrl(url: string) {
  if (!url) return "https://via.placeholder.com/500";
  return url.startsWith("http") ? url : `https://example.com/${url}`;
}
