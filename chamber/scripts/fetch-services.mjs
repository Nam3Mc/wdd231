import serviceSelector from "./service-selector.mjs"
import renderSpotLight from "./render-spot-light.mjs"

export default function fetchServices(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {

            const selectedServices = serviceSelector(data.members)
            renderSpotLight(selectedServices)
        })
}