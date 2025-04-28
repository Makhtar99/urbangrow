// Main JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the plants list page
    if (document.getElementById('plants-list')) {
        fetchPlants();
    }
    
    // Check if we're on the plant details page
    if (document.getElementById('plant-details')) {
        const urlParams = new URLSearchParams(window.location.search);
        const plantId = urlParams.get('id');
        if (plantId) {
            fetchPlantDetails(plantId);
        }
    }
    
    // Check if we're on the gardens page
    if (document.getElementById('gardens-map')) {
        fetchGardens();
    }
    
    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
});

// Fetch plants data
async function fetchPlants() {
    try {
        const response = await fetch('../data/plants.json');
        const plants = await response.json();
        displayPlants(plants);
    } catch (error) {
        console.error('Error fetching plants:', error);
    }
}

// Display plants list
function displayPlants(plants) {
    const plantsContainer = document.getElementById('plants-list');
    if (!plantsContainer) return;
    
    const plantsList = document.createElement('ul');
    plantsList.className = 'plants-grid';
    
    plants.forEach(plant => {
        const plantItem = document.createElement('li');
        plantItem.innerHTML = `
            <a href="details.html?id=${plant.id}">
                <img src="../assets/img/plants/${plant.image}" alt="${plant.name}">
                <h3>${plant.name}</h3>
            </a>
        `;
        plantsList.appendChild(plantItem);
    });
    
    plantsContainer.appendChild(plantsList);
}

// Fetch plant details
async function fetchPlantDetails(plantId) {
    try {
        const response = await fetch('../data/plants.json');
        const plants = await response.json();
        const plant = plants.find(p => p.id === plantId);
        
        if (plant) {
            displayPlantDetails(plant);
        }
    } catch (error) {
        console.error('Error fetching plant details:', error);
    }
}

// Display plant details
function displayPlantDetails(plant) {
    const detailsContainer = document.getElementById('plant-details');
    if (!detailsContainer) return;
    
    detailsContainer.innerHTML = `
        <h2>${plant.name}</h2>
        <img src="../assets/img/plants/${plant.image}" alt="${plant.name}">
        <p class="plant-scientific-name">${plant.scientificName}</p>
        <div class="plant-info">
            <h3>Description</h3>
            <p>${plant.description}</p>
            
            <h3>Conditions de culture</h3>
            <ul>
                <li><strong>Soleil :</strong> ${plant.sunlight}</li>
                <li><strong>Eau :</strong> ${plant.water}</li>
                <li><strong>Type de sol :</strong> ${plant.soil}</li>
            </ul>
            
            <h3>Conseils d'entretien</h3>
            <p>${plant.care}</p>
        </div>
    `;
}

// Fetch gardens data
async function fetchGardens() {
    try {
        const response = await fetch('../data/gardens.json');
        const gardens = await response.json();
        displayGardens(gardens);
    } catch (error) {
        console.error('Error fetching gardens:', error);
    }
}

// Display gardens
function displayGardens(gardens) {
    const gardensList = document.getElementById('gardens-list');
    if (!gardensList) return;
    
    const gardensUl = document.createElement('ul');
    gardensUl.className = 'gardens-grid';
    
    gardens.forEach(garden => {
        const gardenItem = document.createElement('li');
        gardenItem.innerHTML = `
            <div class="garden-card">
                <h3>${garden.name}</h3>
                <p><strong>Adresse :</strong> ${garden.address}</p>
                <p>${garden.description}</p>
            </div>
        `;
        gardensUl.appendChild(gardenItem);
    });
    
    gardensList.appendChild(gardensUl);
    
    // Simple map implementation could go here
    // For production use, you'd want to use a proper maps API
}

// Handle contact form submission
function handleContactSubmit(event) {
    event.preventDefault();
    
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    // Basic validation
    if (!nameInput.value || !emailInput.value || !messageInput.value) {
        alert('Veuillez remplir tous les champs du formulaire.');
        return;
    }
    
    // In a real application, you would send this data to a server
    alert('Merci pour votre message ! Nous vous contacterons bientôt.');
    
    // Reset the form
    event.target.reset();
}
