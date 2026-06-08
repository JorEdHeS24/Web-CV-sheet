// ts-check
import { card } from "./components/card.js"

// Creates a generic estructure that spesify the structure of the summry card with pieces of information of the user.
export const renderSummaryCard = (cards_list, TEXT_CONTAINER, list_element) => {

    const summaryCards = []
    cards_list.forEach(details_obj => {
        let details = Object.values(details_obj)
        const summaryCard = card(details, TEXT_CONTAINER)
        list_element.appendChild(summaryCard)
        summaryCards.push(summaryCard)
    })

    const lastSummaryCard = summaryCards[summaryCards.length - 1]
    if (lastSummaryCard) {
        lastSummaryCard.classList.add("summary-card-last")        
    }
}
