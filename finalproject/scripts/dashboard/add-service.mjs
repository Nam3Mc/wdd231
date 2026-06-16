import comingServices from "./comming-services.mjs";
import getClient from "./get-client.mjs";

export default function addService() {
    const formData = document.querySelector("#service-form");

    if (!formData) {
        console.error("Service form not found");
        return;
    }

    formData.addEventListener("submit", (event) => {
        event.preventDefault();

        try {
            const checkedServices = formData.querySelectorAll('input[type="checkbox"]:checked');

            const services = JSON.parse(localStorage.getItem("services")) || [];
            const servicesValue = [];

            checkedServices.forEach((service) => {
                servicesValue.push(service.value);
            });

            const client = getClient(formData.clientId.value);

            if (!client) {
                alert("Please select a valid client.");
                return;
            }

            if (servicesValue.length === 0) {
                alert("Please select at least one service type.");
                return;
            }

            const newService = {
                id: crypto.randomUUID(),
                clientId: formData.clientId.value,
                technicianId: formData.technicianId.value,
                serviceName: servicesValue,
                description: formData.serviceNotes.value.trim(),
                price: Number(formData.price.value),
                durationHours: null,
                status: "sheduled",
                serviceDate: formData.serviceDate.value,
                serviceTime: formData.serviceTime.value,
                address: client.address,
                certificateIssued: false,
                productsUsed: []
            };

            services.push(newService);
            localStorage.setItem("services", JSON.stringify(services));

            alert("Service added successfully");
            formData.reset();
            comingServices()

        } catch (error) {
            console.error("Error adding service:", error);
            alert("Something went wrong while adding the service.");
        }
    });
}