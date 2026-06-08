//@ts-check
import { getContentByLang } from "../utils/getContentByLang.js";
import { renderNewTag } from "../ui/renderNewTag.js";

export function addSkillsEvent(add_btn) {
    const addSkillModal = document.getElementById("add-skills-modal")
    const addBtn = document.querySelector("." + add_btn)
    const closeModalBtn = document.getElementById("close-modal-btn")
    const addSkillBtn = document.getElementById("add-skill-btn")
    const soft_skills_container = document.querySelector(".soft-skills-container")
    const work_skill_container = document.querySelector(".work-skills-container")

    

    if (!addBtn || !addSkillModal) {
        console.error("Missing modal elements");
        return;
    }

    addBtn.addEventListener("click", () =>{
        console.log(add_btn)
        // Guardar qué botón abrió el modal
        addSkillModal.dataset.source = add_btn
        addSkillModal.style.display = "flex"
        addSkillModal.showModal()
    })

    closeModalBtn.addEventListener("click", () =>{
        addSkillModal.style.display = "none"        
        addSkillModal.style.gap = "5px"
        addSkillModal.close()
    })

    // Solo agregar evento UNA VEZ (fuera de las múltiples llamadas)
    if (!addSkillBtn.dataset.initialized) {
        addSkillBtn.addEventListener("click", async ()=>{
            const skillInput = document.getElementById("skill-input")
            const source = addSkillModal.dataset.source

            const lang_content = await getContentByLang();
            const {SOFT_SKILLS_TAGS, WORK_SKILLS_TAGS, TEXTS_ADD_SKILL_MODAL: tasm} = lang_content

            const newTagText = skillInput.value?.trim()

            if (!newTagText) {
                alert(tasm.modal_alert_text_fail)
                return;
            }

            if (source == "modal-btn-soft" ){
                SOFT_SKILLS_TAGS.push(newTagText)
                renderNewTag([newTagText], null, soft_skills_container)
            } else{
                WORK_SKILLS_TAGS.push(newTagText)
                renderNewTag([newTagText], null, work_skill_container)
            }
            
            

            alert(tasm.modal_alert_text)
            skillInput.value = ""
            addSkillModal.close()
            addSkillModal.style.display = "none"
        })
        addSkillBtn.dataset.initialized = true
    }
    
}