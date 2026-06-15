export default function technicianCard(technician) {
    const container = document.createElement("article");
    const fullName = document.createElement("h3");
    const role = document.createElement("p");
    const phone = createPhoneDetail("Phone", technician.phone);
    const email = createEmailDetail("Email", technician.email);
    const assignedServices = createDetail(
        "Assigned Services",
        getServicesCount(technician.services)
    );

    container.classList.add("technician-card");

    fullName.classList.add("technician-name");
    fullName.textContent = `${technician.fname} ${technician.lname}`;

    role.classList.add("role-badge");
    role.textContent = technician.role || "technician";

    container.appendChild(fullName);
    container.appendChild(role);
    container.appendChild(phone);
    container.appendChild(email);
    container.appendChild(assignedServices);

    return container;
}

function createDetail(label, value) {
    const detail = document.createElement("p");
    const labelSpan = document.createElement("span");

    detail.classList.add("technician-detail");

    labelSpan.textContent = `${label}: `;
    detail.appendChild(labelSpan);
    detail.append(value || "Not provided");

    return detail;
}

function createPhoneDetail(label, phoneNumber) {
    const detail = document.createElement("p");
    const labelSpan = document.createElement("span");
    const link = document.createElement("a");

    detail.classList.add("technician-detail");

    labelSpan.textContent = `${label}: `;
    link.href = `tel:${phoneNumber}`;
    link.textContent = phoneNumber || "Not provided";

    detail.appendChild(labelSpan);
    detail.appendChild(link);

    return detail;
}

function createEmailDetail(label, emailAddress) {
    const detail = document.createElement("p");
    const labelSpan = document.createElement("span");
    const link = document.createElement("a");

    detail.classList.add("technician-detail");

    labelSpan.textContent = `${label}: `;
    link.href = `mailto:${emailAddress}`;
    link.textContent = emailAddress || "Not provided";

    detail.appendChild(labelSpan);
    detail.appendChild(link);

    return detail;
}

function getServicesCount(services) {
    if (!Array.isArray(services)) {
        return "0";
    }

    return `${services.length}`;
}