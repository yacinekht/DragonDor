import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuGrid from './components/MenuGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-gray-100 selection:bg-red-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <MenuGrid />
        
        {/* About Section (Brief) */}
        <section id="about" className="py-20 bg-neutral-900 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <img 
                  src="https://static.lumi.new/16/16a12698a8e510e23786437d8e442b0f.png" 
                  alt="Chef cooking" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                  Tradition & Modernité
                </h2>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Chez Dragon d'Or, nous croyons que la cuisine est un art qui se partage. 
                  Nos chefs, maîtres dans l'art du sushi et du wok, sélectionnent chaque matin 
                  les produits les plus frais pour vous offrir une expérience gustative inoubliable.
                </p>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Que vous soyez amateur de poisson cru délicat ou de plats sautés au wok fumant, 
                  notre menu a été conçu pour satisfaire toutes vos envies d'évasion culinaire.
                </p>
                <button className="text-amber-400 font-medium hover:text-amber-300 transition-colors flex items-center gap-2">
                  En savoir plus sur notre histoire &rarr;
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
