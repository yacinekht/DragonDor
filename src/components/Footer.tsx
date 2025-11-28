import {MapPin, Phone, Mail, Facebook, Instagram} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-serif font-bold text-amber-400 mb-4">Dragon d'Or</h3>
            <p className="text-gray-400 mb-6">
              Une fusion exquise entre la tradition japonaise du sushi et les saveurs authentiques de la cuisine chinoise.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Horaires</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex justify-between">
                <span>Lundi - Jeudi</span>
                <span>11:30 - 14:30 | 18:00 - 22:30</span>
              </li>
              <li className="flex justify-between">
                <span>Vendredi - Samedi</span>
                <span>11:30 - 14:30 | 18:00 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span>Dimanche</span>
                <span>18:00 - 22:30</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-red-600 flex-shrink-0" size={20} />
                <span>123 Avenue de la Gastronomie,<br />75001 Paris, France</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-red-600 flex-shrink-0" size={20} />
                <span>01 23 45 67 89</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-red-600 flex-shrink-0" size={20} />
                <span>contact@dragondor-sushi.fr</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-900 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Dragon d'Or. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
