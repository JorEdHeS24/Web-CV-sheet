// Creates a generic estructure that spesify the structure of the summry card with pieces of information of the user.
export const renderSummaryCard = (card_details, TEXT_CONTAINER, list_element) => {

    const summaryCards = []
    card_details.forEach(details_obj => {
            let details = Object.values(details_obj)

        const summaryCard = document.createElement("li")
        summaryCard.classList.add("summary-card-details", "ornament-before", "ornament-after")
        for (let detail of details) {
            summaryCard.innerHTML += TEXT_CONTAINER(detail)
        }

        list_element.appendChild(summaryCard)
        summaryCards.push(summaryCard)
    })

    const lastSummaryCard = summaryCards[summaryCards.length - 1]
    if (lastSummaryCard) {
        lastSummaryCard.classList.add("summary-card-last")        
    }
    }
