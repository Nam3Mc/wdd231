import passwordValidator from "./password-validator.mjs";

export default async function fetchUser(url, email, password) {

    try {
        
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Could not load users data");
        }

        const data = await response.json();

        const users = Object.fromEntries(
            data.map(user => [user.email, user])
        );

        const user = users[email];

        if (!user) {
            alert("Invalid credentials");
            return;
        }

        passwordValidator(user, password);

    } catch (error) {
        console.error(error);
        alert("Something went wrong loading the users.");
    }
}