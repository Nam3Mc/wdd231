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

            const productName = formData.elements["productName"].value.trim();
            const category = formData.elements["category"].value;
            const quantity = Number(formData.elements["quantity"].value);
            const price = Number(formData.elements["price"].value);
            const expirationDate = formData.elements["expirationDate"].value;

            if (!productName || !category || quantity <= 0 || price <= 0 || !expirationDate) {
                alert("Please fill out all stock fields correctly.");
                return;
            }

            const newStock = {
                id: crypto.randomUUID(),
                productName,
                category,
                quantity,
                price,
                expirationDate
            };

            stock.push(newStock);
            localStorage.setItem("stock", JSON.stringify(stock));

            alert("Stock product added successfully");
            formData.reset();

        } catch (error) {
            console.error("Error adding stock:", error);
            alert("Something went wrong while adding the stock product.");
        }
    });
}