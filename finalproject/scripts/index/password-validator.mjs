import roleValidator from "./role-validator.mjs";

export default function passwordValidator(user, password) {

    if (user.password != password) {
        alert("Invalid credentials");
    }
    else {
        roleValidator(user)
    }

}