import { useState, useCallback } from "react";
import { NAV, ASSETS } from "./SiteHeader.data";

export function useSiteHeader() {
  const [open, setOpen] = useState(false);

  const toggle = useCallback(() => setOpen((v) => !v), []);
  const close = useCallback(() => setOpen(false), []);

  return { nav: NAV, assets: ASSETS, open, toggle, close };
}
