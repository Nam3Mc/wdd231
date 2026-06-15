export default function roleVerificator() {
    const user = JSON.parse(localStorage.getItem("user") || "null");

    if (!user) {
        window.location.href = "index.html";
        return;
    }

    if (!user.role) {
        window.location.href = "index.html";
        return;
    }

    if (user.role !== "admin") {
        window.location.href = "tech-portal.html";
        return;
    }
}