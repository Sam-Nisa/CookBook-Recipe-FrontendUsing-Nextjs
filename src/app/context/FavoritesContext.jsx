"use client";

import { createContext, useContext, useState, useEffect } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount (client-side only)
  useEffect(() => {
    const stored = localStorage.getItem("cookbook_favorites");
    if (stored) {
      try {
        setFavorites(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse favorites from localStorage", e);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage when favorites change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("cookbook_favorites", JSON.stringify(favorites));
    }
  }, [favorites, isLoaded]);

  const isFavorite = (recipeId) => {
    return favorites.some((r) => r.id === recipeId);
  };

  const toggleFavorite = (recipe) => {
    if (isFavorite(recipe.id)) {
      setFavorites((prev) => prev.filter((r) => r.id !== recipe.id));
    } else {
      setFavorites((prev) => [...prev, recipe]);
    }
  };

  return (
    <FavoritesContext.Provider value={{ favorites, isFavorite, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
}
