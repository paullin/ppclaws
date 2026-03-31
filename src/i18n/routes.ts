/**
 * Route translations for different languages
 * Maps original route names to localized URLs
 * Example: "about" -> "o-projektu" for Slovenian
 * English routes use original names (not included here)
 */
export const routes: Record<string, Record<string, string>> = {
    zh: {
        about: "guan-yu",
        blog: "bo-ke",
        "dynamic-routing": "dong-tai-lu-you",
        "blog-pagination": "bo-ke-fen-ye",
        pages: "ye-mian",
        "subpage-1": "zi-ye-1",
        "subpage-2": "zi-ye-2",
        contact: "lian-xi",
    },
};
