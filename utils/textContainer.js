// this returns a p containe that recive a text. is thinked to generate a generic p container to be use for other structures.
export const TEXT_CONTAINER = (text)=>
{   
    const pContainer = document.createElement("p")
    pContainer.classList.add("card-text")
    pContainer.textContent = text
    return pContainer.outerHTML     
}