import Banner from "../components/Banner";
import Category from "../components/Category";
import FeaturedRecipeCard from "../components/FeaturedRecipeCard";
import RecipeCard from "../components/RecipeCard";

export default function Home() {
  const latestFeaturedRecipe = {
    id: 101,
    title: "Mastering the 72-Hour Sourdough: A Comprehensive Guide",
    category: "Baking Basics",
    date: "Oct 12, 2024",
    description: "Learn the secrets of a perfect open crumb and crispy crust with our foolproof step-by-step fermentation guide for beginners and pros alike.",
    author: "Elena P.",
    authorRole: "Head Chef",
    authorInitials: "EP",
    heroImage: "/images/recipes/sourdough.png",
  };

  const latestRecipes = [
    {
      id: 102,
      title: "Roasted Beet & Goat Cheese Salad",
      category: "Quick Eats",
      prepTime: "15m",
      difficulty: "Easy",
      heroImage: "/images/recipes/beet-salad.png",
    },
    {
      id: 103,
      title: "Spicy Miso Ramen with Marinated Egg",
      category: "Global Flavors",
      prepTime: "45m",
      difficulty: "Medium",
      heroImage: "/images/recipes/ramen.png",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div><Banner /></div>
      <div className="bg-white"><Category /> </div>

      {/* Latest Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 border-t border-[#F0EAE1]">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#3C3224] tracking-tight">
            Latest From the Hearth
          </h2>
          <div className="w-16 h-0.5 bg-[#9A621C] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column (Featured Recipe) */}
          <div className="lg:col-span-2">
            <FeaturedRecipeCard recipe={latestFeaturedRecipe} />
          </div>

          {/* Right Column (Recipe List) */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            {latestRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
