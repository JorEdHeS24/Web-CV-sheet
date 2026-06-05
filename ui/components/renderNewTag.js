
import { createTag } from "../../utils/createTag.js"

// Add a new tag to the espedified container with the spesified information, also recive a createTag parameters as the that function is called inside.



export function renderNewTag(soft_skills_container, create_tag_container, soft_skills_tags, lang_content) {
    
    soft_skills_tags.forEach(skill => {
        createTag(create_tag_container, skill) 
    })

    const buttonAdd = document.createElement("button")
    buttonAdd.innerText = lang_content.ACTIONS.add_button_txt
    buttonAdd.classList.add("add-tag-button")
    soft_skills_container.append(buttonAdd)
}