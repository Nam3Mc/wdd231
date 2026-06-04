export default function getThankYouInfo() {
    const container = document.querySelector("#card");

    if (!container) return;

    const params = new URLSearchParams(window.location.search);

    const fname = params.get("fname") || "";
    const lname = params.get("lname") || "";
    const email = params.get("email") || "";
    const phone = params.get("phone") || "";
    const org = params.get("org") || "";
    const timestamp = new Date().toISOString();

    const infoBox = document.createElement("div");
    infoBox.classList.add("thank-you-info");

    infoBox.innerHTML = `
        <h2>Your Information</h2>
        <p><strong>Name:</strong> ${fname} ${lname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Organization:</strong> ${org}</p>
        <p><strong>Submitted:</strong> ${timestamp}</p>
    `;

    container.appendChild(infoBox);
}