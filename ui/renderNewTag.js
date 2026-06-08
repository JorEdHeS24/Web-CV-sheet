//@ts-check

import { newClass } from "../utils/helpers/ClassesGenerator.js";
import { button } from "./components/button.js"
import { tag } from "./components/tag.js"

// Add a new tag to the espedified container with the spesified information, also recive a createTag parameters as the function is called inside.
export function renderNewTag(soft_skills_tags, btn_text = null, soft_skills_container = null, new_class  = null) {
    
    soft_skills_tags.forEach(skill => {
    if (soft_skills_container) {        
        soft_skills_container.appendChild(tag(skill)); 
    }
    })

    if (btn_text){
        const btn  = button(btn_text)
        console.log(btn)
        const skillsBtn = newClass(btn, new_class)
        console.log(skillsBtn)

        if (soft_skills_container) {
            soft_skills_container.append(skillsBtn) 
        }
    }
        

}                              