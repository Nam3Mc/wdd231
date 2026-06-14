export default function showPassword() {

    const checkBox = document.querySelector('#show-password')
    const passwordInput = document.querySelector("#password")

    checkBox.addEventListener('click', () => {
        if (passwordInput.type === "password") {
            passwordInput.type = "text"
        }
        else {
            passwordInput.type = "password"
        }
    })
}