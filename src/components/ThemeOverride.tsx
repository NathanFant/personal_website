"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ThemeOverride() {
  const pathname = usePathname();

  useEffect(() => {
    const html = document.documentElement;
    if (pathname.startsWith('/dark')) {
      html.classList.add('dark');
    } else if (pathname.startsWith('/light')) {
      html.classList.remove('dark');
    } else {
      // Default to media query
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        html.classList.add('dark');
      } else {
        html.classList.remove('dark');
      }
    }
  }, [pathname]);

  return null;
}