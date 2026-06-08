export function card(details, text_container = null) {
        const summaryCard = document.createElement("li")
        summaryCard.classList.add("summary-card-details", "ornament-before", "ornament-after")

        details.forEach(detail => {
            summaryCard.innerHTML += text_container(detail)
        })    
        return summaryCard
}