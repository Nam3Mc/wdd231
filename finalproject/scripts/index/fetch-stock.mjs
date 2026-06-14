export default async function fetchStock(url) {
    try {

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Could not load Stock data");
        }
        const stock = await response.json();

        localStorage.setItem('stock', JSON.stringify(stock))

        } catch (error) {
            console.error(error);
            alert("Something went wrong loading the Stock.");
        }
}