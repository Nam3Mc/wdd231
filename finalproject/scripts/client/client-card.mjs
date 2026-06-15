export default function clientCard(client) {
    const container = document.createElement("article");
    const companyName = document.createElement("h3");
    const owner = createDetail("Owner", client.owner);
    const phone = createPhoneDetail("Phone", client.phone);
    const email = createEmailDetail("Email", client.email);
    const city = createDetail("City", client.city);
    const nextService = createDateDetail("Next Service", client.nextServiceDate);
    const plan = createDetail("Plan", client.servicePlan);
    const certificate = document.createElement("p");

    container.classList.add("client-card");

    companyName.classList.add("client-company");
    companyName.textContent = client.companyName;

    certificate.classList.add("status-badge");
    certificate.textContent = client.certificateStatus || "No certificate";

    container.appendChild(companyName);
    container.appendChild(owner);
    container.appendChild(phone);
    container.appendChild(email);
    container.appendChild(city);
    container.appendChild(nextService);
    container.appendChild(plan);
    container.appendChild(certificate);

    return container;
}

function createDetail(label, value) {
    const detail = document.createElement("p");
    const labelSpan = document.createElement("span");

    detail.classList.add("client-detail");

    labelSpan.textContent = `${label}: `;
    detail.appendChild(labelSpan);
    detail.append(value || "Not provided");

    return detail;
}

function createPhoneDetail(label, phoneNumber) {
    const detail = document.createElement("p");
    const labelSpan = document.createElement("span");
    const link = document.createElement("a");

    detail.classList.add("client-detail");

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

    detail.classList.add("client-detail");

    labelSpan.textContent = `${label}: `;
    link.href = `mailto:${emailAddress}`;
    link.textContent = emailAddress || "Not provided";

    detail.appendChild(labelSpan);
    detail.appendChild(link);

    return detail;
}

function createDateDetail(label, dateValue) {
    const detail = document.createElement("p");
    const labelSpan = document.createElement("span");

    detail.classList.add("client-detail");

    labelSpan.textContent = `${label}: `;
    detail.appendChild(labelSpan);

    if (!dateValue) {
        detail.append("Not scheduled");
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