"use client";

import Link from "next/link";
import { useFavorites } from "../app/context/FavoritesContext";

export default function RecipeCard({ recipe }) {
  if (!recipe) return null;

  const { isFavorite, toggleFavorite } = useFavorites();
  const isFav = isFavorite(recipe.id);

  return (
    <article className="relative bg-[#FAF8F5] border border-[#F0EAE1] rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full group">
      <Link href={`/recipe/${recipe.id}`} className="absolute inset-0 z-10" aria-label={`View ${recipe.title}`}></Link>
      {/* Image Container */}
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-103"
          style={{ backgroundImage: `url('${recipe.heroImage}')` }}
        ></div>
        
        {/* Heart Toggle Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleFavorite(recipe);
          }}
          className="absolute top-4 right-4 bg-white/80 hover:bg-white text-neutral-700 hover:text-red-500 p-2 rounded-full backdrop-blur-sm shadow-sm transition-all duration-300 active:scale-95 z-20 flex items-center justify-center"
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
      <div className="p-5 md:p-6 flex flex-col flex-grow">
        {/* Category Tag */}
        <span className="text-[10px] md:text-xs font-bold text-[#9B8C78] tracking-widest uppercase">
          {recipe.category}
        </span>

        {/* Title */}
        <h3 className="mt-2 text-base md:text-lg font-serif font-bold text-[#3C3224] leading-snug hover:text-[#9A621C] transition-colors duration-200 flex-grow">
          {recipe.title}
        </h3>

        {/* Stats Row */}
        <div className="flex items-center gap-4 text-xs font-semibold text-[#8E7E65] mt-4">
          {/* Prep/Cook Time Stat */}
          <div className="flex items-center gap-1.5">
            {/* Clock Icon */}
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

          {/* Difficulty Stat */}
          <div className="flex items-center gap-1.5">
            {/* Lightning Bolt Icon */}
            <svg
              className="w-4 h-4 text-[#8E7E65]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>{recipe.difficulty}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
