import { 
    CARD_TEXT_CONTAINER, 
    EXPIRIENCE_DETAILS, 
    FORMATION_DETAILS,
    SOFT_SKILLS_TAGS, 
    WORK_SKILLS_TAGS } from "./config/Constants.js"



// BACKGROUND SUMMARY CARD

const expirienceList = document.querySelector(".expirience-list")
const formationList = document.querySelector(".formation-list")
const skillsContainer = document.querySelector(".skills-content")
const workSkillContainer = document.querySelector(".work-skills-tags")


// Creates a generic estructure that spesify the structure of the summry card with pieces of information of the user.
const BgrSummaryCard = (section_content, card_text_container, list_element)=>{
    for(let detail in section_content)
    {
        let details = Object.values(section_content[detail])
        console.log(details)    
        
        let summaryCard = document.createElement("li")
        summaryCard.classList.add("summary-card-details","ornament-before", "ornament-after") 
        
        for(let detail of details)
        {            
            summaryCard.innerHTML += card_text_container(detail)        
        }
        
        list_element.appendChild(summaryCard)

    }
     
}

// Add to the container a personalize link that serves like button to add a new summary card.
function addLink(HTML_Element, text)
{
    let addLink = document.createElement("li")
    let link = document.createElement("a")
    link.href = "#"
    link.classList.add("ornament-before")
    link.textContent = `${text}`
    addLink.classList.add("add-link-style")
    addLink.appendChild(link)
    HTML_Element.append(addLink)   
}

let softSkillsTags  = SOFT_SKILLS_TAGS
let workSkillsTags  = WORK_SKILLS_TAGS

// Creates a new unformated container with a text that is thinked to be formated as a tag.
function tagCreate(container, text)
{    
    return container.innerHTML += `<p class="tag">${text}</p>`
}

// Add a new tag to the espedified container with the spesified information, also recive a tagCreate parameters as the that function is called inside.
function addNewTag(containerElement, tagCreateContainer,softSkillsTags)
{
    for (let skill in softSkillsTags)
    {
            tagCreate(tagCreateContainer, softSkillsTags[skill])
    }
    let buttonAdd = document.createElement("button")
    buttonAdd.textContent ="Add +"
    buttonAdd.classList.add ="AddTagButton"
    containerElement.append(buttonAdd)

}

BgrSummaryCard(EXPIRIENCE_DETAILS, CARD_TEXT_CONTAINER, expirienceList)
BgrSummaryCard(FORMATION_DETAILS, CARD_TEXT_CONTAINER, formationList)

addLink(expirienceList, "Add Expirience")
addLink(formationList, "Add Formation")

addNewTag(skillsContainer, skillsContainer, softSkillsTags)
addNewTag(workSkillContainer, workSkillContainer, workSkillsTags)
// tagCreate(skillsContainer, "Proactivo".trim())
