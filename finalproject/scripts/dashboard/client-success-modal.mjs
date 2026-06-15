export default function clientSuccessModal() {
    const params = new URLSearchParams(window.location.search);

    if (params.get("formType") !== "client") {
        return;
    }

    const companyName = params.get("companyName");
    const owner = params.get("owner");
    const phone = params.get("phone");
    const email = params.get("email");
    const city = params.get("city");

    const dialog = document.createElement("dialog");
    const modalContent = document.createElement("div");
    const closeBtn = document.createElement("button");

    dialog.classList.add("service-dialog");
    modalContent.classList.add("service-dialog-content");

    closeBtn.classList.add("close-dialog-btn");
    closeBtn.type = "button";
    closeBtn.textContent = "Close";

    modalContent.innerHTML = `
        <h2>Client Saved Successfully</h2>

        <p><span>Company:</span> ${companyName}</p>
        <p><span>Owner:</span> ${owner}</p>
        <p><span>Phone:</span> ${phone}</p>
        <p><span>Email:</span> ${email}</p>
        <p><span>City:</span> ${city}</p>
    `;

    modalContent.appendChild(closeBtn);
    dialog.appendChild(modalContent);
    document.body.appendChild(dialog);

    closeBtn.addEventListener("click", () => {
        dialog.close();
    });

    dialog.addEventListener("click", event => {
        if (event.target === dialog) {
            dialog.close();
        }
    });

    dialog.addEventListener("close", () => {
        dialog.remove();
    });

    dialog.showModal();
}