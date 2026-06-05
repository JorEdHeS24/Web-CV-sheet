import { clearElements } from "../utils/helpers/clearElements.js";


export function renderLangList(languages) {
    let langList = document.getElementById("languages_list")
    if (!langList) return;
    clearElements([langList])
    
    languages.forEach(lang => {
        const langItem = document.createElement("li")
        langItem.classList.add("lang")
        langItem.innerText = lang
        console.log(langItem)
        langList.appendChild(langItem)
    })    

}
