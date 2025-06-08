import React, { useState } from 'react';
import { X, Star, MapPin, Shield, Heart, ShoppingCart, Repeat, MessageCircle, Share2 } from 'lucide-react';
import { Book } from '../types';

interface BookModalProps {
  book: Book | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (book: Book) => void;
  onToggleFavorite: (book: Book) => void;
  isFavorite: boolean;
}

const BookModal: React.FC<BookModalProps> = ({ 
  book, 
  isOpen, 
  onClose, 
  onAddToCart, 
  onToggleFavorite,
  isFavorite 
}) => {
  const [activeTab, setActiveTab] = useState('details');
  const [showExchangeForm, setShowExchangeForm] = useState(false);

  if (!isOpen || !book) return null;

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

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">Detalles del Libro</h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="overflow-y-auto max-h-[calc(90vh-140px)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
            {/* Image */}
            <div className="space-y-4">
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              
              {/* Action buttons */}
              <div className="flex space-x-3">
                <button
                  onClick={() => onToggleFavorite(book)}
                  className={`flex-1 flex items-center justify-center space-x-2 p-3 rounded-lg border transition-colors ${
                    isFavorite 
                      ? 'bg-red-50 border-red-200 text-red-600' 
                      : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-red-50 hover:border-red-200 hover:text-red-600'
                  }`}
                >
                  <Heart className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`} />
                  <span>{isFavorite ? 'Quitar de Favoritos' : 'Añadir a Favoritos'}</span>
                </button>
                
                <button className="p-3 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-6">
              {/* Title and Author */}
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{book.title}</h1>
                <p className="text-xl text-gray-600">por {book.author}</p>
              </div>

              {/* Rating and Reviews */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < Math.floor(book.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <span className="text-lg font-medium">{book.rating}</span>
                <span className="text-gray-500">({book.reviews} reseñas)</span>
              </div>

              {/* Price */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-3xl font-bold text-blue-600">${book.price.toFixed(2)} USD</div>
                <div className="text-sm text-blue-700">Precio fijo</div>
              </div>

              {/* Book Info */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Categoría:</span>
                  <div className="font-medium">{book.category}</div>
                </div>
                <div>
                  <span className="text-gray-500">Año:</span>
                  <div className="font-medium">{book.year}</div>
                </div>
                <div>
                  <span className="text-gray-500">Estado:</span>
                  <div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getConditionColor(book.condition)}`}>
                      {book.condition}
                    </span>
                  </div>
                </div>
                <div>
                  <span className="text-gray-500">Disponibilidad:</span>
                  <div className="font-medium">{book.availability}</div>
                </div>
              </div>

              {/* Seller Info */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Información del Vendedor</h3>
                <div className="flex items-center space-x-3">
                  <img
                    src={book.seller.avatar}
                    alt={book.seller.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="font-medium">{book.seller.name}</div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span>{book.seller.rating}</span>
                      </div>
                      <span>•</span>
                      <span>{book.seller.reviewsCount} reseñas</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span>{book.seller.location}</span>
                    </div>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    <MessageCircle className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                {book.availability !== 'Intercambio' && (
                  <button
                    onClick={() => onAddToCart(book)}
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    <span>Añadir al Carrito</span>
                  </button>
                )}
                
                {book.availability !== 'Venta' && (
                  <button
                    onClick={() => setShowExchangeForm(true)}
                    className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Repeat className="h-5 w-5" />
                    <span>Proponer Intercambio</span>
                  </button>
                )}
              </div>

              {/* Trust badges */}
              <div className="flex items-center justify-center space-x-6 text-sm text-gray-600 pt-4 border-t">
                <div className="flex items-center space-x-1">
                  <Shield className="h-4 w-4" />
                  <span>Pago Seguro</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Shield className="h-4 w-4" />
                  <span>Garantía de Calidad</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-t">
            <div className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('details')}
                className={`py-4 border-b-2 font-medium transition-colors ${
                  activeTab === 'details' 
                    ? 'border-blue-600 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Descripción
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`py-4 border-b-2 font-medium transition-colors ${
                  activeTab === 'reviews' 
                    ? 'border-blue-600 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Reseñas ({book.reviews})
              </button>
              <button
                onClick={() => setActiveTab('shipping')}
                className={`py-4 border-b-2 font-medium transition-colors ${
                  activeTab === 'shipping' 
                    ? 'border-blue-600 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Envío
              </button>
            </div>

            <div className="p-6">
              {activeTab === 'details' && (
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed">{book.description}</p>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="space-y-6">
                  <div className="text-center text-gray-500">
                    Las reseñas aparecerán aquí una vez que los usuarios compren y evalúen el libro.
                  </div>
                </div>
              )}

              {activeTab === 'shipping' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Envío Estándar</h4>
                      <p className="text-sm text-gray-600">3-5 días laborables</p>
                      <p className="font-medium">$4.99 USD</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Envío Express</h4>
                      <p className="text-sm text-gray-600">1-2 días laborables</p>
                      <p className="font-medium">$9.99 USD</p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p>• Envío gratuito en pedidos superiores a $30 USD</p>
                    <p>• Posibilidad de recogida en punto de entrega</p>
                    <p>• Seguro incluido en todos los envíos</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Exchange Form Modal */}
        {showExchangeForm && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-md w-full p-6">
              <h3 className="text-xl font-bold mb-4">Proponer Intercambio</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ¿Qué libro ofreces a cambio?
                  </label>
                  <input
                    type="text"
                    placeholder="Título del libro que ofreces"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje adicional
                  </label>
                  <textarea
                    placeholder="Describe el estado de tu libro y cualquier detalle adicional..."
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows={3}
                  />
                </div>
                <div className="flex space-x-3">
                  <button
                    type="button"
                    onClick={() => setShowExchangeForm(false)}
                    className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Enviar Propuesta
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookModal;