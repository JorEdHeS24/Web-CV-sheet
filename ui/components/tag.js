// Creates a new unformated container with a text that is thinked to be formated as a tag.
export function tag(text) {
    if (typeof text !== "string") return;
    const tag = document.createElement("p");
    tag.classList.add("tag");
    tag.textContent = text;
    return tag;
}