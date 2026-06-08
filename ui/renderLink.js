
import { link } from "./components/link.js"

// Add to the container a personalize link that serves like button to add a new summary card.
export function renderLink(HTML_Element, text) {
    const addLink = document.createElement("li")
    addLink.classList.add("add-link-style")    
    addLink.appendChild(link(text))
    HTML_Element.append(addLink)
}