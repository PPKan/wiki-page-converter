const CURRENT_URL = document.URL;

if (CURRENT_URL.includes("wiki" && ".m.")) {
  const NEW_TAB = CURRENT_URL.replace(".m.", ".");
  window.location.href = NEW_TAB;
}