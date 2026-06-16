export default function clientsOptions() {
    
    const options = document.querySelector('#clientId')
    const clients = JSON.parse(localStorage.getItem('clients')) || []
    
    clients.forEach(client => {
        const option = document.createElement('option')
        option.value = client.id
        option.textContent = client.companyName
        options.appendChild(option)
    });

}