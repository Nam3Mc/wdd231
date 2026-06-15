import showPassword from "./index/show-password.mjs"
import fetchUser from "./index/user-fetch.mjs"

const loginBtn = document.querySelector('#login-button')
const url = './data/users.json'


loginBtn.addEventListener('click', (event) => {
    event.preventDefault()
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    fetchUser(url, email, password)
})

showPassword()
