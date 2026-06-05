// @ts-check

import { renderLink } from "./ui/components/renderLink.js";
import { renderNewTag } from "./ui/components/renderNewTag.js";
import { renderSummaryCard } from "./ui/components/renderSummaryCard.js";
import { renderLangList } from "./ui/renderLangList.js";
import { renderAboutMeText, renderPageTitle, renderSectionTitles } from "./ui/renderTexts.js";
import { TEXT_CONTAINER } from "./utils/textContainer.js";
import { onLangSwitcher } from "./events/langSwitch.js";
import "./events/printBtn.js";

// 1. Function that only imports the module based on the current language.
async function getContentByLang() {
    const lang_items = document.getElementById("lang-items");
    const lang = lang_items?.value || "esp";

    if (lang === "esp") {
        return await import("./data/ESP-Content.js");
    } else {
        return await import("./data/ENG-Content.js");
    }
}



// 3. Rederize the content
export async function renderContent() {
        
    const expirience_list = document.querySelector(".experience-list")
    const formation_list = document.querySelector(".formation-list")
    const soft_skills_container = document.querySelector(".soft-skills-container")
    const work_skill_container = document.querySelector(".work-skills-container")

    if (!expirience_list || !formation_list || !soft_skills_container || !work_skill_container) {
    console.error("Missing required DOM containers");
    return;
    }


    const lang_content = await getContentByLang();     


    const {
        EXPERIENCE_DETAILS,
        FORMATION_DETAILS,    
        ABOUT_ME,
        SECTIONS_TITLES,
        SOFT_SKILLS_TAGS,
        WORK_SKILLS_TAGS,
        LANGUAGES,
        TITLE,
        ACTIONS
    } = lang_content;

    console.log(lang_content)
    renderPageTitle(TITLE)
    renderSummaryCard(EXPERIENCE_DETAILS, TEXT_CONTAINER, expirience_list)
    renderSummaryCard(FORMATION_DETAILS, TEXT_CONTAINER, formation_list)

    renderLink(expirience_list, ACTIONS.add_experience)
    renderLink(formation_list, ACTIONS.add_formation)

    renderNewTag(soft_skills_container, soft_skills_container, SOFT_SKILLS_TAGS, lang_content)
    renderNewTag(work_skill_container, work_skill_container, WORK_SKILLS_TAGS, lang_content)
    // createTag(skillsContainer, "Proactivo".trim())

    renderAboutMeText(TEXT_CONTAINER, ABOUT_ME)
    renderSectionTitles(SECTIONS_TITLES)
    renderLangList(LANGUAGES)

    //Events

    
}

onLangSwitcher();
renderContent();

