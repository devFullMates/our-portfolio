export const THEME_STORAGE_KEY = "theme";

/**
 * Inlined in <head> so a saved theme is applied before the first paint (no flash).
 * Without a saved choice, CSS follows prefers-color-scheme.
 */
export const themeInitScript = `try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;
