import createModal from "./create-modal.mjs"

export default function placeCardCreator(place) {

    
    const placeCard = document.createElement('section')
    
    const name = place.name
    const address = place.address
    const photo = place.photo_url
    const curious_data = place.curious_data
    const title = document.createElement('h2')
    const img = document.createElement('img')
    const addrs = document.createElement('p')
    const data = document.createElement('p')
    const btn = document.createElement('button')
    const modal = createModal(place.historical_review)

    btn.addEventListener('click', () => {
        modal.showModal()
    })
    
    placeCard.classList.add('place-card')
    title.textContent = name
    addrs.textContent = address
    data.textContent = curious_data
    img.src = photo
    img.alt = name
    img.loading = "lazy"
    img.classList.add('place-img')
    btn.textContent = 'Learn More'

    placeCard.appendChild(title )
    placeCard.appendChild( img )
    placeCard.appendChild( data )
    placeCard.appendChild( addrs )
    placeCard.appendChild( btn )
    placeCard.appendChild(modal)

    return placeCard
}