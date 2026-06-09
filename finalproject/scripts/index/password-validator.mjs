export default function passwordValidator(user, password) {

    if (user.password != password) {
        alert("Invalid credentials");
    }
    else {
        window.location.href = 'dashboard.html'
    }

}