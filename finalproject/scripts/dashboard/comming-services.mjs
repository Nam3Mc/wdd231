import getClient from "./get-client.mjs"
import getTechnician from "./get-technichian.mjs"

export default function comingServices() {
    const services = JSON.parse(localStorage.getItem('services'))
    const container = document.querySelector('.services-panel')
    
    services.forEach(service => {
        
        const client = getClient(service.clientId)
        const technician = getTechnician(service.technicianId)
        const div = document.createElement('div')
        const company = document.createElement('p')
        const address = document.createElement('p')
        const techName = document.createElement('p')
        const date = document.createElement('p')

        div.classList.add('service-card')
        company.textContent = client.companyName
        address.textContent = client.address
        techName.textContent = `Technician: ${technician.fname} ${technician.lname}`
        date.textContent = `${service.serviceDate} • ${service.serviceTime}`

        div.appendChild(company)
        div.appendChild(address)
        div.appendChild(techName)
        div.appendChild(date)

        container.appendChild(div)

    })

}