export default function addTechnician() {
    try {

        const formData = document.querySelector('#technician-form')
        const technicians = JSON.parse(localStorage.getItem('technicians'))
        formData.addEventListener('submit', (event) => {
            event.preventDefault()
            const newTechnician = {
                "id": crypto.randomUUID(),
                "fname": formData.fname.value,
                "lname": formData.lname.value,
                "phone": formData.technicianPhone.value,
                "email": formData.technicianEmail.value,
                "role": "technician",
                "salary": formData.salary.value,
                "password": formData.password.value,
                "services": []
            }
            
            technicians.push(newTechnician)
            localStorage.setItem('technicians', JSON.stringify(technicians))
            alert('Technichian added successfully')  
            formData.reset()
        })

    } catch(error) {
        console.error('Error adding service:', error)
        alert('Something went wrong while adding the Technician')
    }
}