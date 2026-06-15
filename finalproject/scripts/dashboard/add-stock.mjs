import renderStock from "./render-stock.mjs";

export default function addStock() {
    const formData = document.querySelector("#stock-form");

    if (!formData) {
        console.error("Stock form not found");
        return;
    }

    formData.addEventListener("submit", (event) => {
        event.preventDefault();

        try {
            const stock = JSON.parse(localStorage.getItem("stock")) || [];

            const newStock = {
                id: crypto.randomUUID(),
                productName: formData.productName.value.trim(),
                category: formData.category.value,
                quantity: Number(formData.quantity.value),
                price: Number(formData.stockPrice.value),
                expirationDate: formData.expirationDate.value
            };

            stock.push(newStock);
            localStorage.setItem("stock", JSON.stringify(stock));

            renderStock();

            alert("Stock product added successfully");
            formData.reset();

        } catch (error) {
            console.error("Error adding stock:", error);
            alert("Something went wrong while adding the stock product.");
        }
    });
}