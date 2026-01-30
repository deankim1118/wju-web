'use client';

import { useEffect, useState } from 'react';

/**
 * Syncs accordion open state and scroll position with URL hash.
 * When hash matches a slug in the list, opens that item and scrolls to it.
 */
export function useHashScroll(slugs: string[], defaultOpen: string): {
  openValue: string;
  setOpenValue: (value: string) => void;
} {
  const [openValue, setOpenValue] = useState(defaultOpen);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const hash = window.location.hash.slice(1).toLowerCase();
    if (!hash) return;
    const isValid = slugs.some((s) => s.toLowerCase() === hash);
    if (isValid) setOpenValue(hash);
    const el = document.getElementById(hash);
    if (el) {
      setTimeout(
        () => el.scrollIntoView({ behavior: 'smooth', block: 'start' }),
        100,
      );
    }
    const onHashChange = () => {
      const h = window.location.hash.slice(1).toLowerCase();
      if (slugs.some((s) => s.toLowerCase() === h)) setOpenValue(h);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, [slugs]);

  return { openValue, setOpenValue };
}
