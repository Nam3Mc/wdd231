export default async function fetchTechnicians(url) {
   
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Could not load technicians data");
        }
        const technicians = await response.json();
        localStorage.setItem('technicians', JSON.stringify(technicians))

    } catch (error) {
        console.error(error);
        alert("Something went wrong loading the technicians.");
    }
}