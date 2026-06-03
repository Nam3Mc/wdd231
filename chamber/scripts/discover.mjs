import fetchPlaces from "./discover/fetch-places.mjs"
import displayVisitMessage from "./visit-counter.mjs"
import hamburguerMenu from "./hamburguer-menu.mjs"
import updateFooter from "./update-footer.mjs"

const url = "data/places.json"


displayVisitMessage()
fetchPlaces(url)
hamburguerMenu()
updateFooter()