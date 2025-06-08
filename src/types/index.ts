export interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  year: number;
  price: number;
  condition: 'Nuevo' | 'Como Nuevo' | 'Muy Bueno' | 'Bueno' | 'Regular';
  description: string;
  image: string;
  seller: User;
  availability: 'Venta' | 'Intercambio' | 'Ambos';
  rating: number;
  reviews: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  rating: number;
  reviewsCount: number;
  joinDate: string;
  location: string;
}

export interface CartItem {
  book: Book;
  quantity: number;
}

export interface ExchangeRequest {
  id: string;
  requestedBook: Book;
  offeredBooks: Book[];
  requester: User;
  status: 'Pendiente' | 'Aceptado' | 'Rechazado' | 'Completado';
  message: string;
  createdAt: string;
}

export interface SearchFilters {
  query: string;
  category: string;
  minPrice: number;
  maxPrice: number;
  condition: string;
  availability: string;
  sortBy: 'recent' | 'price-low' | 'price-high' | 'rating';
}