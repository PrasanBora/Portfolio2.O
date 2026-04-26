import { useEffect } from "react";

const SITE_URL = "https://prasan-bora-portfolio.vercel.app";

const setMeta = (selector, value) => {
  let el = document.head.querySelector(selector);
  if (!el) {
    const m = selector.match(/\[(name|property|itemprop)="([^"]+)"\]/);
    if (!m) return;
    el = document.createElement("meta");
    el.setAttribute(m[1], m[2]);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
};

const setLink = (rel, href) => {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

/**
 * Sets per-route title, description, canonical URL, OG and Twitter tags.
 * Improves indexability for SPA routes.
 */
export default function useDocumentMeta({
  title,
  description,
  path = "/",
  image = `${SITE_URL}/og-image.png`,
}) {
  useEffect(() => {
    if (title) document.title = title;
    if (description) {
      setMeta('meta[name="description"]', description);
      setMeta('meta[itemprop="description"]', description);
    }
    const fullUrl = `${SITE_URL}${path}`;
    setLink("canonical", fullUrl);
    setMeta('meta[property="og:url"]', fullUrl);
    if (title) {
      setMeta('meta[property="og:title"]', title);
      setMeta('meta[name="twitter:title"]', title);
      setMeta('meta[itemprop="name"]', title);
    }
    if (description) {
      setMeta('meta[property="og:description"]', description);
      setMeta('meta[name="twitter:description"]', description);
    }
    if (image) {
      setMeta('meta[property="og:image"]', image);
      setMeta('meta[name="twitter:image"]', image);
      setMeta('meta[itemprop="image"]', image);
    }
  }, [title, description, path, image]);
}
