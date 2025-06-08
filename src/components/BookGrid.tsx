import React from 'react';
import { Book } from '../types';
import BookCard from './BookCard';

interface BookGridProps {
  books: Book[];
  onViewDetails: (book: Book) => void;
  onAddToCart: (book: Book) => void;
  onToggleFavorite: (book: Book) => void;
  favorites: Set<string>;
}

const BookGrid: React.FC<BookGridProps> = ({ 
  books, 
  onViewDetails, 
  onAddToCart, 
  onToggleFavorite,
  favorites 
}) => {
  if (books.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="space-y-4">
          <div className="text-6xl">📚</div>
          <h3 className="text-xl font-semibold text-gray-900">No se encontraron libros</h3>
          <p className="text-gray-600">Intenta ajustar tus filtros de búsqueda</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Explorar Todos los Libros
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {books.map(book => (
          <BookCard
            key={book.id}
            book={book}
            onViewDetails={onViewDetails}
            onAddToCart={onAddToCart}
            onToggleFavorite={onToggleFavorite}
            isFavorite={favorites.has(book.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default BookGrid;