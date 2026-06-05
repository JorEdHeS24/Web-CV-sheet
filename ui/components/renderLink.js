
// Add to the container a personalize link that serves like button to add a new summary card.
export function renderLink(HTML_Element, text) {
    const addLink = document.createElement("li")
    const link = document.createElement("a")
    link.href = "#"
    link.classList.add("ornament-before")
    link.textContent = `${text}`
    addLink.classList.add("add-link-style")
    addLink.appendChild(link)
    HTML_Element.append(addLink)
    link.style.textDecoration = "none"
    link.style.color = "var(--black-color)"
    link.addEventListener("mouseenter", (e) => {link.style.textDecoration = "underline"})
    link.addEventListener("mouseleave", (e) => {link.style.textDecoration = "none"})    
}