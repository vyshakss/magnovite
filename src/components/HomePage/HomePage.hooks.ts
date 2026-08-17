import { useMemo } from "react";
import {
  CATEGORIES,
  GALLERY,
  HERO,
  META,
  STATS,
  SHAAN,
  FOOTER_COPY,
} from "./HomePage.data";

export function useHomePage() {
  const categories = useMemo(() => CATEGORIES, []);
  const gallery = useMemo(() => GALLERY, []);
  const hero = useMemo(() => HERO, []);
  const meta = useMemo(() => META, []);
  const stats = useMemo(() => STATS, []);
  const shaan = useMemo(() => SHAAN, []);
  const footer = useMemo(() => FOOTER_COPY, []);

  return { categories, gallery, hero, meta, stats, shaan, footer };
}
