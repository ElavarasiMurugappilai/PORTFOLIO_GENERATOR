const titleEl = document.getElementById("recipeTitle");
const descEl = document.getElementById("recipeDescription");
const categoryEl = document.getElementById("recipeCategory");
const imageEl = document.getElementById("recipeImage");
const ingredientList = document.getElementById("ingredientList");
const stepList = document.getElementById("stepList");
const backButton = document.querySelector("[data-back]");

// Read the recipe id from the query string (recipe.html?id=xxx)
const params = new URLSearchParams(window.location.search);
const recipeId = params.get("id");

// Helper to populate ingredients/steps
const renderList = (items, target, ordered = false) => {
    target.innerHTML = "";
    items.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        target.appendChild(li);
    });
    if (ordered) {
        target.classList.add("list--numbered");
    }
};

// Basic fallback if an invalid id is provided
const showError = () => {
    titleEl.textContent = "Recipe not found";
    descEl.textContent = "We couldn't find this recipe. Please return to the homepage.";
    ingredientList.innerHTML = "";
    stepList.innerHTML = "";
    if (imageEl) {
        imageEl.src = "assets/images/biryani.jpg";
        imageEl.alt = "Fallback illustration";
    }
};

const loadRecipe = () => {
    if (!Array.isArray(window.recipeData)) {
        showError();
        return;
    }
    const recipe = window.recipeData.find((item) => item.id === recipeId);
    if (!recipe) {
        showError();
        return;
    }

    titleEl.textContent = recipe.name;
    descEl.textContent = recipe.description;
    categoryEl.textContent = recipe.category;
    imageEl.src = recipe.image;
    imageEl.alt = recipe.name;

    renderList(recipe.ingredients, ingredientList);
    renderList(recipe.steps, stepList, true);
};

// Allow users to navigate back gracefully
if (backButton) {
    backButton.addEventListener("click", () => {
        if (window.history.length > 1) {
            window.history.back();
        } else {
            window.location.href = "index.html";
        }
    });
}

loadRecipe();

