import React from 'react';
import recipes from '../../../data/recipes';
import DetailCard from '../../../components/DetailCard';
import { notFound } from 'next/navigation';

export default async function RecipeDetailPage({ params }) {
  const { id } = await params;
  
  const recipe = recipes.find(r => r.id === parseInt(id));

  if (!recipe) {
    notFound();
  }

  return <DetailCard recipe={recipe} />;
}

// Generate static params for all recipes for faster loading
export function generateStaticParams() {
  return recipes.map((recipe) => ({
    id: recipe.id.toString(),
  }));
}
