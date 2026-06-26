"use client";

import { use, useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import FeaturedRecipeCard from "../../components/FeaturedRecipeCard";
import recipes from "../../data/recipes";

type SearchProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default function RecipesPage({ searchParams }: SearchProps) {
  const router = useRouter();
  const resolvedSearchParams = use(searchParams);
  const searchQuery = (resolvedSearchParams.search as string) || "";

  // Checkbox filters states
  const [selectedDifficulty, setSelectedDifficulty] = useState<string[]>([]);
  const [selectedTime, setSelectedTime] = useState<string[]>([]);
  const [selectedDietary, setSelectedDietary] = useState<string[]>([]);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Reset pagination when filters or search change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedDifficulty, selectedTime, selectedDietary]);

  // Helper to parse time strings like "10m", "1h 10m", "15m Prep"
  const parseTime = (timeStr: string | undefined): number => {
    if (!timeStr) return 0;
    // Extract first number and potential 'h' or 'm' unit
    const match = timeStr.match(/(\d+)\s*(h|m|min)?/i);
    if (!match) return 0;
    const val = parseInt(match[1]);
    
    // Check if the string mentions "hour" or "h"
    if (timeStr.toLowerCase().includes("h")) {
      // If it has minutes too, e.g. "1h 10m"
      const minMatch = timeStr.match(/h\s*(\d+)/i);
      const mins = minMatch ? parseInt(minMatch[1]) : 0;
      return val * 60 + mins;
    }
    return val;
  };

  // Helper to check dietary tags
  const matchesDietary = (recipe: typeof recipes[0], option: string): boolean => {
    const lowerTags = recipe.tags?.map(t => t.toLowerCase()) || [];
    const desc = recipe.description?.toLowerCase() || "";
    
    if (option === "Vegan") {
      return lowerTags.includes("vegan") || desc.includes("vegan");
    }
    if (option === "Gluten-Free") {
      return lowerTags.includes("gluten-free") || desc.includes("gluten-free");
    }
    if (option === "Vegetarian") {
      return lowerTags.includes("vegetarian") || lowerTags.includes("vegan") || desc.includes("vegetarian");
    }
    return true;
  };

  // Helper to check cook time options
  const matchesTime = (recipe: typeof recipes[0], option: string): boolean => {
    const totalTime = parseTime(recipe.prepTime) + parseTime(recipe.cookTime);
    if (option === "< 15 mins") {
      return totalTime < 15;
    }
    if (option === "15 - 30 mins") {
      return totalTime >= 15 && totalTime <= 30;
    }
    if (option === "30 - 60 mins") {
      return totalTime > 30 && totalTime <= 60;
    }
    return true;
  };

  // Filter recipes dynamically
  const filteredRecipes = useMemo(() => {
    return recipes.filter(recipe => {
      // 1. Search Query Match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesTitle = recipe.title.toLowerCase().includes(query);
        const matchesDesc = recipe.description.toLowerCase().includes(query);
        const matchesCategory = recipe.category.toLowerCase().includes(query);
        const matchesTags = recipe.tags?.some(t => t.toLowerCase().includes(query));

        if (!matchesTitle && !matchesDesc && !matchesCategory && !matchesTags) {
          return false;
        }
      }

      // 2. Difficulty Filter
      if (selectedDifficulty.length > 0) {
        if (!selectedDifficulty.includes(recipe.difficulty)) {
          return false;
        }
      }

      // 3. Time Filter
      if (selectedTime.length > 0) {
        const matchesAnyTime = selectedTime.some(opt => matchesTime(recipe, opt));
        if (!matchesAnyTime) {
          return false;
        }
      }

      // 4. Dietary Filter
      if (selectedDietary.length > 0) {
        const matchesAllDietary = selectedDietary.every(opt => matchesDietary(recipe, opt));
        if (!matchesAllDietary) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, selectedDifficulty, selectedTime, selectedDietary]);

  // Paginated recipes
  const paginatedRecipes = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredRecipes.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredRecipes, currentPage]);

  const totalPages = Math.ceil(filteredRecipes.length / itemsPerPage);

  const handleDifficultyChange = (difficulty: string) => {
    setSelectedDifficulty(prev =>
      prev.includes(difficulty) ? prev.filter(d => d !== difficulty) : [...prev, difficulty]
    );
  };

  const handleTimeChange = (time: string) => {
    setSelectedTime(prev =>
      prev.includes(time) ? prev.filter(t => t !== time) : [...prev, time]
    );
  };

  const handleDietaryChange = (dietary: string) => {
    setSelectedDietary(prev =>
      prev.includes(dietary) ? prev.filter(d => d !== dietary) : [...prev, dietary]
    );
  };

  const handleClearAll = () => {
    setSelectedDifficulty([]);
    setSelectedTime([]);
    setSelectedDietary([]);
    if (searchQuery) {
      router.push("/recipes");
    }
  };

  return (
    <div className="bg-[#FCFAF7] min-h-screen pb-16">
      {/* Header Info Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1 pt-8 md:pt-12">
        <nav className="text-[10px] md:text-xs font-semibold text-[#8E7E65] tracking-wide flex items-center gap-1.5">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="text-[#8E7E65]/60">/</span>
          <span className="text-[#8E7E65]/80">
            {searchQuery ? "Search Results" : "All Recipes"}
          </span>
        </nav>
        <h1 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#3C3224] tracking-tight">
          {searchQuery ? `Results for "${searchQuery}"` : "All Recipes"}
        </h1>
        <p className="mt-2 text-xs md:text-sm text-[#8E7E65] font-light">
          Found {filteredRecipes.length} culinary {filteredRecipes.length === 1 ? "inspiration" : "inspirations"} to satisfy your cravings.
        </p>
      </section>

      {/* Main Content Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1 mt-10 md:mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Left Column: Sidebar Filters */}
          <aside className="lg:col-span-1">
            <div className="bg-[#FAF8F5] border border-[#F0EAE1] rounded-3xl p-6 md:p-7 shadow-sm sticky top-24">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#F0EAE1]">
                <h2 className="text-base md:text-lg font-serif font-bold text-[#3C3224]">
                  Filters
                </h2>
                {(selectedDifficulty.length > 0 || selectedTime.length > 0 || selectedDietary.length > 0 || searchQuery) && (
                  <button
                    onClick={handleClearAll}
                    className="text-xs font-bold text-[#9A621C] hover:underline cursor-pointer transition-colors"
                  >
                    Clear all
                  </button>
                )}
              </div>

              {/* Difficulty Filter */}
              <div className="mb-6 pb-6 border-b border-[#F0EAE1]">
                <h3 className="text-[10px] md:text-xs font-bold text-[#8E7E65] tracking-wider uppercase mb-3.5">
                  Difficulty
                </h3>
                <div className="flex flex-col gap-2.5">
                  {["Easy", "Intermediate", "Advanced"].map((opt) => (
                    <label key={opt} className="flex items-center gap-3 text-xs md:text-sm text-[#6B5C4E] font-medium cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={selectedDifficulty.includes(opt)}
                        onChange={() => handleDifficultyChange(opt)}
                        className="w-4 h-4 accent-[#E07E1B] border-[#D0C0A5] rounded text-white focus:ring-[#E07E1B]/20"
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Time Filter */}
              <div className="mb-6 pb-6 border-b border-[#F0EAE1]">
                <h3 className="text-[10px] md:text-xs font-bold text-[#8E7E65] tracking-wider uppercase mb-3.5">
                  Time
                </h3>
                <div className="flex flex-col gap-2.5">
                  {["< 15 mins", "15 - 30 mins", "30 - 60 mins"].map((opt) => (
                    <label key={opt} className="flex items-center gap-3 text-xs md:text-sm text-[#6B5C4E] font-medium cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={selectedTime.includes(opt)}
                        onChange={() => handleTimeChange(opt)}
                        className="w-4 h-4 accent-[#E07E1B] border-[#D0C0A5] rounded text-white focus:ring-[#E07E1B]/20"
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Dietary Filter */}
              <div>
                <h3 className="text-[10px] md:text-xs font-bold text-[#8E7E65] tracking-wider uppercase mb-3.5">
                  Dietary
                </h3>
                <div className="flex flex-col gap-2.5">
                  {["Vegan", "Gluten-Free", "Vegetarian"].map((opt) => (
                    <label key={opt} className="flex items-center gap-3 text-xs md:text-sm text-[#6B5C4E] font-medium cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={selectedDietary.includes(opt)}
                        onChange={() => handleDietaryChange(opt)}
                        className="w-4 h-4 accent-[#E07E1B] border-[#D0C0A5] rounded text-white focus:ring-[#E07E1B]/20"
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

            </div>
          </aside>

          {/* Right Column: Grid and Pagination */}
          <section className="lg:col-span-3 flex flex-col h-full">
            
            {paginatedRecipes.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  {paginatedRecipes.map((recipe) => (
                    <FeaturedRecipeCard key={recipe.id} recipe={recipe} />
                  ))}
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                  <nav className="flex items-center justify-center gap-1.5 mt-12 mb-4">
                    {/* Left Chevron */}
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="w-8 h-8 flex items-center justify-center rounded-full text-[#8E7E65] hover:bg-[#F2ECE0] disabled:opacity-30 disabled:pointer-events-none transition-all duration-200 cursor-pointer"
                      aria-label="Previous Page"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>

                    {/* Page Numbers */}
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                      const active = currentPage === page;
                      return (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`w-8 h-8 flex items-center justify-center rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                            active
                              ? "bg-[#9A621C] text-white shadow-sm"
                              : "text-[#6B5C4E] hover:bg-[#F2ECE0]"
                          }`}
                        >
                          {page}
                        </button>
                      );
                    })}

                    {/* Right Chevron */}
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="w-8 h-8 flex items-center justify-center rounded-full text-[#8E7E65] hover:bg-[#F2ECE0] disabled:opacity-30 disabled:pointer-events-none transition-all duration-200 cursor-pointer"
                      aria-label="Next Page"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </nav>
                )}
              </>
            ) : (
              <div className="text-center py-24 bg-[#FAF8F5] rounded-3xl border border-[#F0EAE1] p-6 max-w-xl mx-auto w-full my-auto">
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <h3 className="text-lg font-serif font-bold text-[#3C3224] mb-2">No Recipes Found</h3>
                <p className="text-sm text-[#8E7E65] font-light">
                  We couldn't find any recipes matching your search query or selected filters. Try broadening your criteria or clearing filters!
                </p>
              </div>
            )}

          </section>

        </div>
      </main>
    </div>
  );
}
