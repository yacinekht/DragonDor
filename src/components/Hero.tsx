import {ArrowRight} from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 animate-slow-zoom"
        style={{ 
          backgroundImage: 'url("https://static.lumi.new/c9/c9a3dddcc9881b2f2c0fd736b14b6e72.png")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />
      </div>

      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-2xl animate-fade-in-up">
          <span className="text-amber-400 font-medium tracking-wider uppercase mb-4 block">
            Cuisine Asiatique Premium
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            L'Art du Sushi & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">
              Saveurs Chinoises
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
            Découvrez une expérience culinaire unique où la finesse japonaise rencontre la tradition chinoise. 
            Ingrédients frais, préparation minute.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#menu" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-medium transition-all transform hover:scale-105 flex items-center gap-2"
            >
              Voir la Carte <ArrowRight size={20} />
            </a>
            <a 
              href="#contact" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-full font-medium transition-all"
            >
              Réserver une table
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
