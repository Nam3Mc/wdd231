export default async function fetchServices(url) {
    try {

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Could not load services data");
        }
        const services = await response.json();

        localStorage.setItem('services', JSON.stringify(services))

        } catch (error) {
            console.error(error);
            alert("Something went wrong loading the services.");
        }
}