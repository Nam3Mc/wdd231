export default function getUser(usersList, email) {

    const user = usersList.find(user => user.email === email)
    if (!user) {
        alert("User not found");
    } 
    else {
        return user
    }
}