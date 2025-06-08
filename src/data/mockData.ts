import { Book, User } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'María González',
    email: 'maria@email.com',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8,
    reviewsCount: 127,
    joinDate: '2023-01-15',
    location: 'San Salvador, El Salvador'
  },
  {
    id: '2',
    name: 'Carlos Ruiz',
    email: 'carlos@email.com',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.6,
    reviewsCount: 89,
    joinDate: '2023-03-22',
    location: 'Santa Ana, El Salvador'
  },
  {
    id: '3',
    name: 'Ana Martín',
    email: 'ana@email.com',
    avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.9,
    reviewsCount: 203,
    joinDate: '2022-11-08',
    location: 'San Miguel, El Salvador'
  },
  {
    id: '4',
    name: 'Roberto Hernández',
    email: 'roberto@email.com',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.7,
    reviewsCount: 156,
    joinDate: '2023-02-10',
    location: 'Soyapango, El Salvador'
  },
  {
    id: '5',
    name: 'Sofía Ramírez',
    email: 'sofia@email.com',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.9,
    reviewsCount: 98,
    joinDate: '2023-04-18',
    location: 'Mejicanos, El Salvador'
  }
];

export const mockBooks: Book[] = [
  {
    id: '1',
    title: 'Cien años de soledad',
    author: 'Gabriel García Márquez',
    category: 'Literatura',
    year: 1967,
    price: 18.50,
    condition: 'Muy Bueno',
    description: 'Obra maestra del realismo mágico. Edición en español, páginas en excelente estado con algunas marcas menores de uso. Un clásico imprescindible de la literatura latinoamericana.',
    image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=400',
    seller: mockUsers[0],
    availability: 'Ambos',
    rating: 4.7,
    reviews: 34
  },
  {
    id: '2',
    title: 'El Principito',
    author: 'Antoine de Saint-Exupéry',
    category: 'Infantil',
    year: 1943,
    price: 14.50,
    condition: 'Como Nuevo',
    description: 'Clásico de la literatura universal. Perfecto para todas las edades, con ilustraciones originales. Una historia que toca el corazón de niños y adultos.',
    image: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400',
    seller: mockUsers[1],
    availability: 'Venta',
    rating: 4.9,
    reviews: 67
  },
  {
    id: '3',
    title: 'Sapiens: De animales a dioses',
    author: 'Yuval Noah Harari',
    category: 'Historia',
    year: 2011,
    price: 22.75,
    condition: 'Nuevo',
    description: 'Una breve historia de la humanidad. Bestseller internacional que revoluciona nuestra comprensión de la historia humana y nuestro futuro como especie.',
    image: 'https://images.pexels.com/photos/159866/books-book-pages-read-159866.jpeg?auto=compress&cs=tinysrgb&w=400',
    seller: mockUsers[2],
    availability: 'Intercambio',
    rating: 4.8,
    reviews: 92
  },
  {
    id: '4',
    title: '1984',
    author: 'George Orwell',
    category: 'Ficción',
    year: 1949,
    price: 16.25,
    condition: 'Bueno',
    description: 'Distopía clásica sobre el totalitarismo y la vigilancia. Edición de bolsillo con algunas páginas amarillentas pero texto perfectamente legible. Una obra visionaria y perturbadora.',
    image: 'https://images.pexels.com/photos/1831744/pexels-photo-1831744.jpeg?auto=compress&cs=tinysrgb&w=400',
    seller: mockUsers[0],
    availability: 'Venta',
    rating: 4.6,
    reviews: 28
  },
  {
    id: '5',
    title: 'Física Universitaria',
    author: 'Young & Freedman',
    category: 'Educación',
    year: 2018,
    price: 95.00,
    condition: 'Muy Bueno',
    description: 'Libro de texto universitario completo. 14ª edición con ejercicios resueltos y ejemplos prácticos. Ideal para estudiantes de ingeniería y ciencias físicas.',
    image: 'https://images.pexels.com/photos/261895/pexels-photo-261895.jpeg?auto=compress&cs=tinysrgb&w=400',
    seller: mockUsers[1],
    availability: 'Ambos',
    rating: 4.5,
    reviews: 15
  },
  {
    id: '6',
    title: 'El Arte de la Guerra',
    author: 'Sun Tzu',
    category: 'Filosofía',
    year: 500,
    price: 12.50,
    condition: 'Como Nuevo',
    description: 'Tratado clásico sobre estrategia militar aplicable a los negocios y la vida personal. Sabiduría milenaria china para el éxito en cualquier ámbito.',
    image: 'https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=400',
    seller: mockUsers[2],
    availability: 'Venta',
    rating: 4.4,
    reviews: 41
  },
  {
    id: '7',
    title: 'Don Quijote de la Mancha',
    author: 'Miguel de Cervantes',
    category: 'Literatura',
    year: 1605,
    price: 24.00,
    condition: 'Muy Bueno',
    description: 'La obra cumbre de la literatura española. Edición completa con las dos partes del ingenioso hidalgo. Una aventura épica llena de humor y sabiduría.',
    image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=400',
    seller: mockUsers[3],
    availability: 'Ambos',
    rating: 4.8,
    reviews: 56
  },
  {
    id: '8',
    title: 'Cálculo de Una Variable',
    author: 'James Stewart',
    category: 'Educación',
    year: 2020,
    price: 89.99,
    condition: 'Como Nuevo',
    description: 'Libro de texto de cálculo diferencial e integral. 8ª edición con ejercicios actualizados y aplicaciones modernas. Perfecto para estudiantes universitarios.',
    image: 'https://images.pexels.com/photos/261895/pexels-photo-261895.jpeg?auto=compress&cs=tinysrgb&w=400',
    seller: mockUsers[4],
    availability: 'Venta',
    rating: 4.7,
    reviews: 23
  },
  {
    id: '9',
    title: 'Historia de El Salvador',
    author: 'Roque Dalton',
    category: 'Historia',
    year: 1975,
    price: 19.99,
    condition: 'Bueno',
    description: 'Una perspectiva crítica y poética de la historia salvadoreña. Obra fundamental para entender el desarrollo social y político de El Salvador.',
    image: 'https://images.pexels.com/photos/159866/books-book-pages-read-159866.jpeg?auto=compress&cs=tinysrgb&w=400',
    seller: mockUsers[0],
    availability: 'Intercambio',
    rating: 4.6,
    reviews: 42
  },
  {
    id: '10',
    title: 'Cuentos de Cipotes',
    author: 'Salarrué',
    category: 'Literatura',
    year: 1945,
    price: 15.75,
    condition: 'Muy Bueno',
    description: 'Colección de cuentos que retrata la vida rural salvadoreña con humor y ternura. Una joya de la literatura centroamericana.',
    image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=400',
    seller: mockUsers[2],
    availability: 'Venta',
    rating: 4.8,
    reviews: 38
  }
];

export const categories = [
  'Todas las categorías',
  'Literatura',
  'Ficción',
  'No Ficción',
  'Historia',
  'Ciencia',
  'Filosofía',
  'Educación',
  'Infantil',
  'Arte',
  'Biografías',
  'Negocios'
];

export const conditions = [
  'Todas las condiciones',
  'Nuevo',
  'Como Nuevo',
  'Muy Bueno',
  'Bueno',
  'Regular'
];

export const availabilityOptions = [
  'Todas las disponibilidades',
  'Venta',
  'Intercambio',
  'Ambos'
];