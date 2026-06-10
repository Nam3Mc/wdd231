export default async function fetchTechnicians(url) {
   
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Could not load technicians data");
        }

        const technicians = await response.json();
        const options = document.querySelector('#technicians')

        technicians.forEach(technician => {
            if (technician.role === 'technician') {

                const option = document.createElement('option')
                option.value = technician.id
                option.textContent = `${technician.fname} ${technician.lname}`
                options.appendChild(option)
            }
        });
        
    } catch (error) {
        console.error(error);
        alert("Something went wrong loading the technicians.");
    }
}