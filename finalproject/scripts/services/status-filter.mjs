import renderServices from "./render-services.mjs"
import serviceCard from "./service-card.mjs"

export default function statusFilter() {
    const filterBtn = document.querySelectorAll('.filter-btn')
    const container = document.querySelector('#services-container')
    
    filterBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            const services = JSON.parse(localStorage.getItem('services'))

            container.innerHTML = ''
            filterBtn.forEach(btn => {
                btn.classList.remove('active-filter')
            })

            if (btn.textContent.trim().toLowerCase() === "all") {
                btn.classList.add('active-filter')
                renderServices()
            }
            else {
                btn.classList.toggle('active-filter')
                    const status = btn.textContent.trim().toLowerCase()
                    services.forEach(service => {
                        if (service.status === status) {
                            const newService = serviceCard(service)
                            container.appendChild(newService)
                        }
                    })
            }
        })
    })
}