export default function fetchUser(url, user, password) {
    fetch(url)
        .then(response => response.json())
        .then( data => {
            data.map( user) => {

            })
        })
}