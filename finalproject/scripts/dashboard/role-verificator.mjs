export default function roleVerificator() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user.role) {
        window.location.href = 'index.htm'
    }
    if (user.role !== 'admin') {
        window.location.href = 'tech-portal.html'
    }
}