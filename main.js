// @ts-check

import { renderLink } from "./ui/renderLink.js";
import { renderNewTag } from "./ui/renderNewTag.js";
import { renderSummaryCard } from "./ui/renderSummaryCard.js";
import { renderLangList } from "./ui/renderLangList.js";
import { renderAboutMeText, renderPageTitle, renderSectionTitles } from "./ui/renderTexts.js";
import { TEXT_CONTAINER } from "./utils/textContainer.js";
import { onLangSwitcher } from "./events/langSwitch.js";
import "./events/printBtn.js";
import { addSkillsEvent } from "./events/addSkillsEvent.js";
import { getContentByLang } from "./utils/getContentByLang.js";




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

    renderNewTag(SOFT_SKILLS_TAGS, ACTIONS.add_button_txt, soft_skills_container, "modal-btn-soft")
    renderNewTag(WORK_SKILLS_TAGS, ACTIONS.add_button_txt, work_skill_container, "modal-btn-hard")
    // createTag(skillsContainer, "Proactivo".trim())

    renderAboutMeText(TEXT_CONTAINER, ABOUT_ME)
    renderSectionTitles(SECTIONS_TITLES)
    renderLangList(LANGUAGES)
    

    //Events
    addSkillsEvent("modal-btn-soft")
    addSkillsEvent("modal-btn-hard")

    
}


onLangSwitcher();
renderContent();

