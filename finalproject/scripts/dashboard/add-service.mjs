export default function addService() {
    const data = document.querySelector('#service-form')
    const data = document.querySelector('#service-form')
    

    data.addEventListener('submit', (event) => {
        event.preventDefault()
        console.log(data)

        const clientId = data.clientId.value
        const technicianId= data.technicianId.value
        const notes = data.notes.value
        const services = []



    })
}