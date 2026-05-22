export default function weatherHandler(temp, description) {
    document.querySelector('#current-temp').innerHTML = `<strong>Current Temperature:</strong> ${temp}°C`
    document.querySelector('#conditions').innerHTML = `<strong>Conditions:</strong> ${description}`
}

