// import clientsOptions from "./clients-options.mjs";

// export default function addClient() {
//     const form = document.querySelector('#client-form');

//     form.addEventListener('submit', (event) => {
//         event.preventDefault();

//         const companyName = form.companyName.value.trim();
//         const owner = form.owner.value.trim();
//         const phone = form.phone.value.trim();
//         const email = form.email.value.trim().toLowerCase();
//         const address = form.address.value.trim();
//         const city = form.city.value.trim();
//         const notes = form.notes.value.trim();

//         const data = JSON.parse(localStorage.getItem('clients')) || [];

//         const emailAlreadyExists = data.some(client => {
//             return client.email.toLowerCase() === email;
//         });

//         if (emailAlreadyExists) {
//             alert("Client already exists");
//             return;
//         }

//         const newClient = {
//             id: crypto.randomUUID(),
//             companyName: companyName,
//             owner: owner,
//             phone: phone,
//             email: email,
//             address: address,
//             city: city,
//             notes: notes
//         };

//         data.push(newClient);
//         localStorage.setItem('clients', JSON.stringify(data));
//         alert("Client saved successfully");
//         form.reset();
//         clientsOptions()

//     });
// }

import clientsOptions from "./clients-options.mjs";

export default function addClient() {
    const form = document.querySelector('#client-form');

    if (!form) {
        return;
    }

    form.addEventListener('submit', (event) => {
        const companyName = form.companyName.value.trim();
        const owner = form.owner.value.trim();
        const phone = form.phone.value.trim();
        const email = form.email.value.trim().toLowerCase();
        const address = form.address.value.trim();
        const city = form.city.value.trim();
        const notes = form.notes.value.trim();

        const data = JSON.parse(localStorage.getItem('clients')) || [];

        const emailAlreadyExists = data.some(client => {
            return client.email.toLowerCase() === email;
        });

        if (emailAlreadyExists) {
            event.preventDefault();
            alert("Client already exists");
            return;
        }

        const newClient = {
            id: crypto.randomUUID(),
            companyName: companyName,
            owner: owner,
            phone: phone,
            email: email,
            address: address,
            city: city,
            notes: notes
        };

        data.push(newClient);
        localStorage.setItem('clients', JSON.stringify(data));

        clientsOptions();

        /*
            Do not use form.reset().
            The browser will now submit the form normally
            to form-action.html using URL Search Params.
        */
    });
}