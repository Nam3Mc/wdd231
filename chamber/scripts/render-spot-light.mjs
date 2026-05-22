import cardCreator from "./cards-creator.mjs";

export default function renderSpotLight(servicesList) {
    const container = document.querySelector('#spotlight-container')
    servicesList.forEach(service => {
        const newCard = cardCreator(service)
        container.appendChild(newCard)
    });
    
}