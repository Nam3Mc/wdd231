const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

const displayProphets = (prophets) => {
    prophets.forEach(prophet => {
        const card = document.createElement('section')
        const fullName = document.createElement('h2')
        const dob = document.createElement('p')
        const pob = document.createElement('p')
        const potrait = document.createElement('img')

        console.log(  prophet.name)
        console.log(  prophet.imageurl)

        fullName.innerHTML = `${prophet.name} ${prophet.lastname}`
        dob.innerHTML = `Date of Birth ${prophet.birthdate}`
        pob.innerHTML = `Place of Birth ${prophet.birthplace}`
        potrait.src = prophet.imageurl
        potrait.alt = `${prophet.name} ${prophet.lastname}`
        potrait.loading = 'lazy'
        potrait.height = '340'
        potrait.width = '440'

        card .appendChild(fullName)
        card.appendChild(dob)
        card.appendChild(pob)
        card .appendChild(potrait)
        cards.appendChild(card)
        

    });
}

const getProphetData = async (APIUrl) => {
    try {
        const response = await fetch(APIUrl)
        const data = await response.json()
        displayProphets(data.prophets)
    }
    catch (error) {
        console.log(error)
    }
}

getProphetData(url)