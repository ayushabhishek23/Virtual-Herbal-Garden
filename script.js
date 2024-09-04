// JavaScript for the Virtual Herbal Garden

const plants = [
    { name: "Tulsi", botanicalName: "Ocimum tenuiflorum", habitat: "Tropical regions", uses: "Cold, cough, and respiratory issues", image: "Tulsi.jpg" },
    { name: "Neem", botanicalName: "Azadirachta indica", habitat: "Subtropical regions", uses: "Skin care, blood purification", image: "neem.jpg" },
    { name: "Aloe Vera", botanicalName: "Aloe barbadensis", habitat: "Arid climates", uses: "Skin care, digestive health", image: "aloevera.jpg" },
    { name: "Ashwagandha", botanicalName: "Withania somnifera", habitat: "Dry regions", uses: "Stress relief, energy boost", image: "ashwagandha.jpg" },
    { name: "Brahmi", botanicalName: "Bacopa monnieri", habitat: "Wet and marshy areas", uses: "Memory enhancement, anxiety relief", image: "brahmi.jpg" },
    { name: "Ginger", botanicalName: "Zingiber officinale", habitat: "Tropical regions", uses: "Digestive aid, anti-inflammatory", image: "ginger.jpg" },
    { name: "Turmeric", botanicalName: "Curcuma longa", habitat: "Tropical regions", uses: "Anti-inflammatory, skin care", image: "turmeric.jpg" },
    { name: "Mint", botanicalName: "Mentha", habitat: "Temperate regions", uses: "Digestive health, respiratory relief", image: "mint.jpg" },
    { name: "Shatavari", botanicalName: "Asparagus racemosus", habitat: "Humid regions", uses: "Women's health, immune boost", image: "shatavari.jpg" },
    { name: "Amalaki", botanicalName: "Phyllanthus emblica", habitat: "Subtropical regions", uses: "Immunity, digestive health", image: "amalaki.jpg" },
    { name: "Giloy", botanicalName: "Tinospora cordifolia", habitat: "Tropical regions", uses: "Immunity, detoxification", image: "giloy.jpg" },
    { name: "Moringa", botanicalName: "Moringa oleifera", habitat: "Subtropical regions", uses: "Nutrition, blood pressure control", image: "moringa.jpg" },
    { name: "Licorice", botanicalName: "Glycyrrhiza glabra", habitat: "Temperate regions", uses: "Soothing cough, digestive aid", image: "licorice.jpg" },
    { name: "Basil", botanicalName: "Ocimum basilicum", habitat: "Tropical regions", uses: "Digestive aid, anti-inflammatory", image: "basil.jpg" },
    { name: "Fenugreek", botanicalName: "Trigonella foenum-graecum", habitat: "Semi-arid regions", uses: "Digestive health, blood sugar control", image: "fenugreek.jpg" },
    { name: "Holy Basil", botanicalName: "Ocimum sanctum", habitat: "Tropical regions", uses: "Respiratory health, stress relief", image: "holybasil.jpg" },
    { name: "Peppermint", botanicalName: "Mentha piperita", habitat: "Temperate regions", uses: "Digestive health, headache relief", image: "peppermint.jpg" },
    { name: "Lemongrass", botanicalName: "Cymbopogon citratus", habitat: "Tropical regions", uses: "Digestive aid, anti-inflammatory", image: "lemongrass.jpg" },
    { name: "Saffron", botanicalName: "Crocus sativus", habitat: "Subtropical regions", uses: "Mood enhancer, skin care", image: "saffron.jpg" },
    { name: "Cardamom", botanicalName: "Elettaria cardamomum", habitat: "Tropical regions", uses: "Digestive aid, respiratory health", image: "cardamom.jpg" }
];

function displayPlants(plants) {
    const plantContainer = document.getElementById('plant-container');
    plantContainer.innerHTML = ''; // Clear previous content

    if (plants.length === 0) {
        document.getElementById('no-results').style.display = 'block';
    } else {
        document.getElementById('no-results').style.display = 'none';

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
            plantContainer.appendChild(plantElement);
        });
    }
}

// Initial display of plants
displayPlants(plants);

// Search functionality
document.getElementById('search-bar').addEventListener('input', function(e) {
    const searchQuery = e.target.value.toLowerCase();
    const filteredPlants = plants.filter(plant => 
        plant.name.toLowerCase().includes(searchQuery) ||
        plant.botanicalName.toLowerCase().includes(searchQuery)
    );
    displayPlants(filteredPlants);
});
