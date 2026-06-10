export default function showPassword() {
    const checkBox = document.querySelector('#show-password')
    const passwordInput = document.querySelector("#password")
    const labelText = document.querySelector("#how-password-label")

    checkBox.addEventListener('click', () => {
        if (passwordInput.type === "password") {
            passwordInput.type = "text"
        }
        else {
            passwordInput.type = "password"
        }
    })
}