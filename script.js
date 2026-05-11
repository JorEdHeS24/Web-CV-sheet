import { LANGUAGES } from "./config/ESP-Content.js";
import "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"

// 1. Function that only imports the module based on the current language.
async function getContentByLang() {
    let langItems = document.getElementById("lang-items");
    let lang = langItems.value || "esp";

    if (lang === "esp") {
        return await import("./config/ESP-Content.js");
    } else {
        return await import("./config/ENG-Content.js");
    }
}

// 2. Event Listener for detect changes and re-renderize the page
function setupLangSwitcher() {
    let langItems = document.getElementById("lang-items");

    langItems.addEventListener("change", async () => {
        // Clean the content to avoid duplication
        document.querySelector(".expirience-list").innerHTML = "";
        document.querySelector(".formation-list").innerHTML = "";
        document.querySelector(".soft-skills-container").innerHTML = "";
        document.querySelector(".work-skills-container").innerHTML = "";

        // Renderize the content with the new language
        await renderContent();
    });
}

// Initialize the lang switcher.
setupLangSwitcher();

// 3. Rederize the content
async function renderContent() {

    let content = await getContentByLang();

    const {
        EXPIRIENCE_DETAILS,
        FORMATION_DETAILS,
        TEXT_CONTAINER,
        ABOUT_ME,
        SECTIONS_TITLES,
        SOFT_SKILLS_TAGS,
        WORK_SKILLS_TAGS,
        LANGUAGES,
        TITLE,
        ACTIONS
    } = content;

    console.log(content)
    page_title(TITLE)
    BgrSummaryCard(EXPIRIENCE_DETAILS, TEXT_CONTAINER, expirienceList)
    BgrSummaryCard(FORMATION_DETAILS, TEXT_CONTAINER, formationList)

    addLink(expirienceList, ACTIONS.add_expirience)
    addLink(formationList, ACTIONS.add_formation)

    addNewTag(softSkillsContainer, softSkillsContainer, SOFT_SKILLS_TAGS, content)
    addNewTag(workSkillContainer, workSkillContainer, WORK_SKILLS_TAGS, content)
    // tagCreate(skillsContainer, "Proactivo".trim())

    insert_aboutme_txt(TEXT_CONTAINER, ABOUT_ME)
    insert_sect_title(SECTIONS_TITLES)
    lang_list(content)

}


// BACKGROUND SUMMARY CARD

const expirienceList = document.querySelector(".expirience-list")
const formationList = document.querySelector(".formation-list")
const softSkillsContainer = document.querySelector(".soft-skills-container")
const workSkillContainer = document.querySelector(".work-skills-container")


// Creates a generic estructure that spesify the structure of the summry card with pieces of information of the user.
const BgrSummaryCard = (section_content, TEXT_CONTAINER, list_element) => {
    for (let detail in section_content) {
        let details = Object.values(section_content[detail])

        let summaryCard = document.createElement("li")
        summaryCard.classList.add("summary-card-details", "ornament-before", "ornament-after")
        for (let detail of details) {
            summaryCard.innerHTML += TEXT_CONTAINER(detail)
        }

        list_element.appendChild(summaryCard)

    }

}

// Add to the container a personalize link that serves like button to add a new summary card.
function addLink(HTML_Element, text) {
    let addLink = document.createElement("li")
    let link = document.createElement("a")
    link.href = "#"
    link.classList.add("ornament-before")
    link.textContent = `${text}`
    addLink.classList.add("add-link-style")
    addLink.appendChild(link)
    HTML_Element.append(addLink)
}


// Creates a new unformated container with a text that is thinked to be formated as a tag.
function tagCreate(container, text) {
    return container.innerHTML += `<p class="tag">${text}</p>`
}

// Add a new tag to the espedified container with the spesified information, also recive a tagCreate parameters as the that function is called inside.
function addNewTag(containerElement, tagCreateContainer, softSkillsTags, util) {
    for (let skill in softSkillsTags) {
        tagCreate(tagCreateContainer, softSkillsTags[skill])
    }
    let buttonAdd = document.createElement("button")
    buttonAdd.innerText = util.ACTIONS.add_button_txt
    buttonAdd.classList.add("add-tag-button")
    containerElement.append(buttonAdd)

}

// TITLES STTIINGS

function page_title(title) {
    const pageTitle = document.getElementById("cvt")
    console.log(pageTitle)
    pageTitle.innerText = title
}

function insert_aboutme_txt(TEXT_CONTAINER, ABOUT_ME) {
    let aboutMeTxtContainer = document.querySelector(".about-content")
    let aboutMeText = TEXT_CONTAINER(ABOUT_ME)
    aboutMeTxtContainer.innerHTML = aboutMeText

}

function insert_sect_title(SECTIONS_TITLES) {
    let sect_titles = document.querySelectorAll(".sect-title")
    let titles_list = Object.values(SECTIONS_TITLES)
    sect_titles.forEach((nodo, i) => {
        if (titles_list[i]) {
            nodo.textContent = titles_list[i]
        }
    })


}

function lang_list(util) {
    let langList = document.getElementById("languages_list")
    langList.innerHTML = null;
    // console.log(langList)


    for (let lang in util.LANGUAGES) {
        let langItem = document.createElement("li")
        langItem.classList.add("lang")
        langItem.innerText = util.LANGUAGES[lang]
        langList.appendChild(langItem)
    }

}



let printButton = document.getElementById("print-button")
let script = document.getElementById("script")
console.log(printButton)
console.log(script)

printButton.addEventListener("click", async () => {
    // Hide UI elements that shouldn't be in the PDF
    const addButtons = document.querySelectorAll(".add-tag-button");
    addButtons.forEach(btn => btn.style.display = "none");

    const addLinks = document.querySelectorAll(".add-link-style");
    addLinks.forEach(link => link.style.display = "none");

    const pButton = document.getElementById("print-button");
    if (pButton) pButton.style.display = "none";

    const langToggle = document.getElementById("toggle_language");
    if (langToggle) langToggle.style.display = "none";

    await exportarEImprimir();

    // Restore UI elements after PDF generation
    addButtons.forEach(btn => btn.style.display = "");
    addLinks.forEach(link => link.style.display = "");
    if (pButton) pButton.style.display = "";
    if (langToggle) langToggle.style.display = "";
})

async function exportarEImprimir() {
    // Select the main container that has the exact A4 dimensions, avoiding body padding
    const elemento = document.querySelector('main');

    const opciones = {
        margin: 0,
        filename: 'mi_hoja_de_vida.pdf',
        image: { type: 'png', quality: 0.99 },
        html2canvas: { scale: 2, logging: true, dpi: 192, letterRendering: true, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    await html2pdf().set(opciones).from(elemento).save();
}


renderContent();

