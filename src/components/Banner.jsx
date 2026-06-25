import Link from "next/link";
import recipes from "../data/recipes";

export default function Banner() {
  // Find the recipe with id: 1 and categoryId: 1
  const recipe = recipes.find((r) => r.id === 1 && r.categoryId === 1);

  if (!recipe) {
    return null;
  }

  // Parse prep and cook times to calculate total time (e.g. "10m" + "15m" -> 25)
  const parseTime = (timeStr) => {
    if (!timeStr) return 0;
    return parseInt(timeStr.replace(/[^0-9]/g, "")) || 0;
  };

  const totalTime = parseTime(recipe.prepTime) + parseTime(recipe.cookTime);

  return (
    <div className="max-w-7/8 mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div
        className="relative w-full h-[450px] md:h-[550px] lg:h-[620px] rounded-[32px] overflow-hidden bg-cover bg-center shadow-xl group"
        style={{ backgroundImage: `url('${recipe.heroImage}')` }}
      >
        {/* Dark Vignette Overlay for Premium Contrast & Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-300 group-hover:via-black/35"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent"></div>

        {/* Content Container */}
        <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12 md:p-16 lg:p-20">
          <div className="max-w-2xl">
            {/* Category/Badge */}
            <span className="inline-block bg-[#E07E1B]/95 backdrop-blur-sm text-white text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-sm">
              Recipe of the Day
            </span>

            {/* Title */}
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white leading-[1.15] tracking-tight drop-shadow-md">
              {recipe.title}
            </h1>

            {/* Description */}
            <p className="mt-4 text-sm md:text-base text-neutral-200/90 font-light leading-relaxed drop-shadow-sm max-w-xl line-clamp-3">
              {recipe.description}
            </p>

            {/* Stats and Action Row */}
            <div className="mt-8 flex flex-wrap items-center gap-6 md:gap-8">
              {/* Button */}
              <Link
                href={`/recipe/${recipe.id}`}
                className="inline-flex items-center gap-2.5 bg-[#E07E1B] hover:bg-[#C97116] text-white text-sm font-semibold px-6 py-3.5 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-98"
              >
                {/* Crossed Fork and Spoon Icon */}
                <svg
                  className="w-4 h-4 fill-none stroke-current"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 21l7-7m3.5-3.5L18 6a3 3 0 10-4.24-4.24l-4.5 4.5" />
                  <path d="M21 3l-7 7m-1.5 1.5L8 16c-.5 1.5-2 3-5 5 2-3 3.5-4.5 5-5l2.25-2.25" />
                  <path d="M18 6l2-2M15 9l2-2" />
                </svg>
                View Full Recipe
              </Link>

              {/* Time Stat */}
              <div className="flex items-center gap-2 text-white/90 font-medium text-sm md:text-base">
                {/* Clock Icon */}
                <svg
                  className="w-5 h-5 text-white/80"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>{totalTime} Mins</span>
              </div>

              {/* Difficulty Stat */}
              <div className="flex items-center gap-2 text-white/90 font-medium text-sm md:text-base">
                {/* Signal Bars Icon */}
                <svg
                  className="w-5 h-5 text-white/80"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 20V10M17 20V4M7 20v-4" />
                </svg>
                <span>{recipe.difficulty}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
