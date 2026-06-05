
export function renderSectionTitles(SECTIONS_TITLES) {
    const sect_titles = document.querySelectorAll(".sect-title")
    const titles_list = Object.values(SECTIONS_TITLES)
    sect_titles.forEach((nodo, i) => {
        if (titles_list[i]) {
            nodo.textContent = titles_list[i]
        }
    })
}

export function renderPageTitle(title) {
    const pageTitle = document.getElementById("cvt")
    console.log(pageTitle)
    pageTitle.innerText = title
}

export function renderAboutMeText(TEXT_CONTAINER, about_me_text) {
    const aboutMeTxtContainer = document.querySelector(".about-content")
    const aboutMeText = TEXT_CONTAINER(about_me_text)
    aboutMeTxtContainer.innerHTML = aboutMeText

}

