export default function roleValidator(user) {
    
    localStorage.setItem("user", JSON.stringify(user));

    if (user.role === "admin") {
        window.location.href = "dashboard.html";
    } else {
        window.location.href = "tech-portal.html";
    }
}