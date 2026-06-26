"use client";

import { use, useState, useMemo } from "react";
import Link from "next/link";
import RecipeCard from "../../../components/RecipeCard";
import recipes from "../../../data/recipes";

const categoryMap = {
  breakfast: {
    id: 1,
    name: "Breakfast",
    title: "Healthy Breakfasts",
    description: "Start your day with energy. Explore our curated selection of nutritionally balanced, flavor-forward breakfast ideas designed for the modern lifestyle.",
    image: "/images/categories/breakfast.png"
  },
  lunch: {
    id: 2,
    name: "Lunch",
    title: "Fresh Lunches",
    description: "Brighten up your midday with our crisp, satisfying lunch selections, featuring vibrant ingredients and quick, satisfying recipes.",
    image: "/images/categories/lunch.png"
  },
  dinner: {
    id: 3,
    name: "Dinner",
    title: "Elegant Dinners",
    description: "End your day on a delicious note with our handpicked evening dishes, ranging from comforting family meals to sophisticated weeknight dinners.",
    image: "/images/categories/dinner.png"
  },
  dessert: {
    id: 4,
    name: "Dessert",
    title: "Decadent Desserts",
    description: "Satisfy your sweet tooth with our exquisite collection of baked goods, creamy tarts, and delightful post-meal treats.",
    image: "/images/categories/dessert.png"
  }
};

type PageProps = {
  params: Promise<{ category?: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default function CategoriesPage({ params, searchParams }: PageProps) {
  const resolvedParams = use(params);
  const categoryParam = resolvedParams.category?.[0]?.toLowerCase() || "breakfast";

  const categoryDetails = categoryMap[categoryParam as keyof typeof categoryMap] || categoryMap.breakfast;

  // State for active filter tag
  const [activeFilter, setActiveFilter] = useState("All Recipes");
  // State for sort selection
  const [sortBy, setSortBy] = useState("Newest First");
  // State to show all recipes from recipes.js
  const [showAll, setShowAll] = useState(false);

  // Reset showAll and filter states when category changes
  const [lastCategoryId, setLastCategoryId] = useState(categoryDetails.id);
  if (categoryDetails.id !== lastCategoryId) {
    setLastCategoryId(categoryDetails.id);
    setShowAll(false);
    setActiveFilter("All Recipes");
  }

  // Filters listing
  const filters = ["All Recipes", "High Protein", "Under 30 Mins", "Vegan", "Gluten Free"];

  // Fetch recipes matching this category ID (1=Breakfast, 2=Lunch, etc.), or all recipes if load more is clicked
  const categoryRecipes = useMemo(() => {
    if (showAll) {
      return recipes;
    }
    return recipes.filter(r => r.categoryId === categoryDetails.id);
  }, [categoryDetails.id, showAll]);

  // Apply filtering and sorting
  const processedRecipes = useMemo(() => {
    let list = [...categoryRecipes];

    // 1. Filtering
    if (activeFilter !== "All Recipes") {
      list = list.filter(recipe => {
        if (activeFilter === "High Protein") {
          // Check if protein content is >= 20g
          const proteinVal = parseInt(recipe.nutrition?.protein || "0");
          return proteinVal >= 20 || recipe.tags?.some(t => t.toLowerCase().includes("protein"));
        }
        if (activeFilter === "Under 30 Mins") {
          const parseTime = (timeStr: string | undefined) => {
            if (!timeStr) return 0;
            return parseInt(timeStr) || 0;
          };
          const totalTime = parseTime(recipe.prepTime) + parseTime(recipe.cookTime);
          return totalTime < 30;
        }
        if (activeFilter === "Vegan") {
          return recipe.tags?.some(t => t.toLowerCase() === "vegan") || recipe.description?.toLowerCase().includes("vegan");
        }
        if (activeFilter === "Gluten Free") {
          return recipe.tags?.some(t => t.toLowerCase().includes("gluten")) || recipe.description?.toLowerCase().includes("gluten-free");
        }
        return true;
      });
    }

    // 2. Sorting
    if (sortBy === "Newest First") {
      list.sort((a, b) => b.id - a.id);
    } else if (sortBy === "Oldest First") {
      list.sort((a, b) => a.id - b.id);
    } else if (sortBy === "Prep Time (Low to High)") {
      const parseTime = (timeStr: string | undefined) => {
        if (!timeStr) return 999;
        return parseInt(timeStr) || 999;
      };
      list.sort((a, b) => parseTime(a.prepTime) - parseTime(b.prepTime));
    } else if (sortBy === "Calories (Low to High)") {
      list.sort((a, b) => (a.nutrition?.calories || 0) - (b.nutrition?.calories || 0));
    }

    return list;
  }, [categoryRecipes, activeFilter, sortBy]);

  return (
    <div className="bg-white min-h-screen">
      {/* Category Hero Banner */}
      <section 
        className="relative w-full h-[80vh]  bg-cover bg-center flex items-center overflow-hidden"
        style={{ backgroundImage: `url('${categoryDetails.image}')` }}
      >
        {/* Dark overlay for cover container */}
        <div className="absolute inset-0 bg-black/35 backdrop-blur-[1.5px]"></div>

        {/* Content Box Container */}
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-1 relative z-10">
          <div className="bg-[#FAF8F5]/95 backdrop-blur-md p-6 md:p-10 max-w-xl rounded-2xl shadow-lg border border-[#F0EAE1] my-4">
            <nav className="text-[10px] md:text-xs font-bold text-[#E07E1B] tracking-wider uppercase flex items-center gap-1.5">
              <Link href="/" className="hover:underline">Recipes</Link>
              <span className="text-[#8E7E65]">&rsaquo;</span>
              <span className="text-[#8E7E65]">Categories</span>
            </nav>
            <h1 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#3C3224] leading-tight">
              {categoryDetails.title}
            </h1>
            <p className="mt-4 text-xs md:text-sm text-[#6B5C4E] font-light leading-relaxed">
              {categoryDetails.description}
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Sort Bar */}
      <section className="w-full bg-[#FAF8F5] border-b border-[#F0EAE1] py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Filters List */}
          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            <span className="text-[10px] md:text-xs font-bold text-[#8E7E65] tracking-wider uppercase mr-1 md:mr-2">
              Filter By:
            </span>
            {filters.map((filter) => {
              const active = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`text-[11px] md:text-xs font-semibold px-4 py-2 rounded-xl transition-all duration-200 active:scale-95 border ${
                    active
                      ? "bg-[#E07E1B] text-white border-[#E07E1B] shadow-sm font-bold"
                      : "bg-transparent text-[#6B5C4E] border-[#E0EAE1] hover:bg-[#F2ECE0] hover:text-[#9A621C]"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          {/* Sort Selection */}
          <div className="flex items-center gap-2 self-end md:self-auto">
            <span className="text-[11px] md:text-xs font-semibold text-[#8E7E65]">
              Sort by:
            </span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-[#F3EDE0] hover:bg-[#EAE2D3] text-[#3C3224] text-xs font-bold pl-4 pr-10 py-2 rounded-xl outline-none cursor-pointer border border-[#E5DEC9] focus:ring-2 focus:ring-[#E07E1B]/20 transition-all duration-200"
              >
                <option value="Newest First">Newest First</option>
                <option value="Oldest First">Oldest First</option>
                <option value="Prep Time (Low to High)">Prep Time</option>
                <option value="Calories (Low to High)">Calories</option>
              </select>
              {/* Custom Down Arrow Icon */}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-[#3C3224]">
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recipes Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1 py-12 md:py-16">
        {processedRecipes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processedRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#FAF8F5] rounded-3xl border border-[#F0EAE1] p-6 max-w-xl mx-auto">
            <svg
              className="w-12 h-12 text-[#8E7E65] mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
            <h3 className="text-lg font-serif font-bold text-[#3C3224] mb-2">No Recipes Found</h3>
            <p className="text-sm text-[#8E7E65] font-light">
              We couldn't find any recipes in this category matching the "{activeFilter}" filter. Try selecting another filter!
            </p>
          </div>
        )}
      </section>

      {!showAll && (
        <div className="w-full flex justify-center items-center pb-10">
          <button
            onClick={() => setShowAll(true)}
            className="px-14 py-5 border border-amber-700 text-amber-700 font-medium text-sm tracking-wide hover:bg-amber-700 hover:text-white transition duration-300 cursor-pointer active:scale-95"
          >
            Load More Recipes
          </button>
        </div>
      )}
    </div>
  );
}
