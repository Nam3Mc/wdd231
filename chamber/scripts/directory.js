import cardCreator from "./cards-creator.mjs";

const url = './data/members.json';
const cards = document.querySelector('#cards');
const listBtn = document.querySelector('#list');
const gridBtn = document.querySelector('#grid');

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

        const card = cardCreator(service)
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