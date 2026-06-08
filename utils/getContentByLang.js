// 1. Function that only imports the module based on the current language.
export async function getContentByLang() {
    const lang_items = document.getElementById("lang-items");
    const lang = lang_items?.value || "esp";

    if (lang === "esp") {
        return await import("../data/ESP-Content.js");
    } else {
        return await import("../data/ENG-Content.js");
    }
}
