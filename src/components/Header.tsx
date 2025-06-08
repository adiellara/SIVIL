import React, { useState } from 'react';
import { BookOpen, Search, ShoppingCart, User, Menu, X, Heart, Bell } from 'lucide-react';

interface HeaderProps {
  onLoginClick: () => void;
  onRegisterClick: () => void;
  cartItemsCount: number;
}

const Header: React.FC<HeaderProps> = ({ onLoginClick, onRegisterClick, cartItemsCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserLoggedIn] = useState(false); // Mock login state

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">SIVIL</span>
            <span className="hidden sm:block text-sm text-gray-600">Libros Usados</span>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Buscar libros, autores, categorías..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-6">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Inicio</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Explorar</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Vender</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Intercambiar</a>
            </nav>

            {/* User Actions */}
            <div className="flex items-center space-x-4">
              {isUserLoggedIn ? (
                <>
                  <button className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors">
                    <Heart className="h-5 w-5" />
                  </button>
                  <button className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors">
                    <Bell className="h-5 w-5" />
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
                  </button>
                  <button className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors">
                    <ShoppingCart className="h-5 w-5" />
                    {cartItemsCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                        {cartItemsCount}
                      </span>
                    )}
                  </button>
                  <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
                    <User className="h-5 w-5" />
                    <span>Mi Cuenta</span>
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={onLoginClick}
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    Iniciar Sesión
                  </button>
                  <button
                    onClick={onRegisterClick}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Registrarse
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar libros..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 space-y-4">
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Inicio</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Explorar</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Vender</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Intercambiar</a>
            </nav>
            <div className="flex flex-col space-y-3 pt-3 border-t border-gray-200">
              {!isUserLoggedIn ? (
                <>
                  <button
                    onClick={onLoginClick}
                    className="text-left text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    Iniciar Sesión
                  </button>
                  <button
                    onClick={onRegisterClick}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center"
                  >
                    Registrarse
                  </button>
                </>
              ) : (
                <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
                  <User className="h-5 w-5" />
                  <span>Mi Cuenta</span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;