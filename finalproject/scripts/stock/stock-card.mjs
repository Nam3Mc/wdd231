export default function stockCard(stockItem) {
    const container = document.createElement("article");
    const productName = document.createElement("h3");
    const category = document.createElement("p");
    const quantity = createDetail("Quantity", stockItem.quantity);
    const price = createPriceDetail("Price", stockItem.price);
    const expirationDate = createDateDetail("Expires", stockItem.expirationDate);

    container.classList.add("stock-card");

    productName.classList.add("stock-product");
    productName.textContent = stockItem.productName;

    category.classList.add("category-badge");
    category.textContent = stockItem.category || "Uncategorized";

    container.appendChild(productName);
    container.appendChild(category);
    container.appendChild(quantity);
    container.appendChild(price);
    container.appendChild(expirationDate);

    return container;
}

function createDetail(label, value) {
    const detail = document.createElement("p");
    const labelSpan = document.createElement("span");

    detail.classList.add("stock-detail");

    labelSpan.textContent = `${label}: `;
    detail.appendChild(labelSpan);
    detail.append(value ?? "Not provided");

    return detail;
}

function createPriceDetail(label, priceValue) {
    const detail = document.createElement("p");
    const labelSpan = document.createElement("span");

    detail.classList.add("stock-detail");

    const formattedPrice = Number(priceValue).toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    });

    labelSpan.textContent = `${label}: `;
    detail.appendChild(labelSpan);
    detail.append(formattedPrice);

    return detail;
}

function createDateDetail(label, dateValue) {
    const detail = document.createElement("p");
    const labelSpan = document.createElement("span");

    detail.classList.add("stock-detail");

    labelSpan.textContent = `${label}: `;
    detail.appendChild(labelSpan);

    if (!dateValue) {
        detail.append("Not provided");
        return detail;
    }

    const formattedDate = new Date(dateValue).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    });

    const time = document.createElement("time");
    time.dateTime = dateValue;
    time.textContent = formattedDate;

    detail.appendChild(time);

    return detail;
}