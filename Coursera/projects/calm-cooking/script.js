const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");
const resultsSection = document.getElementById("search-results");
const resultsGrid = document.getElementById("results-grid");
const noResultsMsg = document.getElementById("no-results");

// ⚡ Replace with YOUR Spoonacular API key
const API_KEY =  "de6d89ed3ea843ad875f2540865167bf";

searchBtn.addEventListener("click", async () => {
  const query = searchInput.value.trim();

  if (!query) {
    alert("Please enter a recipe name!");
    return;
  }

  // Clear old results
  resultsGrid.innerHTML = "";
  noResultsMsg.classList.add("hidden");

  try {
    // Fetch recipes from Spoonacular
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=8&apiKey=${API_KEY}`
    );

    const data = await response.json();

    if (data.results.length === 0) {
      noResultsMsg.classList.remove("hidden");
      resultsSection.classList.remove("hidden");
      return;
    }

    // Show search results
    resultsSection.classList.remove("hidden");

    data.results.forEach(recipe => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.title}">
        <h3>${recipe.title}</h3>
      `;
      resultsGrid.appendChild(card);
    });
  } catch (error) {
    console.error("Error fetching recipes:", error);
    alert("Something went wrong while fetching recipes.");
  }
});
