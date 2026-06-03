import cardRenderer from "./card-render.mjs"

export default function fetchPlaces(url) {

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const placesList = data
            const container = document.querySelector('#discover-container')
            cardRenderer(placesList, container)
        })
}