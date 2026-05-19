const url = './data/members.json';
const cards = document.querySelector('#cards');
const menuBtn = document.querySelector('.hamburger');
const navBar = document.querySelector('.navigation');
const listBtn = document.querySelector('#list');
const gridBtn = document.querySelector('#grid');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('show')
    navBar.classList.toggle('show')
})

listBtn.addEventListener('click', () => {
    cards.classList.add('list')

    listBtn.classList.add('active')
    gridBtn.classList.remove('active')
})

gridBtn.addEventListener('click', () => {
    cards.classList.remove('list')

    gridBtn.classList.add('active')
    listBtn.classList.remove('active')
})

document.getElementById('currentYear').textContent = new Date().getFullYear()
document.getElementById('lastModified').textContent = document.lastModified

const displayServises = (services) => {
    services.forEach(service => {
        
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

        cards.appendChild(card)

    });
}

const getServices = async (APIUrl) => {
    try {
        const response = await fetch(APIUrl)
        const data = await response.json()
        displayServises(data.members)
    }
    catch (error) {
        console.log(error)
    }
}

getServices(url)