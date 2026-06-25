import "../data/categories";
import Link from "next/link";
import categories from "../data/categories";

export default function Category() {
    return (  
    <div className="">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#3C3224] tracking-tight">
              Browse by Category
            </h2>
            <p className="text-[#8E7E65] text-sm md:text-base mt-2 font-light">
              Find exactly what you're craving today.
            </p>
          </div>
          <Link
            href="/categories"
            className="text-sm font-semibold text-[#9A621C] hover:text-[#7A4D14] transition-colors flex items-center gap-1 group font-sans tracking-wide self-start sm:self-auto"
          >
            See all categories{" "}
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.name.toLowerCase()}`}
              className="relative w-full h-72 md:h-[340px] rounded-[10px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group block"
            >
              {/* Background Image with Hover Zoom */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url('${category.image}')` }}
              ></div>

              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent transition-opacity duration-300 group-hover:via-black/30"></div>

              {/* Card Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white z-10">
                <h3 className="text-xl md:text-2xl font-serif font-bold tracking-wide">
                  {category.name}
                </h3>
                <p className="text-white/80 text-xs md:text-sm font-light mt-1.5 font-sans">
                  {category.recipeCount} Recipes
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      </div>
    );
}