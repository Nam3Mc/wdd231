export default function timestamp() {
    const timestampInput = document.querySelector("#timestamp");
    const form = document.querySelector("form");

    if (!form || !timestampInput) return;

    form.addEventListener("submit", () => {
        timestampInput.value = new Date().toISOString();
    });
}