// Original Recipe Data (DO NOT MUTATE)
const recipes = [
  { name: "Pasta Alfredo", difficulty: "easy", time: 20 },
  { name: "Chicken Curry", difficulty: "medium", time: 45 },
  { name: "Beef Wellington", difficulty: "hard", time: 90 },
  { name: "Grilled Cheese", difficulty: "easy", time: 10 },
  { name: "Caesar Salad", difficulty: "easy", time: 15 },
  { name: "Biryani", difficulty: "hard", time: 60 },
  { name: "Tacos", difficulty: "medium", time: 25 },
  { name: "Chocolate Cake", difficulty: "medium", time: 50 }
];

// Application State
let currentFilter = "all";
let currentSort = null;

// PURE FILTER FUNCTION
const filterRecipes = (recipeList, filterType) => {
  if (filterType === "all") return recipeList;

  if (filterType === "quick") {
    return recipeList.filter(recipe => recipe.time < 30);
  }

  return recipeList.filter(recipe => recipe.difficulty === filterType);
};

// PURE SORT FUNCTION
const sortRecipes = (recipeList, sortType) => {
  if (!sortType) return recipeList;

  const sorted = [...recipeList]; // prevent mutation

  if (sortType === "name") {
    return sorted.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sortType === "time") {
    return sorted.sort((a, b) => a.time - b.time);
  }

  return sorted;
};

// RENDER FUNCTION
const renderRecipes = (recipeList) => {
  const container = document.getElementById("recipeContainer");
  container.innerHTML = "";

  recipeList.forEach(recipe => {
    const card = document.createElement("div");
    card.className = "recipe-card";

    card.innerHTML = `
      <h3>${recipe.name}</h3>
      <span class="badge ${recipe.difficulty}">
        ${recipe.difficulty.toUpperCase()}
      </span>
      <div class="time">⏱ ${recipe.time} mins</div>
    `;

    container.appendChild(card);
  });
};

// CENTRAL UPDATE FUNCTION
const updateDisplay = () => {
  const filtered = filterRecipes(recipes, currentFilter);
  const sorted = sortRecipes(filtered, currentSort);
  renderRecipes(sorted);
};

// EVENT LISTENERS
document.querySelectorAll("[data-filter]").forEach(button => {
  button.addEventListener("click", (e) => {
    currentFilter = e.target.dataset.filter;
    updateDisplay();
  });
});

document.querySelectorAll("[data-sort]").forEach(button => {
  button.addEventListener("click", (e) => {
    currentSort = e.target.dataset.sort;
    updateDisplay();
  });
});

// Initial Load
updateDisplay();
