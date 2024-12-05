import { SearchForm } from "./search-form";

export function HeroSection() {
  return (
    <section className="relative h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Journey with FlexiStay - Begin Your Story!
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Easily search for top luxury accommodations offered by our
            professional network
          </p>
        </div>

        <SearchForm />
      </div>
    </section>
  );
}
