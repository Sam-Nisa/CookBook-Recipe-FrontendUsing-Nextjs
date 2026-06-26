import React from 'react';
import { Clock, Users, Star, ShoppingCart, Lightbulb, Flame } from 'lucide-react';
import Image from 'next/image';

export default function DetailCard({ recipe }) {
  if (!recipe) return null;

  return (
    <div className="bg-white min-h-screen text-gray-800 font-sans">
      {/* Hero Section */}
      <div className="relative w-full h-[80vh] min-h-[400px]">
        {/* We use a standard img tag for simplicity if we don't have next/image configured for external domains, 
            but assuming local images in public/images/recipes/ as per data */}
        <img
          src={recipe.heroImage}
          alt={recipe.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 max-w-4xl xl:max-w-6xl  ml-14 2xl:max-w-7xl mx-auto">
          <span className="inline-block bg-[#F4A261] text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            {recipe.tags && recipe.tags[0] ? recipe.tags[0] : recipe.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 drop-shadow-md">
            {recipe.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-200 font-medium">
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>Prep: {recipe.prepTime} • Cook: {recipe.cookTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={18} />
              <span>{recipe.servings} Servings</span>
            </div>
            <div className="flex items-center gap-2">
              <Star size={18} className="text-[#F4A261] fill-[#F4A261]" />
              <span>{recipe.difficulty}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7/8 mx-auto px-4 md:px-8 py-12 flex flex-col lg:flex-row gap-12">
        
        {/* Left Column (Main Info) */}
        <div className="lg:w-2/3">
          <p className="text-lg leading-relaxed text-gray-600 mb-10">
            {recipe.description}
          </p>

          {/* Ingredients */}
          <div className="bg-[#FAF7F2] rounded-xl p-8 mb-12 border border-[#E8E1D5]">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-[#B08D57]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"></path><line x1="6" y1="17" x2="18" y2="17"></line></svg>
              </div>
              <h2 className="text-2xl font-serif text-[#8B6F4E]">Ingredients</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {Object.entries(recipe.ingredients).map(([group, items]) => (
                <div key={group}>
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 border-b border-gray-200 pb-2">
                    The {group}
                  </h3>
                  <ul className="space-y-3">
                    {items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1 w-4 h-4 text-[#B08D57] rounded border-gray-300 focus:ring-[#B08D57]" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <button className="flex items-center gap-2 text-[#B08D57] font-semibold text-sm hover:text-[#8B6F4E] transition-colors">
              <ShoppingCart size={18} />
              Add all to Grocery List
            </button>
          </div>

          {/* Preparation Steps */}
          <div>
            <h2 className="text-2xl font-serif text-[#8B6F4E] mb-8">Preparation Steps</h2>
            <div className="space-y-10">
              {recipe.steps.map((step) => (
                <div key={step.stepNumber} className="flex flex-col sm:flex-row gap-6 items-start">
                  {/* {step.image && (
                    <div className="w-full sm:w-48 h-32 shrink-0 rounded-lg overflow-hidden shadow-sm">
                      <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                    </div>
                  )} */}
                  <div className="flex gap-4">
                    <span className="text-6xl font-serif text-[#E8E1D5] leading-none shrink-0">
                      {String(step.stepNumber).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (Sidebar) */}
        <div className="lg:w-1/3 space-y-8">
          
          {/* Chef's Notes */}
          <div className="bg-[#F4EFE6] rounded-xl p-8 border border-[#E8E1D5]">
            <h3 className="text-xl font-serif text-[#8B6F4E] mb-6">Chef's Notes</h3>
            <ul className="space-y-4">
              {recipe.chefNotes.map((note, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  {idx % 2 === 0 ? (
                    <Lightbulb size={20} className="text-[#B08D57] shrink-0 mt-0.5" />
                  ) : (
                    <Flame size={20} className="text-[#B08D57] shrink-0 mt-0.5" />
                  )}
                  <span className="text-sm text-gray-700 leading-relaxed">{note}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Nutrition */}
          <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center mb-6">
              Nutrition per serving
            </h3>
            <div className="grid grid-cols-2 gap-y-8 text-center">
              <div>
                <div className="text-3xl font-bold text-[#8B6F4E]">{recipe.nutrition.calories}</div>
                <div className="text-xs text-gray-500 uppercase mt-1">Calories</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#8B6F4E]">{recipe.nutrition.protein}</div>
                <div className="text-xs text-gray-500 uppercase mt-1">Protein</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#8B6F4E]">{recipe.nutrition.carbs}</div>
                <div className="text-xs text-gray-500 uppercase mt-1">Carbs</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#8B6F4E]">{recipe.nutrition.fat}</div>
                <div className="text-xs text-gray-500 uppercase mt-1">Fat</div>
              </div>
            </div>
          </div>

          {/* Community CTA */}
          <div className="relative rounded-xl overflow-hidden h-64 bg-amber-500 shadow-md flex items-center justify-center text-center p-8 group">
            {/* Dark overlay image placeholder - in a real app, use an actual image */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556910103-1c02745a872f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/80"></div>
            
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-3 drop-shadow-sm">Join the Community</h3>
              <p className="text-gray-200 text-sm mb-6 drop-shadow-sm">
                Share your culinary creations and get tips from master chefs.
              </p>
              <button className="bg-white text-amber-900 font-bold py-2.5 px-6 rounded-full text-sm hover:bg-gray-100 transition-colors shadow-lg">
                Sign Up Now
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
