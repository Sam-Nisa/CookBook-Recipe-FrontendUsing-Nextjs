"use client";

import Link from "next/link";
import { useFavorites } from "../app/context/FavoritesContext";

export default function FeaturedRecipeCard({ recipe }) {
  if (!recipe) return null;

  const { isFavorite, toggleFavorite } = useFavorites();
  const isFav = isFavorite(recipe.id);

  const isRecipe = !!(recipe.prepTime || recipe.difficulty);

  // Generate initials from author name if not explicitly provided
  const getInitials = (name) => {
    if (!name) return "CH";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };

  const getDietaryTag = (rec) => {
    const lowerTags = rec.tags?.map((t) => t.toLowerCase()) || [];
    if (lowerTags.includes("vegan")) return "VEGAN";
    if (lowerTags.includes("gluten-free")) return "GLUTEN-FREE";
    if (lowerTags.includes("vegetarian")) return "VEGETARIAN";
    return "";
  };

  const dietaryTag = getDietaryTag(recipe);

  return (
    <article className="relative bg-[#FAF8F5] border border-[#F0EAE1] rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full group">
      <Link href={`/recipe/${recipe.id}`} className="absolute inset-0 z-10" aria-label={`View ${recipe.title}`}></Link>
      {/* Image Container */}
      <div className="relative w-full aspect-[16/10] overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-103"
          style={{ backgroundImage: `url('${recipe.heroImage}')` }}
        ></div>
        
        {/* Dynamic Image Badges */}
        {isRecipe ? (
          <>
            {dietaryTag && (
              <div className="absolute top-4 left-4 bg-amber-700/90 text-white text-[10px] font-bold px-2.5 py-1.5 rounded shadow-sm uppercase tracking-wider z-10">
                {dietaryTag}
              </div>
            )}
            {recipe.isFeatured && (
              <div className="absolute top-4 right-14 bg-white/95 backdrop-blur-sm text-[#9A621C] text-[10px] font-bold px-3 py-1.5 rounded shadow-sm tracking-wider uppercase z-10">
                Featured
              </div>
            )}
          </>
        ) : (
          /* Editor's Pick Badge for Blog Posts */
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[#9A621C] text-[10px] md:text-xs font-bold px-3 py-1.5 rounded shadow-sm tracking-wider uppercase">
            Editor's Pick
          </div>
        )}

        {/* Heart Toggle Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleFavorite(recipe);
          }}
          className="absolute top-4 right-4 bg-white/80 hover:bg-white text-neutral-700 hover:text-red-500 p-2.5 rounded-full backdrop-blur-sm shadow-sm transition-all duration-300 active:scale-95 z-20 flex items-center justify-center"
          aria-label={isFav ? "Remove from Favorites" : "Add to Favorites"}
        >
          <svg
            className={`w-4.5 h-4.5 transition-colors ${
              isFav ? "fill-red-500 stroke-red-500" : "fill-none stroke-current"
            }`}
            strokeWidth="2.2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>
      </div>

      {/* Body Content */}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        {!isRecipe && (
          /* Tag & Date for Blog Posts */
          <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold text-[#9B8C78] tracking-widest uppercase mb-3">
            <span>{recipe.category}</span>
            <span>•</span>
            <span>{recipe.date || "Oct 12, 2024"}</span>
          </div>
        )}

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-serif font-bold text-[#3C3224] leading-tight hover:text-[#9A621C] transition-colors duration-200">
          {recipe.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-[#6B5C4E] text-xs md:text-sm font-light leading-relaxed line-clamp-3">
          {recipe.description}
        </p>

        {/* Separator Line */}
        <div className="border-t border-[#F0EAE1] my-6"></div>

        {/* Card Footer */}
        {isRecipe ? (
          <div className="flex items-center justify-between mt-auto gap-4">
            {/* Stats Row */}
            <div className="flex items-center gap-4 text-xs font-semibold text-[#8E7E65]">
              {/* Prep Time */}
              <div className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4 text-[#8E7E65]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>{recipe.prepTime || recipe.cookTime || "15m"}</span>
              </div>

              {/* Difficulty */}
              <div className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4 text-[#8E7E65]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 14h4v6H3zm7-5h4v11h-4zm7-5h4v16h-4z" />
                </svg>
                <span>{recipe.difficulty}</span>
              </div>
            </div>

            {/* Dietary tag pill on bottom right */}
            {dietaryTag && (
              <span className="bg-[#F2ECE0] text-[#9A621C] text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider">
                {dietaryTag}
              </span>
            )}
          </div>
        ) : (
          /* Original Blog Author Footer */
          <div className="flex items-center justify-between mt-auto gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#EADDC9] text-[#9A621C] flex items-center justify-center font-bold text-xs flex-shrink-0">
                {recipe.authorInitials || getInitials(recipe.author)}
              </div>
              <span className="text-xs md:text-sm font-medium text-[#4E4435] truncate max-w-[150px] md:max-w-xs">
                {recipe.author}{" "}
                <span className="text-[#8E7E65] font-light">— {recipe.authorRole || "Chef"}</span>
              </span>
            </div>

            <div
              className="text-[#9A621C] hover:text-[#7A4D14] text-xs md:text-sm font-bold flex items-center gap-1 flex-shrink-0 group/link relative z-20 pointer-events-none"
            >
              Read Recipe
              <svg
                className="w-3.5 h-3.5 transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
