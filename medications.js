const medications = [
    { name: "Paracetamol", description: "Pain reliever and fever reducer", image: "paracetamol.jpg" },
    { name: "Ibuprofen", description: "Anti-inflammatory, pain reliever", image: "ibuprofen.jpg" },
    { name: "Aspirin", description: "Pain reliever, anti-inflammatory", image: "aspirin.jpg" },
    { name: "Antihistamines", description: "Allergy relief", image: "antihistamines.jpg" },
    // Add more medications as needed
];

function displayMedications(medications) {
    const medContainer = document.getElementById('med-container');
    medContainer.innerHTML = '';

    if (medications.length === 0) {
        medContainer.innerHTML = '<p>No medications found</p>';
    } else {
        medications.forEach(medication => {
            const medElement = document.createElement('div');
            medElement.classList.add('medication');
            medElement.innerHTML = `
                <img src="${medication.image}" alt="${medication.name}">
                <h3>${medication.name}</h3>
                <p>${medication.description}</p>
            `;

            medContainer.appendChild(medElement);
        });
    }
}

function searchMedications() {
    const query = document.getElementById('search-bar-med').value.toLowerCase();
    const filteredMedications = medications.filter(medication =>
        medication.name.toLowerCase().includes(query) ||
        medication.description.toLowerCase().includes(query)
    );
    displayMedications(filteredMedications);
}

document.addEventListener('DOMContentLoaded', () => {
    displayMedications(medications);
    document.getElementById('search-bar-med').addEventListener('input', searchMedications);
});
