export default function cardCreator(service) {

    const card = document.createElement('section')
    const companyLogo = document.createElement('img')
    const address = document.createElement('p')
    const phone = document.createElement('p')
    const serviceUrl = document.createElement('a')
    card.classList.add('service-card')
    companyLogo.src = service.image
    companyLogo.alt = `${service.name}`
    companyLogo.loading = 'lazy'
    companyLogo.height = '240'
    companyLogo.width = '240'
    address.textContent = service.address
    phone.textContent = service.phone
    serviceUrl.href = service.website
    serviceUrl.textContent = service.name
    card.appendChild(companyLogo)
    card.appendChild(address)
    card.appendChild(phone)
    card.appendChild(serviceUrl)

    return card
}