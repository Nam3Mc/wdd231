export default function logOut() {
    const btn = document.querySelector('#logout-btn')
    btn.addEventListener('click', () => {
        localStorage.setItem('user', [])
        localStorage.setItem('clients', [])
        localStorage.setItem('technicians', [])
        localStorage.setItem('services', [])
        window.location.href = 'index.html'
    })
}