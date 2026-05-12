const url = 'data/members.json';
const cards = document.querySelector('#cards');

const gridButton = document.querySelector('#grid');
const listButton = document.querySelector('#list');

/* =========================
   FETCH DATA
========================= */

async function getMembers() {

    try {

        const response = await fetch(url);
        const data = await response.json();

        displayMembers(data.members);

    } catch (error) {
        console.log(error);
    }
}

/* =========================
   DISPLAY MEMBERS
========================= */

const displayMembers = (members) => {

    members.forEach((member) => {

        const card = document.createElement('section');

        const name = document.createElement('h2');
        const image = document.createElement('img');
        const address = document.createElement('p');
        const phone = document.createElement('p');
        const website = document.createElement('a');
        const service = document.createElement('p');

        name.textContent = member.name;

        image.src = `images/${member.image}`;
        image.alt = member.name;
        image.loading = 'lazy';

        address.textContent = member.address;
        phone.textContent = member.phone;

        website.href = member.website;
        website.textContent = 'Visit Website';
        website.target = '_blank';

        service.textContent = member.service;

        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(service);
        card.appendChild(website);

        cards.appendChild(card);
    });
};

getMembers();

/* =========================
   GRID / LIST TOGGLE
========================= */

gridButton.addEventListener('click', () => {
    cards.classList.add('grid');
    cards.classList.remove('list');
});

listButton.addEventListener('click', () => {
    cards.classList.add('list');
    cards.classList.remove('grid');
});

/* =========================
   FOOTER DATES
========================= */

document.querySelector('#currentYear').textContent =
    new Date().getFullYear();

document.querySelector('#lastModified').textContent =
    document.lastModified;