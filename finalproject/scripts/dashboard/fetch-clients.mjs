export default async function fetchClients(url) {
   
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Could not load clients data");
        }

        const clients = await response.json();
        const options = document.querySelector('#serviceClient')
        
        localStorage.setItem('clients', JSON.stringify(clients))
        clients.forEach(client => {
            const option = document.createElement('option')
            option.value = client.id
            option.textContent = client.companyName
            options.appendChild(option)
        });
        
    } catch (error) {
        console.error(error);
        alert("Something went wrong loading the clients.");
    }
}