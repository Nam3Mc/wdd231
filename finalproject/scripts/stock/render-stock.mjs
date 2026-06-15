import stockCard from "./stock-card.mjs";

export default function renderStock() {
    const stock = JSON.parse(localStorage.getItem("stock")) || [];
    const container = document.querySelector("#stock-container");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    if (stock.length === 0) {
        container.innerHTML = `<p class="empty-message">No stock items found.</p>`;
        return;
    }

    stock.forEach(stockItem => {
        const newStockItem = stockCard(stockItem);
        container.append(newStockItem);
    });
}