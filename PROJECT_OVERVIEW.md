# Dragon d'Or - Sushi & Wok

**Description**: Site web vitrine et catalogue pour un restaurant fusion chinois/japonais. Interface élégante, sombre et moderne présentant plus de 20 produits avec filtrage dynamique.

**Tech Stack**: React + TypeScript + Vite + Tailwind CSS | Backend: N/A (Frontend only) | Auth: N/A

## User Preferences
- **Language**: Français (fr-FR)
- **Code Style**: Clean, Modern, Component-based
- **Design System**: Tailwind CSS, Dark Mode, Gold/Red Accents

## Directory Structure
- `/src/components`: UI Components (Navbar, Hero, MenuGrid, ProductCard, Footer)
- `/src/data`: Static data files (menu.ts)
- `/src`: Main application entry (App.tsx, main.tsx)

## Current Features

### Implemented
1. **Catalogue Produits**: Affichage dynamique de +20 plats (Sushi, Maki, Sashimi, Chinois) - `src/components/MenuGrid.tsx`
2. **Filtrage**: Système de filtres par catégorie - `src/components/MenuGrid.tsx`
3. **Design Premium**: Interface sombre avec animations et images générées par IA - `src/components/Hero.tsx`
4. **Responsive**: Navigation et grille adaptatives mobile/desktop - `src/components/Navbar.tsx`

### Known Limitations
- Pas de panier fonctionnel (UI uniquement)
- Pas de backend pour la gestion des commandes ou des réservations

## Database Schema
**Type**: N/A (Static Data in `src/data/menu.ts`)

### `Product` Interface
```typescript
{
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Sushi' | 'Maki' | 'Sashimi' | 'Chinois' | 'Accompagnement';
  image: string;
  spicy?: boolean;
}
```

## Deno Functions
N/A

## API Endpoints
N/A

## Improvement Opportunities

### High Priority

### Medium Priority

### Low Priority / Future Enhancements
