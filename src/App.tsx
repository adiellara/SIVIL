import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SearchFilters from './components/SearchFilters';
import BookGrid from './components/BookGrid';
import BookModal from './components/BookModal';
import AuthModal from './components/AuthModal';
import Footer from './components/Footer';
import { useBooks } from './hooks/useBooks';
import { useCart } from './hooks/useCart';
import { useFavorites } from './hooks/useFavorites';
import { Book } from './types';

function App() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  
  const { books, filters, setFilters } = useBooks();
  const { cartItemsCount, addToCart } = useCart();
  const { favorites, toggleFavorite } = useFavorites();

  const handleViewDetails = (book: Book) => {
    setSelectedBook(book);
    setIsBookModalOpen(true);
  };

  const handleCloseBookModal = () => {
    setIsBookModalOpen(false);
    setSelectedBook(null);
  };

  const handleLoginClick = () => {
    setAuthMode('login');
    setIsAuthModalOpen(true);
  };

  const handleRegisterClick = () => {
    setAuthMode('register');
    setIsAuthModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        onLoginClick={handleLoginClick}
        onRegisterClick={handleRegisterClick}
        cartItemsCount={cartItemsCount}
      />
      
      <Hero />
      
      <SearchFilters
        filters={filters}
        onFiltersChange={setFilters}
        resultsCount={books.length}
      />
      
      <BookGrid
        books={books}
        onViewDetails={handleViewDetails}
        onAddToCart={addToCart}
        onToggleFavorite={toggleFavorite}
        favorites={favorites}
      />
      
      <Footer />

      {/* Modals */}
      <BookModal
        book={selectedBook}
        isOpen={isBookModalOpen}
        onClose={handleCloseBookModal}
        onAddToCart={addToCart}
        onToggleFavorite={toggleFavorite}
        isFavorite={selectedBook ? favorites.has(selectedBook.id) : false}
      />

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        mode={authMode}
        onModeChange={setAuthMode}
      />
    </div>
  );
}

export default App;