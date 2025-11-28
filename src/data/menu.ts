export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Sushi' | 'Maki' | 'Sashimi' | 'Chinois' | 'Accompagnement';
  image: string;
  spicy?: boolean;
}

export const products: Product[] = [
  // Sushi (Nigiri)
  {
    id: 's1',
    name: 'Sushi Saumon',
    description: 'Tranche de saumon frais sur riz vinaigré.',
    price: 4.50,
    category: 'Sushi',
    image: 'https://static.lumi.new/25/251cfa3557d81b2f367e4d3c348d05ef.png'
  },
  {
    id: 's2',
    name: 'Sushi Thon Rouge',
    description: 'Thon rouge de qualité supérieure sur riz.',
    price: 5.50,
    category: 'Sushi',
    image: 'https://static.lumi.new/25/251cfa3557d81b2f367e4d3c348d05ef.png'
  },
  {
    id: 's3',
    name: 'Sushi Daurade',
    description: 'Daurade royale fraîche et délicate.',
    price: 4.90,
    category: 'Sushi',
    image: 'https://static.lumi.new/25/251cfa3557d81b2f367e4d3c348d05ef.png'
  },
  {
    id: 's4',
    name: 'Sushi Crevette',
    description: 'Crevette cuite papillon sur riz.',
    price: 4.50,
    category: 'Sushi',
    image: 'https://static.lumi.new/25/251cfa3557d81b2f367e4d3c348d05ef.png'
  },
  
  // Maki
  {
    id: 'm1',
    name: 'California Roll Saumon',
    description: 'Saumon, avocat, concombre, sésame.',
    price: 6.50,
    category: 'Maki',
    image: 'https://static.lumi.new/0f/0f6c2204a63f529cedaabeb0c0fe88d7.png'
  },
  {
    id: 'm2',
    name: 'Maki Thon Spicy',
    description: 'Thon épicé, concombre, sauce sriracha.',
    price: 7.00,
    category: 'Maki',
    image: 'https://static.lumi.new/0f/0f6c2204a63f529cedaabeb0c0fe88d7.png',
    spicy: true
  },
  {
    id: 'm3',
    name: 'Dragon Roll',
    description: 'Tempura crevette, anguille, avocat au dessus.',
    price: 12.90,
    category: 'Maki',
    image: 'https://static.lumi.new/0f/0f6c2204a63f529cedaabeb0c0fe88d7.png'
  },
  {
    id: 'm4',
    name: 'Maki Concombre Cheese',
    description: 'Frais et léger, concombre croquant et cream cheese.',
    price: 5.50,
    category: 'Maki',
    image: 'https://static.lumi.new/0f/0f6c2204a63f529cedaabeb0c0fe88d7.png'
  },
  {
    id: 'm5',
    name: 'California Tempura',
    description: 'Crevette tempura croustillante, avocat.',
    price: 8.50,
    category: 'Maki',
    image: 'https://static.lumi.new/0f/0f6c2204a63f529cedaabeb0c0fe88d7.png'
  },

  // Sashimi
  {
    id: 'sa1',
    name: 'Sashimi Saumon (12pc)',
    description: 'Assortiment de tranches de saumon pur.',
    price: 14.00,
    category: 'Sashimi',
    image: 'https://static.lumi.new/01/014a4a4307eec944e97bff0e9b04da72.png'
  },
  {
    id: 'sa2',
    name: 'Sashimi Thon (12pc)',
    description: 'Tranches épaisses de thon rouge.',
    price: 16.00,
    category: 'Sashimi',
    image: 'https://static.lumi.new/01/014a4a4307eec944e97bff0e9b04da72.png'
  },
  {
    id: 'sa3',
    name: 'Sashimi Mixte',
    description: 'Mélange saumon, thon, daurade.',
    price: 18.00,
    category: 'Sashimi',
    image: 'https://static.lumi.new/01/014a4a4307eec944e97bff0e9b04da72.png'
  },

  // Plats Chinois
  {
    id: 'c1',
    name: 'Dim Sum Crevette (Ha Kao)',
    description: 'Raviolis vapeur aux crevettes (4 pièces).',
    price: 6.90,
    category: 'Chinois',
    image: 'https://static.lumi.new/0f/0f8e6567e2f198e120d7d921707e6a79.png'
  },
  {
    id: 'c2',
    name: 'Bouchées Porc (Siu Mai)',
    description: 'Bouchées vapeur au porc et champignons.',
    price: 6.50,
    category: 'Chinois',
    image: 'https://static.lumi.new/0f/0f8e6567e2f198e120d7d921707e6a79.png'
  },
  {
    id: 'c3',
    name: 'Nouilles Sautées au Boeuf',
    description: 'Nouilles aux oeufs, boeuf tendre, légumes croquants.',
    price: 11.50,
    category: 'Chinois',
    image: 'https://static.lumi.new/16/16a12698a8e510e23786437d8e442b0f.png'
  },
  {
    id: 'c4',
    name: 'Riz Cantonais',
    description: 'Le classique riz sauté aux petits pois, jambon, oeuf.',
    price: 8.00,
    category: 'Chinois',
    image: 'https://static.lumi.new/16/16a12698a8e510e23786437d8e442b0f.png'
  },
  {
    id: 'c5',
    name: 'Poulet Impérial',
    description: 'Poulet sauté aux noix de cajou et piments légers.',
    price: 12.50,
    category: 'Chinois',
    image: 'https://static.lumi.new/16/16a12698a8e510e23786437d8e442b0f.png',
    spicy: true
  },
  {
    id: 'c6',
    name: 'Canard Laqué',
    description: 'Filet de canard rôti avec sauce hoisin.',
    price: 15.90,
    category: 'Chinois',
    image: 'https://static.lumi.new/16/16a12698a8e510e23786437d8e442b0f.png'
  },

  // Accompagnements
  {
    id: 'a1',
    name: 'Soupe Miso',
    description: 'Bouillon soja, tofu, algues, ciboulette.',
    price: 3.50,
    category: 'Accompagnement',
    image: 'https://static.lumi.new/0f/0f8e6567e2f198e120d7d921707e6a79.png'
  },
  {
    id: 'a2',
    name: 'Salade de Chou',
    description: 'Chou blanc mariné sésame.',
    price: 3.00,
    category: 'Accompagnement',
    image: 'https://static.lumi.new/0f/0f8e6567e2f198e120d7d921707e6a79.png'
  },
  {
    id: 'a3',
    name: 'Edamame',
    description: 'Fèves de soja à la fleur de sel.',
    price: 4.00,
    category: 'Accompagnement',
    image: 'https://static.lumi.new/0f/0f8e6567e2f198e120d7d921707e6a79.png'
  },
  {
    id: 'a4',
    name: 'Gyoza Poulet (5pc)',
    description: 'Raviolis grillés japonais.',
    price: 6.00,
    category: 'Accompagnement',
    image: 'https://static.lumi.new/0f/0f8e6567e2f198e120d7d921707e6a79.png'
  }
];
