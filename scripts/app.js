/* ------------------------------------------------
   Recipe Data
------------------------------------------------ */
const recipes = [
    {
        id: "biryani",
        name: "Hyderabadi Biryani",
        image: "assets/images/biryani.jpg",
        description: "Layered basmati rice cooked with aromatic spices and tender meat or veggies.",
        ingredients: [
            "2 cups basmati rice",
            "400 g chicken or vegetables",
            "1 cup yogurt",
            "2 onions, sliced",
            "2 tbsp biryani masala",
            "Whole spices (bay, cardamom, cloves)",
            "Fresh mint and coriander",
            "Ghee & oil, salt"
        ],
        steps: [
            "Rinse and soak basmati rice for 30 minutes, then parboil with salt and whole spices.",
            "Marinate chicken/veggies with yogurt, biryani masala, ginger-garlic paste, and salt for 1 hour.",
            "Fry onions until golden. Layer marinated mix, fried onions, herbs, and rice in a heavy pot.",
            "Drizzle ghee, cover tightly, and cook on low heat for 25 minutes until rice is fluffy.",
            "Rest for 10 minutes, gently fluff, and serve hot."
        ],
        category: "Main Course"
    },
    {
        id: "dosa",
        name: "Crispy Masala Dosa",
        image: "assets/images/dosa.jpg",
        description: "South Indian rice-lentil crêpe filled with spiced potato masala.",
        ingredients: [
            "2 cups idli rice",
            "1 cup urad dal",
            "1/2 cup poha",
            "1 tsp fenugreek seeds",
            "Potato masala filling",
            "Oil or ghee",
            "Salt"
        ],
        steps: [
            "Soak rice, dal, poha, and fenugreek separately for 4 hours.",
            "Grind to a smooth batter, mix, add salt, and ferment overnight.",
            "Spread batter thinly on a hot tawa, drizzle oil, and cook until crisp.",
            "Place potato masala in the center, fold, and serve with chutney and sambar."
        ],
        category: "Breakfast"
    },
    {
        id: "paneer-butter-masala",
        name: "Paneer Butter Masala",
        image: "assets/images/paneer-butter-masala.jpg",
        description: "Creamy tomato gravy enriched with butter, spices, and soft paneer cubes.",
        ingredients: [
            "250 g paneer cubes",
            "3 tomatoes",
            "1 onion",
            "2 tbsp butter + cream",
            "Cashew paste",
            "Garam masala",
            "Kasuri methi",
            "Spices & salt"
        ],
        steps: [
            "Sauté onions, tomatoes, cashews, and spices; blend into a smooth puree.",
            "Melt butter, add puree, chili powder, and simmer.",
            "Add paneer cubes, cream, crushed kasuri methi, and adjust seasoning.",
            "Simmer for 3 minutes and serve with naan or rice."
        ],
        category: "Vegetarian"
    },
    {
        id: "chicken-curry",
        name: "Homestyle Chicken Curry",
        image: "assets/images/chicken-curry.jpg",
        description: "Comforting curry with caramelized onions, tomatoes, and warming spices.",
        ingredients: [
            "500 g chicken pieces",
            "2 onions, finely chopped",
            "2 tomatoes",
            "1/2 cup yogurt",
            "Ginger-garlic paste",
            "Curry leaves",
            "Spice powders & whole spices"
        ],
        steps: [
            "Heat oil, temper whole spices, and sauté onions until golden.",
            "Add ginger-garlic paste, tomatoes, and cook until masala releases oil.",
            "Add chicken, spice powders, yogurt, and salt.",
            "Cover and cook until chicken is tender; garnish with coriander."
        ],
        category: "Main Course"
    },
    {
        id: "veg-fried-rice",
        name: "Veg Fried Rice",
        image: "assets/images/veg-fried-rice.jpg",
        description: "Wok-tossed rice with colorful veggies, soy, and sesame notes.",
        ingredients: [
            "3 cups cooked rice",
            "1 cup mixed veggies",
            "2 tbsp spring onions",
            "2 tsp soy sauce",
            "1 tsp vinegar",
            "Sesame oil",
            "Pepper & salt"
        ],
        steps: [
            "Use chilled cooked rice for best texture.",
            "Stir-fry garlic, spring onions, and veggies on high heat.",
            "Add rice, soy sauce, vinegar, pepper, and salt.",
            "Toss well until heated through and garnish with greens."
        ],
        category: "Quick Meal"
    },
    {
        id: "gulab-jamun",
        name: "Gulab Jamun",
        image: "assets/images/gulab-jamun.jpg",
        description: "Soft milk-solid dumplings soaked in cardamom-rose syrup.",
        ingredients: [
            "1 cup milk powder",
            "1/2 cup flour",
            "1/4 tsp baking soda",
            "2 tbsp ghee",
            "Warm milk to knead",
            "Sugar syrup with cardamom & rose",
            "Oil for frying"
        ],
        steps: [
            "Combine dry ingredients, rub in ghee, and add milk to form a soft dough.",
            "Rest for 10 minutes, divide into smooth balls without cracks.",
            "Fry on low heat until deep golden.",
            "Soak immediately in warm sugar syrup for at least 1 hour before serving."
        ],
        category: "Dessert"
    }
];

window.recipeData = recipes; // expose so recipe page can reuse data

/* ------------------------------------------------
   Homepage Rendering & Search
------------------------------------------------ */
const grid = document.getElementById("recipeGrid");
const searchInput = document.querySelector("[data-search]");
const emptyState = document.getElementById("emptyState");

if (grid && searchInput && emptyState) {
    // Build recipe cards dynamically
    const renderCards = (items) => {
        grid.innerHTML = "";
        items.forEach((recipe) => {
            const card = document.createElement("article");
            card.className = "card";
            card.innerHTML = `
                <a class="card__link" href="recipe.html?id=${recipe.id}">
                    <img class="card__image" src="${recipe.image}" alt="${recipe.name}">
                    <div class="card__body">
                        <p class="card__category">${recipe.category}</p>
                        <h2 class="card__title">${recipe.name}</h2>
                        <p class="card__description">${recipe.description}</p>
                    </div>
                </a>
            `;
            grid.appendChild(card);
        });
    };

    // Filter cards live as the user types
    const handleSearch = (event) => {
        const query = event.target.value.trim().toLowerCase();
        const filtered = recipes.filter((recipe) =>
            recipe.name.toLowerCase().includes(query)
        );

        if (filtered.length === 0) {
            emptyState.hidden = false;
            grid.setAttribute("aria-hidden", "true");
        } else {
            emptyState.hidden = true;
            grid.removeAttribute("aria-hidden");
        }

        renderCards(filtered);
    };

    searchInput.addEventListener("input", handleSearch);
    renderCards(recipes);
}

