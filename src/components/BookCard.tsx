import React from 'react';
import { Heart, ShoppingCart, Repeat, Star, MapPin } from 'lucide-react';
import { Book } from '../types';

interface BookCardProps {
  book: Book;
  onViewDetails: (book: Book) => void;
  onAddToCart: (book: Book) => void;
  onToggleFavorite: (book: Book) => void;
  isFavorite?: boolean;
}

const BookCard: React.FC<BookCardProps> = ({ 
  book, 
  onViewDetails, 
  onAddToCart, 
  onToggleFavorite,
  isFavorite = false 
}) => {
  const getConditionColor = (condition: string) => {
    switch (condition) {
      case 'Nuevo': return 'bg-green-100 text-green-800';
      case 'Como Nuevo': return 'bg-green-100 text-green-700';
      case 'Muy Bueno': return 'bg-blue-100 text-blue-800';
      case 'Bueno': return 'bg-yellow-100 text-yellow-800';
      case 'Regular': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getAvailabilityIcon = (availability: string) => {
    switch (availability) {
      case 'Venta': return <ShoppingCart className="h-4 w-4" />;
      case 'Intercambio': return <Repeat className="h-4 w-4" />;
      case 'Ambos': return (
        <div className="flex space-x-1">
          <ShoppingCart className="h-3 w-3" />
          <Repeat className="h-3 w-3" />
        </div>
      );
      default: return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      {/* Image */}
      <div className="relative">
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-48 object-cover cursor-pointer"
          onClick={() => onViewDetails(book)}
        />
        
        {/* Availability badge */}
        <div className="absolute top-3 left-3">
          <div className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs flex items-center space-x-1">
            {getAvailabilityIcon(book.availability)}
            <span>{book.availability}</span>
          </div>
        </div>

        {/* Favorite button */}
        <button
          onClick={() => onToggleFavorite(book)}
          className={`absolute top-3 right-3 p-2 rounded-full transition-colors ${
            isFavorite 
              ? 'bg-red-500 text-white' 
              : 'bg-white/80 text-gray-600 hover:bg-white hover:text-red-500'
          }`}
        >
          <Heart className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Title and Author */}
        <div className="space-y-1">
          <h3 
            className="font-semibold text-gray-900 line-clamp-2 cursor-pointer hover:text-blue-600 transition-colors"
            onClick={() => onViewDetails(book)}
          >
            {book.title}
          </h3>
          <p className="text-sm text-gray-600">por {book.author}</p>
        </div>

        {/* Category and Year */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{book.category}</span>
          <span>{book.year}</span>
        </div>

        {/* Condition */}
        <div className="flex items-center justify-between">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getConditionColor(book.condition)}`}>
            {book.condition}
          </span>
          
          {/* Rating */}
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium">{book.rating}</span>
            <span className="text-xs text-gray-500">({book.reviews})</span>
          </div>
        </div>

        {/* Seller info */}
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <img
            src={book.seller.avatar}
            alt={book.seller.name}
            className="w-6 h-6 rounded-full"
          />
          <span>{book.seller.name}</span>
          <div className="flex items-center space-x-1">
            <MapPin className="h-3 w-3" />
            <span className="text-xs">{book.seller.location}</span>
          </div>
        </div>

        {/* Price and Actions */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <div className="space-y-1">
            <div className="text-2xl font-bold text-blue-600">${book.price.toFixed(2)}</div>
          </div>
          
          <div className="flex space-x-2">
            {book.availability !== 'Intercambio' && (
              <button
                onClick={() => onAddToCart(book)}
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
                title="Añadir al carrito"
              >
                <ShoppingCart className="h-4 w-4" />
              </button>
            )}
            
            {book.availability !== 'Venta' && (
              <button
                onClick={() => onViewDetails(book)}
                className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition-colors"
                title="Proponer intercambio"
              >
                <Repeat className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;