import technicianCard from "./technician-card.mjs";

export default function renderTechnicians() {
    const technicians = JSON.parse(localStorage.getItem("technicians")) || [];
    const container = document.querySelector("#technicians-container");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    if (technicians.length === 0) {
        container.innerHTML = `<p class="empty-message">No technicians found.</p>`;
        return;
    }

    technicians.forEach(technician => {
        const newTechnician = technicianCard(technician);
        container.append(newTechnician);
    });
}