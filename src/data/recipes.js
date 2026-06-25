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
  {
    id: 4,
    categoryId: 1,
    title: "Overnight Oats with Berries",
    category: "Breakfast",
    description: "A no-cook, make-ahead breakfast of creamy oats soaked overnight in milk and yogurt, topped with fresh berries and a drizzle of honey. Perfect for busy mornings.",
    prepTime: "5m",
    cookTime: "0m",
    servings: 2,
    difficulty: "Easy",
    heroImage: "/images/recipes/overnight-oats.jpg",
    ingredients: {
      main: [
        "150g Rolled oats",
        "300ml Whole milk (or plant-based milk)",
        "100g Greek yogurt",
        "2 tbsp Honey",
        "1 tsp Vanilla extract",
        "1 cup Mixed berries",
        "2 tbsp Chia seeds"
      ]
    },
    chefNotes: [
      "Let the oats sit for at least 6 hours, but overnight gives the best creamy texture.",
      "Adjust the milk amount if you prefer a thinner or thicker consistency the next morning."
    ],
    nutrition: { calories: 340, protein: "13g", carbs: "52g", fat: "9g" },
    steps: [
      { stepNumber: 1, title: "Combine Ingredients", image: "/images/recipes/oats-step1.jpg", description: "In a jar or container, mix oats, milk, yogurt, honey, vanilla, and chia seeds until well combined." },
      { stepNumber: 2, title: "Refrigerate Overnight", image: "/images/recipes/oats-step2.jpg", description: "Cover and refrigerate for at least 6 hours, or overnight, until the oats have softened.", timer_seconds: null },
      { stepNumber: 3, title: "Top and Serve", image: "/images/recipes/oats-step3.jpg", description: "Stir the oats, top with fresh berries, and add an extra drizzle of honey before serving." }
    ],
    tags: ["Breakfast", "Healthy", "No-Cook", "Make-Ahead", "Vegetarian"]
  },
  {
    id: 5,
    categoryId: 1,
    title: "French Toast with Cinnamon",
    category: "Breakfast",
    description: "Thick slices of brioche soaked in a cinnamon-vanilla custard, pan-fried until golden and crisp on the outside, soft and custardy within. A classic indulgent breakfast treat.",
    prepTime: "10m",
    cookTime: "10m",
    servings: 4,
    difficulty: "Easy",
    heroImage: "/images/recipes/french-toast.jpg",
    ingredients: {
      main: [
        "8 slices Brioche bread",
        "4 Large eggs",
        "200ml Whole milk",
        "1 tsp Ground cinnamon",
        "1 tsp Vanilla extract",
        "2 tbsp Granulated sugar",
        "30g Butter, for frying"
      ],
      toppings: [
        "Maple syrup",
        "Powdered sugar",
        "Fresh strawberries"
      ]
    },
    chefNotes: [
      "Slightly stale bread works best as it absorbs the custard without falling apart.",
      "Don't soak the bread too long — 20 seconds per side is enough to avoid sogginess."
    ],
    nutrition: { calories: 410, protein: "13g", carbs: "48g", fat: "18g" },
    steps: [
      { stepNumber: 1, title: "Make the Custard", image: "/images/recipes/french-toast-step1.jpg", description: "Whisk together eggs, milk, cinnamon, vanilla, and sugar in a shallow dish." },
      { stepNumber: 2, title: "Soak the Bread", image: "/images/recipes/french-toast-step2.jpg", description: "Dip each slice of brioche into the custard for about 20 seconds per side, letting excess drip off." },
      { stepNumber: 3, title: "Fry Until Golden", image: "/images/recipes/french-toast-step3.jpg", description: "Melt butter in a skillet over medium heat and cook each slice for 2–3 minutes per side until golden brown." },
      { stepNumber: 4, title: "Serve", image: "/images/recipes/french-toast-step4.jpg", description: "Stack the slices, dust with powdered sugar, and serve with maple syrup and fresh strawberries." }
    ],
    tags: ["Breakfast", "Sweet", "Vegetarian", "Comfort Food"]
  },
  {
    id: 6,
    categoryId: 1,
    title: "Breakfast Burrito",
    category: "Breakfast",
    description: "A hearty, portable breakfast wrapped in a warm flour tortilla, filled with scrambled eggs, crispy bacon, melted cheese, and salsa. Great for meal-prepping busy mornings.",
    prepTime: "10m",
    cookTime: "15m",
    servings: 4,
    difficulty: "Easy",
    heroImage: "/images/recipes/breakfast-burrito.jpg",
    ingredients: {
      filling: [
        "6 Large eggs",
        "6 strips Bacon",
        "1 cup Cheddar cheese, shredded",
        "1 cup Hash browns, cooked",
        "1/2 cup Salsa",
        "1 tbsp Butter",
        "Sea salt and black pepper, to taste"
      ],
      wrap: [
        "4 Large flour tortillas"
      ]
    },
    chefNotes: [
      "Warm the tortillas briefly in a dry pan before filling — this makes them more pliable and prevents tearing.",
      "These freeze well: wrap tightly in foil and reheat in the oven or microwave for a quick meal."
    ],
    nutrition: { calories: 480, protein: "24g", carbs: "38g", fat: "26g" },
    steps: [
      { stepNumber: 1, title: "Cook the Bacon", image: "/images/recipes/burrito-step1.jpg", description: "Cook bacon strips in a skillet until crisp. Remove, drain on paper towels, and crumble." },
      { stepNumber: 2, title: "Scramble the Eggs", image: "/images/recipes/burrito-step2.jpg", description: "Melt butter in the same skillet, add beaten eggs, and scramble gently until just set." },
      { stepNumber: 3, title: "Warm the Tortillas", image: "/images/recipes/burrito-step3.jpg", description: "Warm each tortilla in a dry pan for about 20 seconds per side." },
      { stepNumber: 4, title: "Assemble and Roll", image: "/images/recipes/burrito-step4.jpg", description: "Layer scrambled eggs, hash browns, bacon, cheese, and salsa onto each tortilla. Fold in the sides and roll tightly into a burrito." }
    ],
    tags: ["Breakfast", "Hearty", "Meal-Prep", "Mexican-Inspired"]
  },

  // ============ LUNCH (categoryId: 2) ============
  {
    id: 7,
    categoryId: 2,
    title: "Classic Caesar Salad with Grilled Chicken",
    category: "Lunch",
    description: "Crisp romaine lettuce tossed in a creamy, garlicky Caesar dressing, topped with crunchy croutons, shaved parmesan, and juicy grilled chicken. A satisfying lunch that's light but filling.",
    prepTime: "15m",
    cookTime: "15m",
    servings: 2,
    difficulty: "Easy",
    heroImage: "/images/recipes/caesar-salad.jpg",
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
    id: 8,
    categoryId: 2,
    title: "Classic Club Sandwich",
    category: "Lunch",
    description: "A triple-decker sandwich layered with roasted turkey, crispy bacon, lettuce, tomato, and mayonnaise between toasted bread. A diner classic that's easy to make at home.",
    prepTime: "15m",
    cookTime: "10m",
    servings: 2,
    difficulty: "Easy",
    heroImage: "/images/recipes/club-sandwich.jpg",
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
    id: 9,
    categoryId: 2,
    title: "Tomato Basil Soup with Grilled Cheese",
    category: "Lunch",
    description: "Velvety roasted tomato soup paired with a crisp, gooey grilled cheese sandwich for dipping. A comforting lunch combo that's better than any can.",
    prepTime: "15m",
    cookTime: "35m",
    servings: 4,
    difficulty: "Easy",
    heroImage: "/images/recipes/tomato-soup-grilled-cheese.jpg",
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
  {
    id: 10,
    categoryId: 2,
    title: "Chicken Caesar Wrap",
    category: "Lunch",
    description: "All the flavors of a Caesar salad rolled into a portable wrap. Grilled chicken, crisp romaine, parmesan, and creamy dressing wrapped in a soft tortilla — ideal for lunch on the go.",
    prepTime: "15m",
    cookTime: "10m",
    servings: 2,
    difficulty: "Easy",
    heroImage: "/images/recipes/chicken-caesar-wrap.jpg",
    ingredients: {
      main: [
        "2 Large flour tortillas",
        "1 Chicken breast, grilled and sliced",
        "1 cup Romaine lettuce, shredded",
        "30g Parmesan cheese, shaved",
        "3 tbsp Caesar dressing",
        "1/4 cup Croutons, crushed"
      ]
    },
    chefNotes: [
      "Warm the tortillas slightly before rolling to prevent cracking.",
      "Roll tightly and wrap in parchment paper to hold the shape if eating on the go."
    ],
    nutrition: { calories: 390, protein: "29g", carbs: "30g", fat: "17g" },
    steps: [
      { stepNumber: 1, title: "Grill the Chicken", image: "/images/recipes/wrap-step1.jpg", description: "Season and grill the chicken breast for 6–7 minutes per side until cooked through, then slice thinly." },
      { stepNumber: 2, title: "Assemble the Filling", image: "/images/recipes/wrap-step2.jpg", description: "Toss the romaine lettuce with Caesar dressing and crushed croutons in a bowl." },
      { stepNumber: 3, title: "Fill the Tortilla", image: "/images/recipes/wrap-step3.jpg", description: "Lay the tortilla flat, layer the dressed lettuce, sliced chicken, and shaved parmesan in the center." },
      { stepNumber: 4, title: "Roll and Serve", image: "/images/recipes/wrap-step4.jpg", description: "Fold in the sides and roll tightly into a wrap. Slice in half and serve immediately." }
    ],
    tags: ["Lunch", "Wrap", "Quick", "High-Protein"]
  },
  {
    id: 11,
    categoryId: 2,
    title: "Quinoa Buddha Bowl",
    category: "Lunch",
    description: "A vibrant, nutrient-packed bowl of fluffy quinoa, roasted sweet potato, chickpeas, and fresh vegetables, finished with a tangy tahini dressing. A wholesome plant-based lunch.",
    prepTime: "15m",
    cookTime: "25m",
    servings: 2,
    difficulty: "Easy",
    heroImage: "/images/recipes/quinoa-buddha-bowl.jpg",
    ingredients: {
      bowl: [
        "150g Quinoa, uncooked",
        "1 Sweet potato, cubed",
        "1 can Chickpeas, drained and rinsed",
        "1 cup Baby spinach",
        "1/2 Cucumber, diced",
        "1 Avocado, sliced",
        "2 tbsp Olive oil"
      ],
      dressing: [
        "3 tbsp Tahini",
        "1 Lemon, juiced",
        "1 Garlic clove, minced",
        "2–3 tbsp Water, to thin"
      ]
    },
    chefNotes: [
      "Roast the chickpeas alongside the sweet potato for extra crunch and flavor.",
      "Thin the tahini dressing gradually with water until it reaches a pourable consistency."
    ],
    nutrition: { calories: 460, protein: "16g", carbs: "54g", fat: "22g" },
    steps: [
      { stepNumber: 1, title: "Cook the Quinoa", image: "/images/recipes/buddha-step1.jpg", description: "Rinse quinoa and cook in salted water according to package instructions, about 15 minutes, then fluff with a fork." },
      { stepNumber: 2, title: "Roast the Vegetables", image: "/images/recipes/buddha-step2.jpg", description: "Toss sweet potato and chickpeas with olive oil, salt, and pepper, and roast at 200°C (400°F) for 20–25 minutes until golden." },
      { stepNumber: 3, title: "Make the Dressing", image: "/images/recipes/buddha-step3.jpg", description: "Whisk tahini, lemon juice, and garlic together, adding water gradually until smooth and pourable." },
      { stepNumber: 4, title: "Assemble the Bowl", image: "/images/recipes/buddha-step4.jpg", description: "Divide quinoa between bowls, top with roasted vegetables, spinach, cucumber, and avocado, then drizzle with tahini dressing." }
    ],
    tags: ["Lunch", "Vegan", "Healthy", "Plant-Based"]
  },
  {
    id: 12,
    categoryId: 2,
    title: "Shrimp & Avocado Summer Rolls",
    category: "Lunch",
    description: "Light, fresh Vietnamese-style rice paper rolls filled with poached shrimp, crisp vegetables, herbs, and creamy avocado, served with a savory peanut dipping sauce.",
    prepTime: "25m",
    cookTime: "5m",
    servings: 4,
    difficulty: "Intermediate",
    heroImage: "/images/recipes/summer-rolls.jpg",
    ingredients: {
      rolls: [
        "12 Rice paper wrappers",
        "300g Shrimp, peeled and cooked",
        "1 Avocado, sliced",
        "1 Carrot, julienned",
        "1/2 Cucumber, julienned",
        "1 cup Rice vermicelli noodles, cooked",
        "Fresh mint and cilantro leaves"
      ],
      dippingSauce: [
        "3 tbsp Peanut butter",
        "1 tbsp Soy sauce",
        "1 tbsp Rice vinegar",
        "1 tsp Honey",
        "2–3 tbsp Water, to thin"
      ]
    },
    chefNotes: [
      "Dip the rice paper in warm water for just 5–10 seconds — it will continue to soften as you fill and roll it.",
      "Work on a damp cutting board to prevent the wrapper from sticking while rolling."
    ],
    nutrition: { calories: 290, protein: "18g", carbs: "32g", fat: "10g" },
    steps: [
      { stepNumber: 1, title: "Prep the Fillings", image: "/images/recipes/rolls-step1.jpg", description: "Arrange the cooked shrimp, avocado, carrot, cucumber, noodles, and herbs near your workspace." },
      { stepNumber: 2, title: "Soften the Wrapper", image: "/images/recipes/rolls-step2.jpg", description: "Dip a rice paper wrapper in warm water for 5–10 seconds until just pliable, then lay flat on a damp surface." },
      { stepNumber: 3, title: "Fill and Roll", image: "/images/recipes/rolls-step3.jpg", description: "Layer a small amount of each filling near the bottom third of the wrapper, fold the sides in, and roll tightly away from you." },
      { stepNumber: 4, title: "Make the Sauce and Serve", image: "/images/recipes/rolls-step4.jpg", description: "Whisk together peanut butter, soy sauce, rice vinegar, and honey, thinning with water as needed. Serve alongside the rolls." }
    ],
    tags: ["Lunch", "Vietnamese", "Light", "Seafood", "Fresh"]
  },

  // ============ DINNER (categoryId: 3) ============
  {
    id: 13,
    categoryId: 3,
    title: "Classic Margherita Pizza",
    category: "Dinner",
    description: "The Margherita is the quintessential Neapolitan pizza. Named after Queen Margherita of Savoy in 1889, its colors represent the Italian flag: red tomatoes, white mozzarella, and green basil. This recipe focuses on high-quality ingredients and a blistered, airy crust that brings the taste of Naples to your home kitchen.",
    prepTime: "30m",
    cookTime: "8m",
    servings: 4,
    difficulty: "Intermediate",
    heroImage: "/images/recipes/margherita-pizza.jpg",
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
    id: 14,
    categoryId: 3,
    title: "Spaghetti alla Carbonara",
    category: "Dinner",
    description: "A Roman classic made with just a handful of ingredients: pasta, eggs, cured pork, and Pecorino Romano. The result is a silky, glossy sauce with no cream needed — pure technique and quality ingredients.",
    prepTime: "10m",
    cookTime: "20m",
    servings: 4,
    difficulty: "Intermediate",
    heroImage: "/images/recipes/carbonara.jpg",
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
    id: 15,
    categoryId: 3,
    title: "Beef and Vegetable Stir-Fry",
    category: "Dinner",
    description: "Thinly sliced beef seared at high heat with crisp vegetables in a savory garlic-ginger sauce. A fast, flavorful weeknight dinner that comes together in under 25 minutes.",
    prepTime: "15m",
    cookTime: "10m",
    servings: 4,
    difficulty: "Easy",
    heroImage: "/images/recipes/beef-stir-fry.jpg",
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
  {
    id: 16,
    categoryId: 3,
    title: "Grilled Salmon with Asparagus",
    category: "Dinner",
    description: "Flaky, perfectly grilled salmon fillets with a bright lemon-herb glaze, served alongside crisp-tender asparagus. A light, elegant dinner that's as healthy as it is delicious.",
    prepTime: "10m",
    cookTime: "15m",
    servings: 2,
    difficulty: "Easy",
    heroImage: "/images/recipes/grilled-salmon.jpg",
    ingredients: {
      main: [
        "2 Salmon fillets (180g each)",
        "1 bunch Asparagus, trimmed",
        "2 tbsp Olive oil",
        "1 Lemon, half juiced, half sliced",
        "2 Garlic cloves, minced",
        "1 tbsp Fresh dill, chopped",
        "Sea salt and black pepper, to taste"
      ]
    },
    chefNotes: [
      "Pat the salmon fillets dry before grilling to achieve a better sear and prevent steaming.",
      "Salmon is done when it flakes easily with a fork and reaches an internal temperature of about 52–54°C (125–130°F) for medium."
    ],
    nutrition: { calories: 380, protein: "34g", carbs: "8g", fat: "23g" },
    steps: [
      { stepNumber: 1, title: "Marinate the Salmon", image: "/images/recipes/salmon-step1.jpg", description: "Combine olive oil, lemon juice, garlic, and dill. Brush over the salmon fillets and let sit for 10 minutes." },
      { stepNumber: 2, title: "Prep the Asparagus", image: "/images/recipes/salmon-step2.jpg", description: "Toss the asparagus with a little olive oil, salt, and pepper." },
      { stepNumber: 3, title: "Grill", image: "/images/recipes/salmon-step3.jpg", description: "Grill the salmon skin-side down over medium-high heat for 5–6 minutes per side. Grill the asparagus alongside for 4–5 minutes, turning occasionally." },
      { stepNumber: 4, title: "Serve", image: "/images/recipes/salmon-step4.jpg", description: "Plate the salmon and asparagus together, and finish with fresh lemon slices and a sprinkle of dill." }
    ],
    tags: ["Dinner", "Seafood", "Healthy", "Gluten-Free"]
  },
  {
    id: 17,
    categoryId: 3,
    title: "Chicken Tikka Masala",
    category: "Dinner",
    description: "Tender marinated chicken simmered in a rich, spiced tomato-cream sauce. This beloved Indian-British dish delivers deep flavor with warm spices like garam masala and cumin.",
    prepTime: "30m (plus marinating)",
    cookTime: "30m",
    servings: 4,
    difficulty: "Intermediate",
    heroImage: "/images/recipes/chicken-tikka-masala.jpg",
    ingredients: {
      marinade: [
        "600g Boneless chicken thighs, cubed",
        "150g Plain yogurt",
        "1 tbsp Lemon juice",
        "1 tbsp Garam masala",
        "1 tsp Ground turmeric",
        "1 tsp Ground cumin"
      ],
      sauce: [
        "2 tbsp Ghee (or butter)",
        "1 Onion, finely diced",
        "4 Garlic cloves, minced",
        "1 tbsp Fresh ginger, grated",
        "400g Crushed tomatoes",
        "200ml Heavy cream",
        "1 tbsp Garam masala",
        "Fresh cilantro, chopped"
      ]
    },
    chefNotes: [
      "Marinate the chicken for at least 2 hours, or overnight, for the deepest flavor.",
      "For a smoky char, sear the marinated chicken in a very hot pan before adding it to the sauce."
    ],
    nutrition: { calories: 460, protein: "34g", carbs: "16g", fat: "29g" },
    steps: [
      { stepNumber: 1, title: "Marinate the Chicken", image: "/images/recipes/tikka-step1.jpg", description: "Combine yogurt, lemon juice, and spices in a bowl. Add the chicken, coat well, cover, and marinate in the fridge for at least 2 hours." },
      { stepNumber: 2, title: "Sear the Chicken", image: "/images/recipes/tikka-step2.jpg", description: "Heat a pan over high heat and sear the marinated chicken pieces for 2–3 minutes per side until charred at the edges. Set aside." },
      { stepNumber: 3, title: "Build the Sauce", image: "/images/recipes/tikka-step3.jpg", description: "In the same pan, melt ghee and sauté onion, garlic, and ginger until softened. Add crushed tomatoes and garam masala, and simmer for 10 minutes." },
      { stepNumber: 4, title: "Simmer and Finish", image: "/images/recipes/tikka-step4.jpg", description: "Stir in the cream and return the chicken to the sauce. Simmer for 10–15 minutes until the chicken is cooked through and the sauce has thickened. Garnish with cilantro and serve with rice or naan." }
    ],
    tags: ["Dinner", "Indian", "Spicy", "Comfort Food"]
  },
  {
    id: 18,
    categoryId: 3,
    title: "Classic Beef Lasagna",
    category: "Dinner",
    description: "Layers of tender pasta, rich beef ragù, creamy béchamel, and melted cheese baked until golden and bubbling. A hearty, crowd-pleasing centerpiece for any dinner table.",
    prepTime: "30m",
    cookTime: "50m",
    servings: 6,
    difficulty: "Intermediate",
    heroImage: "/images/recipes/beef-lasagna.jpg",
    ingredients: {
      ragu: [
        "500g Ground beef",
        "1 Onion, diced",
        "2 Carrots, diced",
        "2 Celery stalks, diced",
        "3 Garlic cloves, minced",
        "700g Crushed tomatoes",
        "2 tbsp Tomato paste",
        "1 tsp Dried oregano"
      ],
      bechamel: [
        "50g Butter",
        "50g All-purpose flour",
        "600ml Whole milk",
        "Pinch Nutmeg"
      ],
      assembly: [
        "12 Lasagna sheets",
        "300g Mozzarella cheese, shredded",
        "80g Parmesan cheese, grated"
      ]
    },
    chefNotes: [
      "Let the ragù simmer low and slow for at least 30 minutes to develop deep flavor — longer is even better.",
      "Let the assembled lasagna rest for 10–15 minutes after baking so it holds its shape when sliced."
    ],
    nutrition: { calories: 540, protein: "30g", carbs: "42g", fat: "27g" },
    steps: [
      { stepNumber: 1, title: "Make the Ragù", image: "/images/recipes/lasagna-step1.jpg", description: "Brown the ground beef with onion, carrot, celery, and garlic. Add crushed tomatoes, tomato paste, and oregano, and simmer for 30 minutes." },
      { stepNumber: 2, title: "Make the Béchamel", image: "/images/recipes/lasagna-step2.jpg", description: "Melt butter, whisk in flour, and cook for 1 minute. Gradually whisk in milk and simmer until thickened. Season with nutmeg, salt, and pepper." },
      { stepNumber: 3, title: "Layer the Lasagna", image: "/images/recipes/lasagna-step3.jpg", description: "In a baking dish, layer pasta sheets, ragù, béchamel, and mozzarella, repeating until all ingredients are used. Top with parmesan." },
      { stepNumber: 4, title: "Bake", image: "/images/recipes/lasagna-step4.jpg", description: "Bake at 190°C (375°F) for 40–45 minutes until golden and bubbling. Rest for 10–15 minutes before slicing and serving." }
    ],
    tags: ["Italian", "Dinner", "Comfort Food", "Family-Style"]
  },

  // ============ DESSERT (categoryId: 4) ============
  {
    id: 19,
    categoryId: 4,
    title: "Classic Tiramisu",
    category: "Dessert",
    description: "A no-bake Italian dessert of espresso-soaked ladyfingers layered with a rich mascarpone cream, dusted with cocoa powder. Elegant, simple, and best made a day ahead.",
    prepTime: "30m (plus chilling)",
    cookTime: "0m",
    servings: 8,
    difficulty: "Intermediate",
    heroImage: "/images/recipes/tiramisu.jpg",
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
    id: 20,
    categoryId: 4,
    title: "Molten Chocolate Lava Cake",
    category: "Dessert",
    description: "Decadent individual chocolate cakes with a warm, gooey molten center. Ready in under 20 minutes, this restaurant-style dessert is surprisingly simple to make at home.",
    prepTime: "10m",
    cookTime: "12m",
    servings: 4,
    difficulty: "Easy",
    heroImage: "/images/recipes/lava-cake.jpg",
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
    id: 21,
    categoryId: 4,
    title: "New York Style Cheesecake",
    category: "Dessert",
    description: "A dense, creamy, and rich baked cheesecake with a buttery graham cracker crust. Classic New York style means tangy, smooth, and indulgent — best chilled overnight before serving.",
    prepTime: "30m (plus chilling)",
    cookTime: "1h 10m",
    servings: 10,
    difficulty: "Intermediate",
    heroImage: "/images/recipes/cheesecake.jpg",
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
    id: 22,
    categoryId: 4,
    title: "Warm Apple Crumble",
    category: "Dessert",
    description: "Tender, spiced baked apples topped with a buttery, golden oat crumble. A cozy, rustic dessert that's best served warm with a scoop of vanilla ice cream.",
    prepTime: "15m",
    cookTime: "35m",
    servings: 6,
    difficulty: "Easy",
    heroImage: "/images/recipes/apple-crumble.jpg",
    ingredients: {
      filling: [
        "6 Apples, peeled and sliced",
        "2 tbsp Lemon juice",
        "60g Brown sugar",
        "1 tsp Ground cinnamon",
        "1 tbsp All-purpose flour"
      ],
      crumble: [
        "120g All-purpose flour",
        "100g Rolled oats",
        "100g Brown sugar",
        "115g Unsalted butter, cold and cubed",
        "1/2 tsp Ground cinnamon",
        "Pinch Sea salt"
      ]
    },
    chefNotes: [
      "Use a mix of tart and sweet apple varieties for the best balance of flavor.",
      "Keep the butter cold when making the crumble topping — this is what creates those craggy, crisp clusters."
    ],
    nutrition: { calories: 360, protein: "4g", carbs: "54g", fat: "15g" },
    steps: [
      { stepNumber: 1, title: "Prepare the Filling", image: "/images/recipes/crumble-step1.jpg", description: "Toss the sliced apples with lemon juice, brown sugar, cinnamon, and flour. Spread evenly into a baking dish." },
      { stepNumber: 2, title: "Make the Crumble Topping", image: "/images/recipes/crumble-step2.jpg", description: "Combine flour, oats, brown sugar, cinnamon, and salt. Rub in the cold butter with your fingers until coarse, clumpy crumbs form." },
      { stepNumber: 3, title: "Assemble", image: "/images/recipes/crumble-step3.jpg", description: "Sprinkle the crumble topping evenly over the apple filling." },
      { stepNumber: 4, title: "Bake and Serve", image: "/images/recipes/crumble-step4.jpg", description: "Bake at 190°C (375°F) for 30–35 minutes until the top is golden and the filling is bubbling. Serve warm, ideally with vanilla ice cream." }
    ],
    tags: ["Dessert", "Baked", "Comfort Food", "Fall"]
  },
  {
    id: 23,
    categoryId: 4,
    title: "Classic Crème Brûlée",
    category: "Dessert",
    description: "Silky vanilla custard topped with a crackling layer of caramelized sugar. An elegant French dessert that's simpler to make than it looks, with a satisfying contrast of textures.",
    prepTime: "15m (plus chilling)",
    cookTime: "40m",
    servings: 4,
    difficulty: "Intermediate",
    heroImage: "/images/recipes/creme-brulee.jpg",
    ingredients: {
      main: [
        "500ml Heavy cream",
        "1 Vanilla bean (or 1 tbsp vanilla extract)",
        "5 Large egg yolks",
        "100g Granulated sugar, plus extra for topping"
      ]
    },
    chefNotes: [
      "Strain the custard mixture through a fine sieve before baking for an ultra-smooth texture.",
      "Use a kitchen torch for the best caramelized sugar crust — it gives more control than a broiler."
    ],
    nutrition: { calories: 380, protein: "6g", carbs: "24g", fat: "29g" },
    steps: [
      { stepNumber: 1, title: "Infuse the Cream", image: "/images/recipes/brulee-step1.jpg", description: "Heat the cream with the split vanilla bean until just simmering. Remove from heat and let steep for 10 minutes." },
      { stepNumber: 2, title: "Make the Custard", image: "/images/recipes/brulee-step2.jpg", description: "Whisk egg yolks and sugar together. Slowly pour in the warm cream while whisking constantly to temper the eggs." },
      { stepNumber: 3, title: "Bake in a Water Bath", image: "/images/recipes/brulee-step3.jpg", description: "Strain the custard into ramekins, place in a water bath, and bake at 150°C (300°F) for 35–40 minutes until just set but still wobbly in the center." },
      { stepNumber: 4, title: "Chill and Caramelize", image: "/images/recipes/brulee-step4.jpg", description: "Chill the custards for at least 4 hours. Just before serving, sprinkle a thin layer of sugar over each and caramelize with a kitchen torch until crisp and golden." }
    ],
    tags: ["Dessert", "French", "Make-Ahead", "Elegant"]
  },
  {
    id: 24,
    categoryId: 4,
    title: "Chewy Chocolate Chip Cookies",
    category: "Dessert",
    description: "Thick, chewy cookies with crisp edges, gooey centers, and pockets of melted chocolate. A timeless classic that's perfect with a glass of milk or as an after-dinner treat.",
    prepTime: "15m (plus chilling)",
    cookTime: "12m",
    servings: 18,
    difficulty: "Easy",
    heroImage: "/images/recipes/chocolate-chip-cookies.jpg",
    ingredients: {
      main: [
        "280g All-purpose flour",
        "1 tsp Baking soda",
        "1/2 tsp Fine sea salt",
        "225g Unsalted butter, softened",
        "150g Brown sugar",
        "100g Granulated sugar",
        "2 Large eggs",
        "2 tsp Vanilla extract",
        "300g Chocolate chips"
      ]
    },
    chefNotes: [
      "Chill the dough for at least 30 minutes — this prevents excessive spreading and deepens the flavor.",
      "Slightly underbake the cookies and let them finish setting on the baking sheet for that perfect chewy center."
    ],
    nutrition: { calories: 240, protein: "3g", carbs: "30g", fat: "12g" },
    steps: [
      { stepNumber: 1, title: "Cream Butter and Sugar", image: "/images/recipes/cookies-step1.jpg", description: "Beat butter, brown sugar, and granulated sugar together until light and fluffy, about 3 minutes." },
      { stepNumber: 2, title: "Add Eggs and Dry Ingredients", image: "/images/recipes/cookies-step2.jpg", description: "Beat in eggs and vanilla, then gradually mix in flour, baking soda, and salt until just combined. Fold in chocolate chips." },
      { stepNumber: 3, title: "Chill the Dough", image: "/images/recipes/cookies-step3.jpg", description: "Cover the dough and refrigerate for at least 30 minutes, or up to 24 hours." },
      { stepNumber: 4, title: "Bake", image: "/images/recipes/cookies-step4.jpg", description: "Scoop dough into balls onto a lined baking sheet and bake at 190°C (375°F) for 10–12 minutes until edges are golden but centers still look slightly soft." }
    ],
    tags: ["Dessert", "Baked", "Classic", "Crowd-Pleaser"]
  }

];

export default recipes;