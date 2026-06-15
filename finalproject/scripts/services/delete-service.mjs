export default function deleteService(service) {
    const confirmDelete = confirm("Are you sure you want to delete this service?");

    if (!confirmDelete) {
        return false;
    }

    const services = JSON.parse(localStorage.getItem("services")) || [];

    const updatedServices = services.filter(storedService => {
        return storedService.id !== service.id;
    });

    localStorage.setItem("services", JSON.stringify(updatedServices));

    alert("Service deleted successfully");

    return true;
}