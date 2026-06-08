export function link(text) {    
    const link = document.createElement("a")
    link.href = "#"
    link.classList.add("ornament-before")
    link.textContent = `${text}`        
    link.style.textDecoration = "none"
    link.style.color = "var(--black-color)"
    link.addEventListener("mouseenter", (e) => {link.style.textDecoration = "underline"})
    link.addEventListener("mouseleave", (e) => {link.style.textDecoration = "none"})        
    return link
}