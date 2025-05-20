let allPlants = [];

document.addEventListener('DOMContentLoaded', () => {
  const plantListContainer = document.getElementById('plants-list');
  const plantDetailsContainer = document.getElementById('plant-details');

  const searchInput = document.getElementById('search-input');
  const filterCategory = document.getElementById('filter-select');
  const filterSeason = document.getElementById('season-select');
  const filterDifficulty = document.getElementById('difficulty-select');
  const filterWater = document.getElementById('water-select');
  const filterSunlight = document.getElementById('sunlight-select');
  const filterTemperature = document.getElementById('temperature-select');
  const filterGrowplace = document.getElementById('growplace-select');
  const filterEdible = document.getElementById('edible-select');
  const filterWatering = document.getElementById('wateringFrequency-select');
  const resetButton = document.getElementById('reset-button');

  if (plantListContainer) {
    async function fetchPlants() {
      try {
        const response = await fetch('../data/plants.json');
        allPlants = await response.json();
        displayPlants(allPlants);
      } catch (error) {
        console.error('Erreur lors du chargement des plantes :', error);
      }
    }

    function displayPlants(plants) {
      plantListContainer.innerHTML = '';
      plants.forEach(plant => {
        const li = document.createElement('li');
        li.className = 'plant-card';
        li.style.padding = "1rem";
        li.style.border = "1px solid var(--color-primary)";
        li.style.borderRadius = "8px";
        li.style.backgroundColor = "var(--color-accent)";
        li.style.boxShadow = "0 2px 4px rgba(0,0,0,0.05)";
        li.style.listStyle = "none";

        li.innerHTML = `
          <a href="details.html?id=${plant.id}" style="text-decoration: none; color: inherit;">
            <h3 style="margin-bottom: 0.25rem;">${plant.name}</h3>
            <p><em>${plant.scientificName}</em></p>
            <p><strong>Catégorie :</strong> ${plant.category}</p>
            <p><strong>Exposition :</strong> ${plant.sunlight}</p>
            <p><strong>Besoins en eau :</strong> ${plant.waterNeeds || plant.water}</p>
            <p><strong>Culture :</strong> ${plant.growPlace || "N/A"}</p>
          </a>
        `;
        plantListContainer.appendChild(li);
      });
    }

    function filterPlants() {
      const query = searchInput?.value?.toLowerCase() || '';
      const category = filterCategory?.value || '';
      const season = filterSeason?.value || '';
      const difficulty = filterDifficulty?.value || '';
      const water = filterWater?.value || '';
      const sunlight = filterSunlight?.value || '';
      const temperature = filterTemperature?.value || '';
      const growplace = filterGrowplace?.value || '';
      const edible = filterEdible?.value || '';
      const wateringFrequency = filterWatering?.value || '';

      const filtered = allPlants.filter(plant => {
        const matchSearch = plant.name.toLowerCase().includes(query);
        const matchCategory = !category || plant.category === category;
        const matchSeason = !season || plant.season === season;
        const matchDifficulty = !difficulty || plant.difficulty === difficulty;
        const matchWater = !water || plant.waterNeeds === water;
        const matchSunlight = !sunlight || plant.sunlight === sunlight;
        const matchTemp = !temperature || plant.temperature === temperature;
        const matchGrow = !growplace || plant.growPlace === growplace;
        const matchEdible = !edible || (plant.edible ? "Comestible" : "Non comestible") === edible;
        const matchWaterFreq = !wateringFrequency || plant.wateringFrequency === wateringFrequency;

        return matchSearch && matchCategory && matchSeason && matchDifficulty && matchWater &&
               matchSunlight && matchTemp && matchGrow && matchEdible && matchWaterFreq;
      });

      displayPlants(filtered);
    }

    [
      searchInput, filterCategory, filterSeason, filterDifficulty,
      filterWater, filterSunlight, filterTemperature,
      filterGrowplace, filterEdible, filterWatering
    ].forEach(el => el?.addEventListener('input', filterPlants));

    resetButton?.addEventListener('click', () => {
      document.querySelectorAll('select').forEach(s => s.value = '');
      if (searchInput) searchInput.value = '';
      displayPlants(allPlants);
    });

    fetchPlants();
  }

  if (plantDetailsContainer) {
    const urlParams = new URLSearchParams(window.location.search);
    const plantId = urlParams.get('id');

    if (plantId) {
      fetch('../data/plants.json')
        .then(res => res.json())
        .then(plants => {
          const plant = plants.find(p => p.id === plantId);
          if (plant) displayPlantDetails(plant);
        })
        .catch(err => console.error('Erreur chargement détail plante :', err));
    }

    function displayPlantDetails(plant) {
      plantDetailsContainer.innerHTML = `
        <h2>${plant.name}</h2>
        <p><em>${plant.scientificName}</em></p>
        <p><strong>Catégorie :</strong> ${plant.category}</p>
        <p><strong>Exposition :</strong> ${plant.sunlight}</p>
        <p><strong>Origine :</strong> ${plant.origin || "Non renseignée"}</p>
        <p><strong>Saison :</strong> ${plant.season || "N/A"}</p>
        <p><strong>Besoins en eau :</strong> ${plant.waterNeeds || plant.water}</p>
        <p><strong>Difficulté :</strong> ${plant.difficulty || "N/A"}</p>
        <p><strong>Temps de pousse :</strong> ${plant.growTime || "N/A"}</p>
        <p><strong>Arrosage :</strong> ${plant.wateringFrequency || "?"} fois/semaine</p>
        <p><strong>Culture :</strong> ${plant.growPlace || "N/A"}</p>
        <p><strong>Comestible :</strong> ${plant.edible ? "Oui" : "Non"}</p>
        <h3>Conseils</h3>
        <p>${plant.care}</p>
      `;
    }
  }

  const gardensMap = document.getElementById('gardens-map');
  if (gardensMap) {
    fetch('../data/gardens.json')
      .then(res => res.json())
      .then(displayGardens)
      .catch(err => console.error("Erreur chargement jardins :", err));

    function displayGardens(gardens) {
      const list = document.getElementById('gardens-list');
      if (!list) return;
      const ul = document.createElement('ul');
      ul.className = 'gardens-grid';

      gardens.forEach(g => {
        const li = document.createElement('li');
        li.innerHTML = `
          <div class="garden-card">
            <h3>${g.name}</h3>
            <p><strong>Adresse :</strong> ${g.address}</p>
            <p>${g.description}</p>
          </div>
        `;
        ul.appendChild(li);
      });

      list.appendChild(ul);
    }
  }

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');

      if (!name.value || !email.value || !message.value) {
        alert("Veuillez remplir tous les champs.");
        return;
      }

      alert("Merci pour votre message !");
      contactForm.reset();
    });
  }
});