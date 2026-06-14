import getAddress from "./get-address.mjs"

export default function addService() {
    try {

        const formData = document.querySelector('#service-form')
        
        formData.addEventListener('submit', (event) => {
            event.preventDefault()
            const serviceType = document.querySelectorAll('input[type="checkbox"]:checked')
            const services = JSON.parse(localStorage.getItem('services'))
            const servicesValue = []
            const address = getAddress(formData.clientId.value)
            
            serviceType.forEach(service => {
                servicesValue.push(service.value)
            })
            
            const newService = {
                "id": crypto.randomUUID(),
                "clientId": formData.clientId.value,
                "technicianId": formData.technicianId.value,
                "serviceName": servicesValue,
                "description": formData.notes.value,
                "price":formData.price.value,
                "durationHours": null,
                "status": "pending",
                "serviceDate": formData.serviceDate.value,
                "serviceTime": formData.serviceTime.value,
                "address": address,
                "certificateIssued": false,
                "productsUsed": []
            }

            services.push(newService)
            localStorage.setItem('services', JSON.stringify(services))
            alert('Service added successfully')
            formData.reset()
        })
    } catch(error) {
        console.error('Error adding service:', error)
        alert('Something went wrong while adding the service')
    }
}