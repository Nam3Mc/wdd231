import fetchClients from "./fetch-clients.mjs";
import fetchServices from "./fetch-services.mjs";
import fetchTechnicians from "./fetch-technicians.mjs";

export default function roleValidator(user) {
    
    localStorage.setItem("user", JSON.stringify(user));
    const clientsUrl = './data/clients.json'
    const techniciansUrl = './data/users.json'
    const servicesUrl = './data/services.json'

    if (user.role === "admin") {
        fetchClients(clientsUrl)
        fetchTechnicians(techniciansUrl)
        fetchServices(servicesUrl)
        window.location.href = "dashboard.html";

    } else {
        window.location.href = "tech-portal.html";
    }
}