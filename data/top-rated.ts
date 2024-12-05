export interface TopRatedTour {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
}

export const topRatedTours: TopRatedTour[] = [
  {
    id: "1",
    title: "NYC: Food Tastings and Culture Tour",
    location: "Manchester, England",
    price: 17.32,
    rating: 4.96,
    reviews: 672,
    image:
      "https://images.unsplash.com/photo-1549877452-9c387954fbc2?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "Grand Canyon Horseshoe Bend 2 days",
    location: "Manchester, England",
    price: 15.63,
    rating: 4.96,
    reviews: 672,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "California Sunset/Twilight Boat Cruise",
    location: "Manchester, England",
    price: 48.25,
    rating: 4.96,
    reviews: 672,
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "4",
    title: "NYC: Food Tastings and Culture Tour",
    location: "Manchester, England",
    price: 17.32,
    rating: 4.96,
    reviews: 672,
    image:
      "https://images.unsplash.com/photo-1549877452-9c387954fbc2?q=80&w=2070&auto=format&fit=crop",
  },
];
