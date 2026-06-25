import Link from "next/link";

export default function RecipeCard({ recipe }) {
  if (!recipe) return null;

  return (
    <article className="bg-[#FAF8F5] border border-[#F0EAE1] rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full group">
      {/* Image Container */}
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-103"
          style={{ backgroundImage: `url('${recipe.heroImage}')` }}
        ></div>
      </div>

      {/* Body Content */}
      <div className="p-5 md:p-6 flex flex-col flex-grow">
        {/* Category Tag */}
        <span className="text-[10px] md:text-xs font-bold text-[#9B8C78] tracking-widest uppercase">
          {recipe.category}
        </span>

        {/* Title */}
        <h3 className="mt-2 text-base md:text-lg font-serif font-bold text-[#3C3224] leading-snug hover:text-[#9A621C] transition-colors duration-200 flex-grow">
          <Link href={`/recipe/${recipe.id}`}>
            {recipe.title}
          </Link>
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
