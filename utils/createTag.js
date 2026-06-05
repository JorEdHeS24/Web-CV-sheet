// Creates a new unformated container with a text that is thinked to be formated as a tag.
export function createTag(container, text) {
    if (!container || typeof text !== "string") return;

    const tag = document.createElement("p");
    tag.classList.add("tag");
    tag.textContent = text;
    container.appendChild(tag);
}