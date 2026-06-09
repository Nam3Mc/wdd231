import getUser from "./get-user.mjs"
import passwordValidator from "./password-validator.mjs"

export default function fetchUser(url, email, password) {
    
    fetch(url)
        .then(response => response.json())
        .then( data => {
            const user = getUser(data, email)
            if (user) {
                passwordValidator(user, password)
            }
        })
}