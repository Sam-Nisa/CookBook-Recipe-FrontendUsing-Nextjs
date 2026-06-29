"use client";

import Link from "next/link";
import { useFavorites } from "../context/FavoritesContext";
import RecipeCard from "../../components/RecipeCard";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <div className="bg-white min-h-screen py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#3C3224] tracking-tight">
            Your Favorite Recipes
          </h1>
          <p className="text-[#8E7E65] text-sm md:text-base mt-3 font-light max-w-md mx-auto">
            All the culinary inspirations you've saved to try, in one place.
          </p>
          <div className="w-16 h-0.5 bg-[#9A621C] mx-auto mt-4"></div>
        </div>

        {/* Favorites list */}
        {favorites.length === 0 ? (
          /* Empty State */
          <div className="text-center py-20 bg-[#FAF8F5] border border-dashed border-[#E0D8CC] rounded-[32px] max-w-2xl mx-auto px-6">
            <div className="w-16 h-16 bg-[#EADDC9] rounded-full flex items-center justify-center mx-auto text-[#9A621C] mb-6">
              <svg className="w-8 h-8 fill-none stroke-current" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </div>
            <h2 className="text-xl font-serif font-bold text-[#3C3224]">No Recipes Saved Yet</h2>
            <p className="text-[#8E7E65] text-sm font-light mt-2 max-w-sm mx-auto">
              Explore our collections, find something delicious, and click the heart icon to save it here!
            </p>
            <div className="mt-8">
              <Link
                href="/"
                className="bg-[#E07E1B] hover:bg-[#C97116] text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow shadow-orange-500/10 active:scale-98"
              >
                Browse Recipes
              </Link>
            </div>
          </div>
        ) : (
          /* Favorites Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {favorites.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
