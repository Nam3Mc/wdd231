import fetchPlaces from "./discover/fetch-places.mjs"
import hamburguerMenu from "./hamburguer-menu.mjs"
import updateFooter from "./update-footer.mjs"

const url = "data/places.json"

fetchPlaces(url)
hamburguerMenu()
updateFooter()