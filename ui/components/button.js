export function button(btn_text = '') {
    const btnAdd = document.createElement("button")
    const text = typeof btn_text === 'string' ? btn_text : String(btn_text || '')
    btnAdd.textContent = text.trim()
    btnAdd.classList.add("add-tag-button")
    return btnAdd     
}