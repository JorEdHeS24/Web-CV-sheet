
import { renderContent } from "../main.js";
import { clearElements } from "../utils/helpers/clearElements.js";

// 2. Event Listener for detect changes and re-renderize the page
export function onLangSwitcher() {
    const langItems = document.getElementById("lang-items");
    if (!langItems) return;

    langItems.addEventListener("change", async () => {
        // Clean the content to avoid duplication
        clearElements([
            document.querySelector(".experience-list"),
            document.querySelector(".formation-list"),
            document.querySelector(".soft-skills-container"),
            document.querySelector(".work-skills-container")
        ]);

        // Renderize the content with the new language
        await renderContent();
    });
}


