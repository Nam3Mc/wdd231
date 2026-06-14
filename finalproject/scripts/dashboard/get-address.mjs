export default function getAddress(clinetId) {
    const clients = JSON.parse(localStorage.getItem('clients'))

    const clientIndexed = Object.fromEntries(
        clients.map(client => [client.id, client])
    )

    const address = clientIndexed[clinetId].address
    return address
}