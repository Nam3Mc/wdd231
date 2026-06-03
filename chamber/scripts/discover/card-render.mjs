import placeCardCreator from "./place-card-creator.mjs";

export default function cardRenderer(placesList, container) {
    
    placesList.forEach(place => {
        const newPlace = placeCardCreator(place)
        container.appendChild(newPlace)
    });
}