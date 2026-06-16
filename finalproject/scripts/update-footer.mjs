export default function updateFooter () {
    document.getElementById('currentYear').textContent = new Date().getFullYear()
    document.getElementById('lastModified').textContent = document.lastModified
}


