import clientCard from "./client-card.mjs";

export default function renderClients() {
    const clients = JSON.parse(localStorage.getItem("clients")) || [];
    const container = document.querySelector("#clients-container");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    if (clients.length === 0) {
        container.innerHTML = `<p class="empty-message">No clients found.</p>`;
        return;
    }

    clients.forEach(client => {
        const newClient = clientCard(client);
        container.append(newClient);
    });
}