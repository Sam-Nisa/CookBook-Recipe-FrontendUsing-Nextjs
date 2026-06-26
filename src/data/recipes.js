// recipes.js
// 24 recipes total — 6 for each category (Breakfast, Lunch, Dinner, Dessert)
// Schema matches the Margherita Pizza example you provided.
// categoryId links to your categories.js (1=Breakfast, 2=Lunch, 3=Dinner, 4=Dessert)

const recipes = [

  // ============ BREAKFAST (categoryId: 1) ============
  {
    id: 1,
    categoryId: 1,
    title: "Classic Buttermilk Pancakes",
    category: "Breakfast",
    description: "Fluffy, golden pancakes made with buttermilk for a tender crumb and a slight tang. A weekend breakfast staple that comes together in under 30 minutes and pairs perfectly with maple syrup and fresh berries.",
    prepTime: "10m",
    cookTime: "15m",
    servings: 4,
    difficulty: "Easy",
    heroImage: "/images/recipes/buttermilk-pancakes.png",
    ingredients: {
      batter: [
        "250g All-purpose flour",
        "2 tbsp Granulated sugar",
        "1 tbsp Baking powder",
        "1/2 tsp Baking soda",
        "1/2 tsp Fine sea salt",
        "500ml Buttermilk",
        "2 Large eggs",
        "60g Unsalted butter, melted"
      ],
      toppings: [
        "Maple syrup",
        "Fresh mixed berries",
        "Butter, for serving"
      ]
    },
    chefNotes: [
      "Do not overmix the batter — a few lumps are fine. Overmixing develops gluten and makes pancakes tough.",
      "Let the batter rest for 5 minutes before cooking to allow the baking powder to activate fully."
    ],
    nutrition: { calories: 380, protein: "10g", carbs: "54g", fat: "13g" },
    steps: [
      { stepNumber: 1, title: "Mix Dry Ingredients", image: "/images/recipes/pancakes-step1.jpg", description: "Whisk together flour, sugar, baking powder, baking soda, and salt in a large bowl." },
      { stepNumber: 2, title: "Combine Wet Ingredients", image: "/images/recipes/pancakes-step2.jpg", description: "In a separate bowl, whisk buttermilk, eggs, and melted butter until combined." },
      { stepNumber: 3, title: "Fold Together", image: "/images/recipes/pancakes-step3.jpg", description: "Pour the wet mixture into the dry ingredients and fold gently until just combined." },
      { stepNumber: 4, title: "Cook the Pancakes", image: "/images/recipes/pancakes-step4.jpg", description: "Heat a lightly buttered skillet over medium heat. Pour 1/4 cup of batter per pancake and cook 2–3 minutes per side until golden and cooked through." }
    ],
    tags: ["Breakfast", "Quick", "Vegetarian", "Comfort Food"]
  },
  {
    id: 2,
    categoryId: 1,
    title: "Avocado Toast with Poached Egg",
    category: "Breakfast",
    description: "Creamy mashed avocado on crusty toasted sourdough, topped with a perfectly poached egg. A simple, nutrient-dense breakfast that feels indulgent but takes only 15 minutes to make.",
    prepTime: "5m",
    cookTime: "10m",
    servings: 2,
    difficulty: "Easy",
    heroImage: "/images/recipes/avocado-toast.png",
    ingredients: {
      main: [
        "2 slices Sourdough bread",
        "1 Ripe avocado",
        "2 Large eggs",
        "1 tsp White vinegar",
        "1/2 Lemon, juiced",
        "Chili flakes, to taste",
        "Sea salt and black pepper, to taste",
        "Extra virgin olive oil, for drizzling"
      ]
    },
    chefNotes: [
      "Use the freshest eggs possible — they hold their shape much better when poaching.",
      "Create a gentle whirlpool in the simmering water before adding the egg to help it form a neat shape."
    ],
    nutrition: { calories: 320, protein: "13g", carbs: "24g", fat: "20g" },
    steps: [
      { stepNumber: 1, title: "Toast the Bread", image: "/images/recipes/avocado-step1.jpg", description: "Toast the sourdough slices until golden and crisp." },
      { stepNumber: 2, title: "Mash the Avocado", image: "/images/recipes/avocado-step2.jpg", description: "Mash the avocado with lemon juice, salt, and pepper in a small bowl." },
      { stepNumber: 3, title: "Poach the Eggs", image: "/images/recipes/avocado-step3.jpg", description: "Bring water to a gentle simmer, add vinegar, and poach each egg for 3 minutes until the white is set but the yolk is runny." },
      { stepNumber: 4, title: "Assemble", image: "/images/recipes/avocado-step4.jpg", description: "Spread mashed avocado over the toast, top with a poached egg, and finish with chili flakes and a drizzle of olive oil." }
    ],
    tags: ["Breakfast", "Healthy", "Vegetarian", "Quick"]
  },
  {
    id: 3,
    categoryId: 1,
    title: "Veggie-Loaded Omelette",
    category: "Breakfast",
    description: "A light, fluffy omelette packed with bell peppers, spinach, and melted cheddar. A protein-rich way to start the day, ready in under 15 minutes with minimal cleanup.",
    prepTime: "10m",
    cookTime: "5m",
    servings: 1,
    difficulty: "Easy",
    heroImage: "/images/recipes/veggie-omelette.png",
    ingredients: {
      main: [
        "3 Large eggs",
        "30ml Whole milk",
        "1/4 Red bell pepper, diced",
        "1/4 cup Baby spinach, chopped",
        "30g Cheddar cheese, shredded",
        "1 tbsp Butter",
        "Sea salt and black pepper, to taste"
      ]
    },
    chefNotes: [
      "Whisk the eggs vigorously for about 30 seconds to incorporate air for a fluffier texture.",
      "Cook on medium-low heat — high heat will make the eggs rubbery."
    ],
    nutrition: { calories: 310, protein: "21g", carbs: "4g", fat: "23g" },
    steps: [
      { stepNumber: 1, title: "Whisk the Eggs", image: "/images/recipes/omelette-step1.jpg", description: "Whisk eggs, milk, salt, and pepper together in a bowl until fully combined and slightly frothy." },
      { stepNumber: 2, title: "Sauté the Vegetables", image: "/images/recipes/omelette-step2.jpg", description: "Melt half the butter in a nonstick pan and sauté the bell pepper and spinach for 2 minutes until softened. Remove and set aside." },
      { stepNumber: 3, title: "Cook the Omelette", image: "/images/recipes/omelette-step3.jpg", description: "Add the remaining butter to the pan, pour in the eggs, and let set for 1 minute, gently pushing the edges toward the center." },
      { stepNumber: 4, title: "Fill and Fold", image: "/images/recipes/omelette-step4.jpg", description: "Add the sautéed vegetables and cheese to one half, fold the omelette over, and slide onto a plate." }
    ],
    tags: ["Breakfast", "Vegetarian", "Healthy", "Quick"]
  },

  // ============ LUNCH (categoryId: 2) ============
  {
    id: 4,
    categoryId: 2,
    title: "Classic Caesar Salad with Grilled Chicken",
    category: "Lunch",
    description: "Crisp romaine lettuce tossed in a creamy, garlicky Caesar dressing, topped with crunchy croutons, shaved parmesan, and juicy grilled chicken. A satisfying lunch that's light but filling.",
    prepTime: "15m",
    cookTime: "15m",
    servings: 2,
    difficulty: "Easy",
    heroImage: "/images/recipes/caesar-salad.png",
    ingredients: {
      salad: [
        "2 heads Romaine lettuce, chopped",
        "2 Chicken breasts",
        "1 cup Croutons",
        "50g Parmesan cheese, shaved",
        "1 tbsp Olive oil, for grilling"
      ],
      dressing: [
        "2 Garlic cloves, minced",
        "2 tbsp Mayonnaise",
        "1 tbsp Lemon juice",
        "2 Anchovy fillets, minced",
        "1 tsp Dijon mustard",
        "30g Parmesan cheese, grated",
        "3 tbsp Olive oil"
      ]
    },
    chefNotes: [
      "Pound the chicken breasts to an even thickness before grilling for consistent cooking.",
      "Whisk the dressing ingredients vigorously, adding the olive oil slowly to help it emulsify."
    ],
    nutrition: { calories: 420, protein: "38g", carbs: "14g", fat: "25g" },
    steps: [
      { stepNumber: 1, title: "Grill the Chicken", image: "/images/recipes/caesar-step1.jpg", description: "Season chicken breasts with salt and pepper, then grill over medium-high heat for 6–7 minutes per side until cooked through. Rest, then slice." },
      { stepNumber: 2, title: "Make the Dressing", image: "/images/recipes/caesar-step2.jpg", description: "Whisk garlic, mayonnaise, lemon juice, anchovy, mustard, and parmesan together, then slowly whisk in olive oil." },
      { stepNumber: 3, title: "Toss the Salad", image: "/images/recipes/caesar-step3.jpg", description: "Toss the chopped romaine with the dressing until evenly coated." },
      { stepNumber: 4, title: "Assemble", image: "/images/recipes/caesar-step4.jpg", description: "Top the dressed salad with croutons, shaved parmesan, and sliced grilled chicken." }
    ],
    tags: ["Lunch", "Salad", "High-Protein", "Quick"]
  },
  {
    id: 5,
    categoryId: 2,
    title: "Classic Club Sandwich",
    category: "Lunch",
    description: "A triple-decker sandwich layered with roasted turkey, crispy bacon, lettuce, tomato, and mayonnaise between toasted bread. A diner classic that's easy to make at home.",
    prepTime: "15m",
    cookTime: "10m",
    servings: 2,
    difficulty: "Easy",
    heroImage: "/images/recipes/club-sandwich.png",
    ingredients: {
      main: [
        "6 slices White or sourdough bread",
        "6 strips Bacon",
        "200g Roasted turkey breast, sliced",
        "4 leaves Lettuce",
        "1 Tomato, sliced",
        "4 tbsp Mayonnaise",
        "Sea salt and black pepper, to taste"
      ]
    },
    chefNotes: [
      "Toast the bread just before assembling so the sandwich has a crisp bite, not a soggy one.",
      "Secure each half with a long toothpick or skewer before slicing in two for an easier hold."
    ],
    nutrition: { calories: 460, protein: "28g", carbs: "36g", fat: "23g" },
    steps: [
      { stepNumber: 1, title: "Cook the Bacon", image: "/images/recipes/club-step1.jpg", description: "Fry bacon strips until crisp, then drain on paper towels." },
      { stepNumber: 2, title: "Toast the Bread", image: "/images/recipes/club-step2.jpg", description: "Toast all 6 slices of bread until golden and crisp." },
      { stepNumber: 3, title: "Layer the Sandwich", image: "/images/recipes/club-step3.jpg", description: "Spread mayonnaise on each slice. Layer turkey and lettuce on the first slice, top with a second slice, then add bacon and tomato, and top with the third slice." },
      { stepNumber: 4, title: "Secure and Slice", image: "/images/recipes/club-step4.jpg", description: "Secure with toothpicks and slice diagonally into triangles before serving." }
    ],
    tags: ["Lunch", "Sandwich", "Classic", "Quick"]
  },
  {
    id: 6,
    categoryId: 2,
    title: "Tomato Basil Soup with Grilled Cheese",
    category: "Lunch",
    description: "Velvety roasted tomato soup paired with a crisp, gooey grilled cheese sandwich for dipping. A comforting lunch combo that's better than any can.",
    prepTime: "15m",
    cookTime: "35m",
    servings: 4,
    difficulty: "Easy",
    heroImage: "/images/recipes/tomato-soup-grilled-cheese.png",
    ingredients: {
      soup: [
        "1.2kg Ripe tomatoes, halved",
        "1 Yellow onion, quartered",
        "4 Garlic cloves",
        "500ml Vegetable stock",
        "100ml Heavy cream",
        "1/4 cup Fresh basil leaves",
        "3 tbsp Olive oil",
        "Sea salt and black pepper, to taste"
      ],
      sandwich: [
        "4 slices White bread",
        "4 slices Cheddar cheese",
        "2 tbsp Butter"
      ]
    },
    chefNotes: [
      "Roasting the tomatoes first deepens their sweetness and adds a subtle smoky flavor to the soup.",
      "For an extra crisp grilled cheese, spread a thin layer of mayonnaise on the outside instead of butter."
    ],
    nutrition: { calories: 410, protein: "13g", carbs: "38g", fat: "24g" },
    steps: [
      { stepNumber: 1, title: "Roast the Vegetables", image: "/images/recipes/soup-step1.jpg", description: "Toss tomatoes, onion, and garlic with olive oil, salt, and pepper. Roast at 200°C (400°F) for 25 minutes until softened and caramelized." },
      { stepNumber: 2, title: "Blend the Soup", image: "/images/recipes/soup-step2.jpg", description: "Transfer the roasted vegetables to a blender with stock and basil, and blend until smooth. Return to a pot, stir in cream, and simmer for 5 minutes." },
      { stepNumber: 3, title: "Make the Grilled Cheese", image: "/images/recipes/soup-step3.jpg", description: "Butter the bread slices, fill with cheddar, and grill in a skillet over medium heat for 3–4 minutes per side until golden and the cheese has melted." },
      { stepNumber: 4, title: "Serve", image: "/images/recipes/soup-step4.jpg", description: "Ladle the soup into bowls and serve alongside the grilled cheese sandwiches, cut into triangles for dipping." }
    ],
    tags: ["Lunch", "Comfort Food", "Vegetarian", "Soup"]
  },

  // ============ DINNER (categoryId: 3) ============
  {
    id: 7,
    categoryId: 3,
    title: "Classic Margherita Pizza",
    category: "Dinner",
    description: "The Margherita is the quintessential Neapolitan pizza. Named after Queen Margherita of Savoy in 1889, its colors represent the Italian flag: red tomatoes, white mozzarella, and green basil. This recipe focuses on high-quality ingredients and a blistered, airy crust that brings the taste of Naples to your home kitchen.",
    prepTime: "30m",
    cookTime: "8m",
    servings: 4,
    difficulty: "Intermediate",
    heroImage: "/images/recipes/margherita-pizza.png",
    ingredients: {
      dough: [
        "500g 00 Flour (high protein)",
        "325ml Lukewarm water",
        "10g Fine sea salt",
        "3g Active dry yeast"
      ],
      toppings: [
        "400g San Marzano canned tomatoes",
        "250g Fresh Mozzarella di Bufala",
        "Fresh Basil leaves",
        "Extra Virgin Olive Oil"
      ]
    },
    chefNotes: [
      "For a truly crispy bottom, make sure your pizza stone has preheated for at least 45 minutes.",
      "Fresh mozzarella often holds a lot of water. Slice it and let it drain on paper towels for 30 minutes before using to avoid a soggy pizza."
    ],
    nutrition: { calories: 420, protein: "15g", carbs: "52g", fat: "18g" },
    steps: [
      { stepNumber: 1, title: "Prepare the Dough", image: "/images/recipes/pizza-step1.jpg", description: "Dissolve yeast in water. In a large bowl, mix flour and salt. Gradually add the yeast water, mixing by hand until a shaggy dough forms. Knead for 10–15 minutes until smooth and elastic." },
      { stepNumber: 2, title: "First Rise", image: "/images/recipes/pizza-step2.jpg", description: "Cover the dough with a damp cloth and let it rest at room temperature for 2 hours. Divide into 4 equal balls, place in a tray, and refrigerate for 24 hours for best flavor development." },
      { stepNumber: 3, title: "Shape & Top", image: "/images/recipes/pizza-step3.jpg", description: "Preheat your oven to its highest setting with a pizza stone inside. Gently stretch the dough balls into 12-inch circles. Spread a thin layer of crushed tomatoes, add mozzarella slices, and a few basil leaves." },
      { stepNumber: 4, title: "Bake & Finish", image: "/images/recipes/pizza-step4.jpg", description: "Bake for 7–10 minutes (or 90 seconds in a wood-fired oven) until the crust is charred and cheese is bubbly. Finish with a drizzle of extra virgin olive oil and fresh basil." }
    ],
    tags: ["Italian", "Pizza", "Vegetarian", "Dinner", "Classic"]
  },
  {
    id: 8,
    categoryId: 3,
    title: "Spaghetti alla Carbonara",
    category: "Dinner",
    description: "A Roman classic made with just a handful of ingredients: pasta, eggs, cured pork, and Pecorino Romano. The result is a silky, glossy sauce with no cream needed — pure technique and quality ingredients.",
    prepTime: "10m",
    cookTime: "20m",
    servings: 4,
    difficulty: "Intermediate",
    heroImage: "/images/recipes/carbonara.png",
    ingredients: {
      main: [
        "400g Spaghetti",
        "150g Guanciale (or pancetta), diced",
        "4 Large egg yolks",
        "1 Whole egg",
        "100g Pecorino Romano, finely grated",
        "Freshly cracked black pepper"
      ]
    },
    chefNotes: [
      "Take the pan off the heat before adding the egg mixture — the residual heat of the pasta and pasta water will cook it gently without scrambling.",
      "Reserve at least a cup of pasta water; you'll need it to loosen the sauce to a silky consistency."
    ],
    nutrition: { calories: 580, protein: "27g", carbs: "62g", fat: "24g" },
    steps: [
      { stepNumber: 1, title: "Render the Guanciale", image: "/images/recipes/carbonara-step1.jpg", description: "Cook the diced guanciale in a dry pan over medium heat until crisp and golden, about 8 minutes. Set aside, reserving the rendered fat." },
      { stepNumber: 2, title: "Cook the Pasta", image: "/images/recipes/carbonara-step2.jpg", description: "Boil the spaghetti in well-salted water until al dente, then reserve 1 cup of pasta water before draining." },
      { stepNumber: 3, title: "Whisk the Egg Mixture", image: "/images/recipes/carbonara-step3.jpg", description: "Whisk together egg yolks, whole egg, and grated Pecorino Romano with plenty of black pepper." },
      { stepNumber: 4, title: "Combine and Serve", image: "/images/recipes/carbonara-step4.jpg", description: "Off the heat, toss the hot pasta with the guanciale and its fat, then quickly stir in the egg mixture, adding splashes of pasta water until creamy. Serve immediately with extra cheese." }
    ],
    tags: ["Italian", "Pasta", "Dinner", "Classic"]
  },
  {
    id: 9,
    categoryId: 3,
    title: "Beef and Vegetable Stir-Fry",
    category: "Dinner",
    description: "Thinly sliced beef seared at high heat with crisp vegetables in a savory garlic-ginger sauce. A fast, flavorful weeknight dinner that comes together in under 25 minutes.",
    prepTime: "15m",
    cookTime: "10m",
    servings: 4,
    difficulty: "Easy",
    heroImage: "/images/recipes/beef-stir-fry.png",
    ingredients: {
      main: [
        "500g Beef sirloin, thinly sliced",
        "1 Red bell pepper, sliced",
        "1 cup Broccoli florets",
        "1 Carrot, julienned",
        "3 Garlic cloves, minced",
        "1 tbsp Fresh ginger, grated",
        "2 tbsp Vegetable oil"
      ],
      sauce: [
        "3 tbsp Soy sauce",
        "1 tbsp Oyster sauce",
        "1 tsp Sesame oil",
        "1 tsp Cornstarch",
        "2 tbsp Water"
      ]
    },
    chefNotes: [
      "Slice the beef against the grain for maximum tenderness.",
      "Keep the heat high and don't overcrowd the pan — cook the beef in batches if needed for a proper sear."
    ],
    nutrition: { calories: 390, protein: "32g", carbs: "16g", fat: "20g" },
    steps: [
      { stepNumber: 1, title: "Mix the Sauce", image: "/images/recipes/stirfry-step1.jpg", description: "Whisk together soy sauce, oyster sauce, sesame oil, cornstarch, and water in a small bowl." },
      { stepNumber: 2, title: "Sear the Beef", image: "/images/recipes/stirfry-step2.jpg", description: "Heat 1 tbsp oil in a wok over high heat. Sear the beef in batches for 1–2 minutes per side until browned. Remove and set aside." },
      { stepNumber: 3, title: "Stir-Fry the Vegetables", image: "/images/recipes/stirfry-step3.jpg", description: "Add remaining oil to the wok, then stir-fry garlic, ginger, bell pepper, broccoli, and carrot for 3–4 minutes until just tender." },
      { stepNumber: 4, title: "Combine and Finish", image: "/images/recipes/stirfry-step4.jpg", description: "Return the beef to the wok, pour in the sauce, and toss everything together for 1–2 minutes until glossy and heated through. Serve over rice." }
    ],
    tags: ["Dinner", "Asian-Inspired", "Quick", "High-Protein"]
  },

  // ============ DESSERT (categoryId: 4) ============
  {
    id: 10,
    categoryId: 4,
    title: "Classic Tiramisu",
    category: "Dessert",
    description: "A no-bake Italian dessert of espresso-soaked ladyfingers layered with a rich mascarpone cream, dusted with cocoa powder. Elegant, simple, and best made a day ahead.",
    prepTime: "30m (plus chilling)",
    cookTime: "0m",
    servings: 8,
    difficulty: "Intermediate",
    heroImage: "/images/recipes/tiramisu.png",
    ingredients: {
      main: [
        "6 Large egg yolks",
        "150g Granulated sugar",
        "500g Mascarpone cheese",
        "300ml Strong espresso, cooled",
        "2 tbsp Coffee liqueur (optional)",
        "24 Ladyfinger biscuits",
        "Unsweetened cocoa powder, for dusting"
      ]
    },
    chefNotes: [
      "Dip the ladyfingers quickly — 1 second per side is enough. Soaking too long makes the layers soggy.",
      "Tiramisu tastes best after chilling for at least 6 hours, or ideally overnight, allowing the flavors to meld."
    ],
    nutrition: { calories: 390, protein: "7g", carbs: "30g", fat: "26g" },
    steps: [
      { stepNumber: 1, title: "Whisk the Yolks", image: "/images/recipes/tiramisu-step1.jpg", description: "Whisk egg yolks and sugar together over a double boiler until thickened and pale, about 5 minutes. Cool slightly." },
      { stepNumber: 2, title: "Fold in Mascarpone", image: "/images/recipes/tiramisu-step2.jpg", description: "Gently fold the mascarpone into the cooled egg yolk mixture until smooth and combined." },
      { stepNumber: 3, title: "Layer the Tiramisu", image: "/images/recipes/tiramisu-step3.jpg", description: "Mix espresso with coffee liqueur. Dip each ladyfinger briefly and arrange in a dish. Spread half the mascarpone cream over the top, then repeat with a second layer of soaked ladyfingers and cream." },
      { stepNumber: 4, title: "Chill and Serve", image: "/images/recipes/tiramisu-step4.jpg", description: "Cover and refrigerate for at least 6 hours, or overnight. Dust generously with cocoa powder before serving." }
    ],
    tags: ["Dessert", "Italian", "No-Bake", "Make-Ahead"]
  },
  {
    id: 11,
    categoryId: 4,
    title: "Molten Chocolate Lava Cake",
    category: "Dessert",
    description: "Decadent individual chocolate cakes with a warm, gooey molten center. Ready in under 20 minutes, this restaurant-style dessert is surprisingly simple to make at home.",
    prepTime: "10m",
    cookTime: "12m",
    servings: 4,
    difficulty: "Easy",
    heroImage: "/images/recipes/lava-cake.png",
    ingredients: {
      main: [
        "115g Dark chocolate, chopped",
        "115g Unsalted butter",
        "2 Large eggs",
        "2 Large egg yolks",
        "50g Granulated sugar",
        "30g All-purpose flour",
        "Butter and cocoa powder, for the ramekins"
      ]
    },
    chefNotes: [
      "Use good-quality dark chocolate (60–70% cacao) for the best flavor and texture.",
      "Bake just until the edges are set but the center still looks slightly underdone — this is what creates the molten core."
    ],
    nutrition: { calories: 420, protein: "7g", carbs: "32g", fat: "29g" },
    steps: [
      { stepNumber: 1, title: "Melt the Chocolate", image: "/images/recipes/lava-step1.jpg", description: "Melt the chocolate and butter together over a double boiler, stirring until smooth. Let cool slightly." },
      { stepNumber: 2, title: "Whisk Eggs and Sugar", image: "/images/recipes/lava-step2.jpg", description: "In a separate bowl, whisk together eggs, egg yolks, and sugar until pale and slightly thickened." },
      { stepNumber: 3, title: "Combine and Fill", image: "/images/recipes/lava-step3.jpg", description: "Fold the melted chocolate into the egg mixture, then fold in the flour. Pour into buttered and cocoa-dusted ramekins." },
      { stepNumber: 4, title: "Bake and Serve", image: "/images/recipes/lava-step4.jpg", description: "Bake at 220°C (425°F) for 10–12 minutes until the edges are set but the center is still soft. Let sit for 1 minute, then invert onto plates and serve immediately." }
    ],
    tags: ["Dessert", "Chocolate", "Quick", "Indulgent"]
  },
  {
    id: 12,
    categoryId: 4,
    title: "New York Style Cheesecake",
    category: "Dessert",
    description: "A dense, creamy, and rich baked cheesecake with a buttery graham cracker crust. Classic New York style means tangy, smooth, and indulgent — best chilled overnight before serving.",
    prepTime: "30m (plus chilling)",
    cookTime: "1h 10m",
    servings: 10,
    difficulty: "Intermediate",
    heroImage: "/images/recipes/cheesecake.png",
    ingredients: {
      crust: [
        "200g Graham crackers, crushed",
        "80g Unsalted butter, melted",
        "2 tbsp Granulated sugar"
      ],
      filling: [
        "900g Cream cheese, softened",
        "200g Granulated sugar",
        "4 Large eggs",
        "200ml Sour cream",
        "1 tbsp Vanilla extract",
        "2 tbsp All-purpose flour"
      ]
    },
    chefNotes: [
      "Bring all dairy ingredients to room temperature before mixing to avoid lumps in the batter.",
      "Bake the cheesecake in a water bath to prevent cracking and ensure even, gentle cooking."
    ],
    nutrition: { calories: 480, protein: "8g", carbs: "36g", fat: "34g" },
    steps: [
      { stepNumber: 1, title: "Make the Crust", image: "/images/recipes/cheesecake-step1.jpg", description: "Mix graham cracker crumbs, melted butter, and sugar. Press firmly into the base of a springform pan and chill for 15 minutes." },
      { stepNumber: 2, title: "Beat the Filling", image: "/images/recipes/cheesecake-step2.jpg", description: "Beat cream cheese and sugar until smooth. Add eggs one at a time, then mix in sour cream, vanilla, and flour until just combined." },
      { stepNumber: 3, title: "Bake in a Water Bath", image: "/images/recipes/cheesecake-step3.jpg", description: "Pour the filling over the crust. Wrap the pan in foil, place in a larger roasting pan with hot water, and bake at 160°C (320°F) for 60–70 minutes until the center is just set." },
      { stepNumber: 4, title: "Chill and Serve", image: "/images/recipes/cheesecake-step4.jpg", description: "Cool to room temperature, then refrigerate for at least 6 hours, or overnight, before slicing and serving." }
    ],
    tags: ["Dessert", "Baked", "Classic", "Make-Ahead"]
  },
  {
    id: 101,
    categoryId: 1,
    title: "Matcha Green Tea Pancakes",
    category: "Breakfast",
    description: "Vibrant and fluffy matcha pancakes that bring a subtle earthy sweetness to your morning. Topped with fresh berries and a drizzle of honey.",
    prepTime: "10m",
    cookTime: "15m",
    servings: 2,
    difficulty: "Easy",
    heroImage: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1200&q=80",
    ingredients: {
      batter: [
        "150g All-purpose flour",
        "1 tbsp Matcha powder",
        "2 tbsp Sugar",
        "1 tsp Baking powder",
        "1 Large egg",
        "200ml Milk"
      ]
    },
    chefNotes: [
      "Use ceremonial grade matcha for the best color and flavor."
    ],
    nutrition: { calories: 310, protein: "8g", carbs: "45g", fat: "10g" },
    steps: [
      { stepNumber: 1, title: "Mix", description: "Whisk dry ingredients, then fold in wet ingredients." },
      { stepNumber: 2, title: "Cook", description: "Cook on a buttered skillet until bubbles form, then flip." }
    ],
    tags: ["Breakfast", "Vegetarian", "Quick"]
  },
  {
    id: 102,
    categoryId: 2,
    title: "Quinoa Power Salad Bowl",
    category: "Lunch",
    description: "A nutrient-packed bowl loaded with fluffy quinoa, roasted sweet potatoes, fresh greens, and a tangy lemon-tahini dressing.",
    prepTime: "15m",
    cookTime: "25m",
    servings: 2,
    difficulty: "Easy",
    heroImage: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80",
    ingredients: {
      salad: [
        "1 cup Cooked quinoa",
        "1 Sweet potato, cubed and roasted",
        "2 cups Mixed greens",
        "1/4 cup Pumpkin seeds"
      ],
      dressing: [
        "2 tbsp Tahini",
        "1 tbsp Lemon juice",
        "1 tsp Maple syrup"
      ]
    },
    chefNotes: [
      "Roast the sweet potatoes ahead of time to make assembling this salad a breeze."
    ],
    nutrition: { calories: 420, protein: "12g", carbs: "55g", fat: "18g" },
    steps: [
      { stepNumber: 1, title: "Assemble", description: "Place greens in a bowl and top with quinoa and roasted sweet potatoes." },
      { stepNumber: 2, title: "Dress", description: "Whisk dressing ingredients and drizzle over the salad. Top with seeds." }
    ],
    tags: ["Lunch", "Vegan", "Healthy"]
  },
  {
    id: 103,
    categoryId: 3,
    title: "Pan-Seared Garlic Butter Salmon",
    category: "Dinner",
    description: "Perfectly crispy-skinned salmon fillets bathed in a rich garlic butter sauce with a hint of fresh lemon and parsley.",
    prepTime: "5m",
    cookTime: "12m",
    servings: 2,
    difficulty: "Intermediate",
    heroImage: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1200&q=80",
    ingredients: {
      main: [
        "2 Salmon fillets (skin-on)",
        "Salt and pepper to taste",
        "2 tbsp Olive oil"
      ],
      sauce: [
        "3 tbsp Butter",
        "3 Garlic cloves, minced",
        "1 tbsp Fresh lemon juice",
        "1 tbsp Parsley, chopped"
      ]
    },
    chefNotes: [
      "Pat the salmon skin completely dry before cooking to ensure maximum crispiness."
    ],
    nutrition: { calories: 510, protein: "34g", carbs: "2g", fat: "38g" },
    steps: [
      { stepNumber: 1, title: "Sear", description: "Season salmon. Heat oil in a pan and sear skin-side down for 6 mins." },
      { stepNumber: 2, title: "Baste", description: "Flip salmon, add butter, garlic, and lemon juice. Baste salmon with the sauce until cooked." }
    ],
    tags: ["Dinner", "Seafood", "Low-Carb"]
  }
];

export default recipes;