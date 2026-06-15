import serviceCard from "./service-card.mjs";

export default function renderServices() {
    const services = JSON.parse(localStorage.getItem('services'))
    const container = document.querySelector('#services-container')

    services.forEach(service => {
        const newService = serviceCard(service)
        container.append(newService)
    });
}