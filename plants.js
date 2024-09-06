const plants = [
    { name: "Tulsi", botanicalName: "Ocimum tenuiflorum", habitat: "Tropical regions", uses: "Cold, cough, and respiratory issues", image: "Tulsi.jpg" },
    { name: "Neem", botanicalName: "Azadirachta indica", habitat: "Subtropical regions", uses: "Skin care, blood purification", image: "neem.jpg" },
    { name: "Aloe Vera", botanicalName: "Aloe barbadensis", habitat: "Arid climates", uses: "Skin care, digestive health", image: "Aloe vera.jpg" },
    { name: "Ashwagandha", botanicalName: "Withania somnifera", habitat: "Dry regions", uses: "Stress relief, energy boost", image: "ashwagandha.jpg" },
    { name: "Brahmi", botanicalName: "Bacopa monnieri", habitat: "Wet and marshy areas", uses: "Memory enhancement, anxiety relief", image: "brahmi.jpg" },
    { name: "Ginger", botanicalName: "Zingiber officinale", habitat: "Tropical regions", uses: "Digestive aid, anti-inflammatory", image: "ginger.jpg" },
    { name: "Turmeric", botanicalName: "Curcuma longa", habitat: "Tropical regions", uses: "Anti-inflammatory, skin care", image: "turmeric.jpg" },
    { name: "Mint", botanicalName: "Mentha", habitat: "Temperate regions", uses: "Digestive health, respiratory relief", image: "mint.jpg" },
    { name: "Shatavari", botanicalName: "Asparagus racemosus", habitat: "Humid regions", uses: "Women's health, immune boost", image: "shatavari 3.jpg" },
    { name: "Amalaki", botanicalName: "Phyllanthus emblica", habitat: "Subtropical regions", uses: "Immunity, digestive health", image: "amalaki.jpg" },
    { name: "Giloy", botanicalName: "Tinospora cordifolia", habitat: "Tropical regions", uses: "Immunity, detoxification", image: "giloy.jpg" },
    { name: "Moringa", botanicalName: "Moringa oleifera", habitat: "Subtropical regions", uses: "Nutrition, blood pressure control", image: "moringa.jpg" },
    { name: "Licorice", botanicalName: "Glycyrrhiza glabra", habitat: "Temperate regions", uses: "Soothing cough, digestive aid", image: "licorice.jpg" },
    { name: "Ginkgo", botanicalName: "Ginkgo biloba", habitat: "Temperate regions", uses: "Treating blood disorders, Sharpens memory", image: "Ginkgo.jpg" },
    { name: "Fenugreek(Methi)", botanicalName: "Trigonella foenum-graecum", habitat: "Semi-arid regions", uses: "Digestive health, blood sugar control", image: "Fenugreek.jpg" },
    { name: "Feverfew", botanicalName: "Tanacetum parthenium L", habitat: "Temperate regions", uses: "Fevers, Headaches, Arthritis", image: "Feverfew.jpg" },
    { name: "Peppermint", botanicalName: "Mentha piperita", habitat: "Temperate regions", uses: "Digestive health, headache relief", image: "peppermint.jpg" },
    { name: "Lemongrass", botanicalName: "Cymbopogon citratus", habitat: "Tropical regions", uses: "Digestive aid, anti-inflammatory", image: "Lemmon grass.jpg" },
    { name: "Saffron", botanicalName: "Crocus sativus", habitat: "Subtropical regions", uses: "Mood enhancer, skin care", image: "saffron.jpg" },
    { name: "Cardamom", botanicalName: "Elettaria cardamomum", habitat: "Tropical regions", uses: "Digestive aid, respiratory health", image: "cardamom.jpg" },
    { name: "Eucalyptus", botanicalName: "Globulus Labill", habitat: "Tropical regions", uses: "Digestive aid, respiratory health", image: "Eucalyptus.jpg" },
    { name: "Chamomile", botanicalName: "", habitat: "Tropical regions", uses: "Digestive aid, respiratory health", image: "Chamomile.jpg" },
    { name: "Mullein", botanicalName: "", habitat: "Tropical regions", uses: "Digestive aid, respiratory health", image: "Mullein.jpg" },
    { name: "Valerian", botanicalName: "", habitat: "Tropical regions", uses: "Digestive aid, respiratory health", image: "Valerian.jpg" },
    { name: "Slippery Elm", botanicalName: "", habitat: "Tropical regions", uses: "Digestive aid, respiratory health", image: "Slippery elm.jpg" },
    { name: "Dandelion", botanicalName: "", habitat: "Tropical regions", uses: "Digestive aid, respiratory health", image: "Dandelion.jpg" },
    { name: "Kava", botanicalName: "", habitat: "Tropical regions", uses: "Digestive aid, respiratory health", image: "Kava.jpg" },
    { name: "Sage", botanicalName: "", habitat: "Tropical regions", uses: "Digestive aid, respiratory health", image: "Sage.jpg" },
    { name: "Milk Thistle", botanicalName: "", habitat: "Tropical regions", uses: "Digestive aid, respiratory health", image: "Milk thistle.jpg" },
    { name: "Bitter Melon", botanicalName: "", habitat: "Tropical regions", uses: "Digestive aid, respiratory health", image: "Bitter melon.jpg" },
    { name: "Calendula", botanicalName: "", habitat: "Tropical regions", uses: "Digestive aid, respiratory health", image: "Calendula.jpg" },
    { name: "Blue Cohosh", botanicalName: "", habitat: "Tropical regions", uses: "Digestive aid, respiratory health", image: "Blue cohosh.jpg" },
    { name: "Ashitaba", botanicalName: "", habitat: "Tropical regions", uses: "Digestive aid, respiratory health", image: "Ashitaba.jpg" },
    { name: "Arnica", botanicalName: "", habitat: "Tropical regions", uses: "Digestive aid, respiratory health", image: "Arnica.jpg" },
    { name: "Goldenseal", botanicalName: "", habitat: "Tropical regions", uses: "Digestive aid, respiratory health", image: "Goldenseal.jpg" },
    { name: "Black Cohosh", botanicalName: "", habitat: "Tropical regions", uses: "Digestive aid, respiratory health", image: "Black cohosh.jpg" },
    { name: "Catnip", botanicalName: "", habitat: "Tropical regions", uses: "Digestive aid, respiratory health", image: "Catnip.jpg" },
    { name: "Bitter Leaf", botanicalName: "", habitat: "Tropical regions", uses: "Digestive aid, respiratory health", image: "Bitter leaf.jpg" },
    { name: "Hibiscus", botanicalName: "", habitat: "Tropical regions", uses: "Digestive aid, respiratory health", image: "Hibiscus.jpg" },
    { name: "Rosemary", botanicalName: "", habitat: "Tropical regions", uses: "Digestive aid, respiratory health", image: "Rosemary.jpg" },
    { name: "Boswellia", botanicalName: "", habitat: "Tropical regions", uses: "Digestive aid, respiratory health", image: "Boswellia.jpg" },
    { name: "Echinacea", botanicalName: "", habitat: "Tropical regions", uses: "Digestive aid, respiratory health", image: "Echinacea.jpg" },
    { name: "Kudzu", botanicalName: "", habitat: "Tropical regions", uses: "Digestive aid, respiratory health", image: "Kudzu.jpg" },
    { name: "Lesser Burdock", botanicalName: "", habitat: "Tropical regions", uses: "Digestive aid, respiratory health", image: "Lesser burdock.jpg" },
    { name: "Horsetail", botanicalName: "", habitat: "Tropical regions", uses: "Digestive aid, respiratory health", image: "Horsetail.jpg" },
    { name: "Comfrey", botanicalName: "", habitat: "Tropical regions", uses: "Digestive aid, respiratory health", image: "Comfrey.jpg" },
    { name: "Passion Flower", botanicalName: "", habitat: "Tropical regions", uses: "Digestive aid, respiratory health", image: "Passion flower.jpg" },
    { name: "Devil's Claw", botanicalName: "", habitat: "Tropical regions", uses: "Digestive aid, respiratory health", image: "Devil's claw.jpg" },
    { name: "Yarrow", botanicalName: "", habitat: "Tropical regions", uses: "Digestive aid, respiratory health", image: "Yarrow.jpg" },
    { name: "Rhodiola", botanicalName: "", habitat: "Tropical regions", uses: "Digestive aid, respiratory health", image: "Rhodiora.jpg" },
    { name: "Lemon Balm", botanicalName: "", habitat: "Tropical regions", uses: "Digestive aid, respiratory health", image: "Lemon balm.jpg" },
    { name: "Gotukola", botanicalName: "", habitat: "Tropical regions", uses: "Digestive aid, respiratory health", image: "Gotukola.jpg" },
    { name: "Sage Brush", botanicalName: "", habitat: "Tropical regions", uses: "Digestive aid, respiratory health", image: "Sage brush.jpg" },
    { name: "Datura", botanicalName: "", habitat: "Tropical regions", uses: "Digestive aid, respiratory health", image: "Datura.jpg" },
    { name: "Suma Root", botanicalName: "", habitat: "Tropical regions", uses: "Digestive aid, respiratory health", image: "Suma Root.jpg" },
    { name: "Astragalus", botanicalName: "", habitat: "Tropical regions", uses: "Digestive aid, respiratory health", image: "Astragalus.jpg" },
    { name: "Marshmallow", botanicalName: "", habitat: "Tropical regions", uses: "Digestive aid, respiratory health", image: "Marshmallow.jpg" },
    { name: "Baiklal Skullcap", botanicalName: "", habitat: "Tropical regions", uses: "Digestive aid, respiratory health", image: "Baiklal Skullcap.jpg" },
    { name: "Chanca Piedra", botanicalName: "", habitat: "Tropical regions", uses: "Digestive aid, respiratory health", image: "Chanca Piedra.jpg" },
    { name: "Ephedra", botanicalName: "", habitat: "Tropical regions", uses: "Digestive aid, respiratory health", image: "Ephedra.jpg" },
];

function displayPlants(plants) {
    const plantContainer = document.getElementById('plant-container');
    plantContainer.innerHTML = '';

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

function searchPlants() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const filteredPlants = plants.filter(plant => 
        plant.name.toLowerCase().includes(query) ||
        plant.botanicalName.toLowerCase().includes(query) ||
        plant.habitat.toLowerCase().includes(query) ||
        plant.uses.toLowerCase().includes(query)
    );
    displayPlants(filteredPlants);
}

document.addEventListener('DOMContentLoaded', () => {
    displayPlants(plants);
    document.getElementById('search-bar').addEventListener('input', searchPlants);
});
