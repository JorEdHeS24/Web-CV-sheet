export function clearElements(selectors) {
    selectors.forEach( selector => {
        selector.innerHTML = "";        
    })
}    
