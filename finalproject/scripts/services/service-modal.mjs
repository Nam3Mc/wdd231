import getClient from "../dashboard/get-client.mjs";
import getTechnician from "../dashboard/get-technichian.mjs";

export default function serviceModal(service) {
    const client = getClient(service.clientId);
    const technician = getTechnician(service.technicianId);

    const dialog = document.createElement("dialog");
    const modalContent = document.createElement("div");
    const closeBtn = document.createElement("button");

    const dateTime = `${service.serviceDate}T${service.serviceTime}`;

    const formattedDate = new Date(dateTime).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    });

    dialog.classList.add("service-dialog");
    modalContent.classList.add("service-dialog-content");

    closeBtn.classList.add("close-dialog-btn");
    closeBtn.type = "button";
    closeBtn.textContent = "Close";

    modalContent.innerHTML = `
        <h2>Service Details</h2>

        <p>
            <span>Company:</span>
            ${client.companyName}
        </p>

        <p>
            <span>Service:</span>
            ${service.serviceName.join(", ")}
        </p>

        <p>
            <span>Status:</span>
            ${service.status}
        </p>

        <p>
            <span>Date:</span>
            <time datetime="${dateTime}">
                ${formattedDate} · ${service.serviceTime}
            </time>
        </p>

        <p>
            <span>Last Service:</span>
            ${service.lastServiceDate}
        </p>

        <p>
            <span>Technician:</span>
            ${technician.fname} ${technician.lname}
        </p>

        <p>
            <span>Technician Phone:</span>
            <a href="tel:${technician.phone}">
                ${technician.phone}
            </a>
        </p>

        <p>
            <span>Address:</span>
            ${service.address}
        </p>

        <p>
            <span>Price:</span>
            $${service.price}
        </p>

        <p>
            <span>Duration:</span>
            ${service.durationHours} hours
        </p>

        <p>
            <span>Certificate Issued:</span>
            ${service.certificateIssued ? "Yes" : "No"}
        </p>

        <p>
            <span>Description:</span>
            ${service.description}
        </p>
    `;

    modalContent.appendChild(closeBtn);
    dialog.appendChild(modalContent);
    document.body.appendChild(dialog);

    closeBtn.addEventListener("click", () => {
        dialog.close();
    });

    dialog.addEventListener("close", () => {
        dialog.remove();
    });

    dialog.addEventListener("click", event => {
        if (event.target === dialog) {
            dialog.close();
        }
    });

    dialog.showModal();
}