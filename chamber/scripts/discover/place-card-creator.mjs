export default function placeCardCreator(place) {

    
    const placeCard = document.createElement('section')
    
    const name = place.name
    const address = place.address
    const photo = place.photo_url
    const review = place.historical_review
    const title = document.createElement('h2')
    const img = document.createElement('img')
    const addrs = document.createElement('p')
    const description = document.createElement('p')
    const btn = document.createElement('button')
    
    placeCard.classList.add('place-card')
    title.textContent = name
    addrs.textContent = address
    description.textContent = review
    img.src = photo
    img.alt = name
    img.loading = "lazy"
    img.classList.add('place-img')
    btn.textContent = 'Learn More'

    placeCard.appendChild(title )
    placeCard.appendChild( img )
    placeCard.appendChild( description )
    placeCard.appendChild( addrs )
    placeCard.appendChild( btn )

    return placeCard
}