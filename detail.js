document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const plantName = urlParams.get('name');
    
    const plant = plants.find(p => p.name === plantName);

    if (plant) {
        document.getElementById('plant-name').textContent = plant.name;
        document.getElementById('botanical-name').textContent = plant.botanicalName;
        document.getElementById('habitat').textContent = plant.habitat;
        document.getElementById('uses').textContent = plant.uses;
        document.getElementById('plant-image').src = plant.image;

        const additionalImages = [
            'additional-image1.jpg',
            'additional-image2.jpg'
        ];

        const additionalImagesContainer = document.getElementById('additional-images');
        additionalImages.forEach(imageSrc => {
            const img = document.createElement('img');
            img.src = imageSrc;
            img.alt = `Additional image of ${plant.name}`;
            additionalImagesContainer.appendChild(img);
        });
    } else {
        document.querySelector('.plant-detail').innerHTML = '<p>Plant not found.</p>';
    }
});
