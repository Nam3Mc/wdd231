export default async function fetchClients(url) {
   
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error("Could not load clients data");
        }

        const clients = await response.json();        
        localStorage.setItem('clients', JSON.stringify(clients))
        
    } catch (error) {
        console.error(error);
        alert("Something went wrong loading the clients.");
    }
}