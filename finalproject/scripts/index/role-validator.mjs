import fetchClients from "./fetch-clients.mjs";
import fetchServices from "./fetch-services.mjs";
import fetchStock from "./fetch-stock.mjs";
import fetchTechnicians from "./fetch-technicians.mjs";

export default function roleValidator(user) {
    
    localStorage.setItem("user", JSON.stringify(user));
    const clientsUrl = './data/clients.json'
    const techniciansUrl = './data/users.json'
    const servicesUrl = './data/services.json'
    const stockUrl = './data/stock.json'

    if (user.role === "admin") {
        fetchClients(clientsUrl)
        fetchTechnicians(techniciansUrl)
        fetchServices(servicesUrl)
        fetchStock(stockUrl)
        window.location.href = "dashboard.html";

    } else {
        window.location.href = "tech-portal.html";
    }
}