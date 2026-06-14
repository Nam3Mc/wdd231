export default function getClient(clinetId) {
    const clients = JSON.parse(localStorage.getItem('clients'))

    const clientIndexed = Object.fromEntries(
        clients.map(client => [client.id, client])
    )

    const client = clientIndexed[clinetId]
    return client
}