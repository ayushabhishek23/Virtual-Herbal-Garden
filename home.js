const featuredPlants = [

];

function displayFeaturedPlants(plants) {
    const container = document.getElementById('featured-plants-container');
    container.innerHTML = '';

    plants.forEach(plant => {
        const plantElement = document.createElement('div');
        plantElement.classList.add('plant');
        plantElement.innerHTML = `
            <img src="${plant.image}" alt="${plant.name}">
            <h3>${plant.name}</h3>
            <p><em>${plant.botanicalName}</em></p>
            <p><strong>Habitat:</strong> ${plant.habitat}</p>
            <p><strong>Uses:</strong> ${plant.uses}</p>
        `;

        container.appendChild(plantElement);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayFeaturedPlants(featuredPlants);
});
