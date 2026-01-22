
export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
}

export interface Review {
  id: string;
  author: string;
  text: string;
  rating: number;
}

export enum Section {
  HERO = 'hero',
  SERVICES = 'services',
  ABOUT = 'about',
  GALLERY = 'gallery',
  REVIEWS = 'reviews'
}
