import getClient from "../dashboard/get-client.mjs";
import getTechnician from "../dashboard/get-technichian.mjs";
import serviceModal from "./service-modal.mjs";

export default function serviceCard(service) {
    const client = getClient(service.clientId);
    const technician = getTechnician(service.technicianId);

    const container = document.createElement("article");
    const clientContainer = document.createElement("div");
    const companyName = document.createElement("h3");
    const status = document.createElement("p");
    const date = document.createElement("p");
    const btnContainer = document.createElement("div");
    const infoBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");
    const technicianContainer = document.createElement("div");
    const technicianName = document.createElement("p");
    const phone = document.createElement("p");

    const dateTime = `${service.serviceDate}T${service.serviceTime}`;

    const formattedDate = new Date(dateTime).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    });

    container.classList.add("service-card");

    clientContainer.classList.add("service-card-info");

    companyName.classList.add("service-company");
    companyName.textContent = client.companyName;

    status.classList.add("service-status");
    status.innerHTML = `<span>Status:</span> ${service.status}`;

    date.classList.add("service-date");
    date.innerHTML = `
        <span>Date:</span>
        <time datetime="${dateTime}">
            ${formattedDate} · ${service.serviceTime}
        </time>
    `;

    btnContainer.classList.add("service-actions");
    btnContainer.setAttribute("aria-label", "Service actions");

    infoBtn.classList.add("info-btn");
    infoBtn.type = "button";
    infoBtn.textContent = "Info";

    infoBtn.addEventListener('click', () => {
        serviceModal(service)
    })

    deleteBtn.classList.add("delete-btn");
    deleteBtn.type = "button";
    deleteBtn.textContent = "Delete";

    technicianContainer.classList.add("service-technician");

    technicianName.classList.add("technician-name");
    technicianName.innerHTML = `
        <span>Technician:</span>
        ${technician.fname} ${technician.lname}
    `;

    phone.classList.add("technician-phone");
    phone.innerHTML = `
        <span>Phone:</span>
        <a href="tel:${technician.phone}">
            ${technician.phone}
        </a>
    `;

    clientContainer.appendChild(companyName);
    clientContainer.appendChild(status);
    clientContainer.appendChild(date);

    btnContainer.appendChild(infoBtn);
    btnContainer.appendChild(deleteBtn);

    technicianContainer.appendChild(technicianName);
    technicianContainer.appendChild(phone);

    container.appendChild(clientContainer);
    container.appendChild(btnContainer);
    container.appendChild(technicianContainer);

    return container;
}