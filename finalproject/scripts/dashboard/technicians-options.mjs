export default function techniciansOptions() {
   
    const options = document.querySelector('#technicianId')
    const technicians = JSON.parse(localStorage.getItem('technicians')) 

    technicians.forEach(technician => {
        if (technician.role === 'technician') {
            const option = document.createElement('option')
            option.value = technician.id
            option.textContent = `${technician.fname} ${technician.lname}`
            options.appendChild(option)
            // console.log(technician)
        }
    });
    
}