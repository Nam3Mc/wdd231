export default function getTechnician(technicianId) {
    const technicians = JSON.parse(localStorage.getItem('technicians'))
    const techniciansIndexed = Object.fromEntries(
        technicians.map(technician => [technician.id, technician])
    )
    const technician = techniciansIndexed[technicianId]

    return technician
}