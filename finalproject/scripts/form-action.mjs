const params = new URLSearchParams(window.location.search);
const resultsContainer = document.querySelector('#form-results');

const labels = {
    formType: 'Form Type',
    companyName: 'Company Name',
    owner: 'Owner',
    phone: 'Phone',
    email: 'Email',
    address: 'Address',
    city: 'City',
    notes: 'Client Notes'
};

function getLabel(key) {
    return labels[key] || key;
}

function renderFormData() {
    if (!resultsContainer) {
        return;
    }

    if (!window.location.search) {
        resultsContainer.innerHTML = '<p>No form data was found.</p>';
        return;
    }

    const list = document.createElement('dl');

    params.forEach((value, key) => {
        const term = document.createElement('dt');
        term.textContent = getLabel(key);

        const description = document.createElement('dd');
        description.textContent = value || 'Not provided';

        list.appendChild(term);
        list.appendChild(description);
    });

    resultsContainer.appendChild(list);
}

renderFormData();