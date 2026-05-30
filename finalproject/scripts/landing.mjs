import fetchUser from "./landing/user-fetch.mjs"

const logInForm = document.querySelector('#login-form')
const url = './data/users.json'

logInForm.addEventListener('submit', () => {
    event.preventDefault()
    
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    const fetch = fetchUser(url, email, password)

})