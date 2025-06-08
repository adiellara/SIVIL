import { useState } from 'react';
import { Book } from '../types';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const toggleFavorite = (book: Book) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(book.id)) {
        newFavorites.delete(book.id);
      } else {
        newFavorites.add(book.id);
      }
      return newFavorites;
    });
  };

  const isFavorite = (bookId: string) => favorites.has(bookId);

  return {
    favorites,
    toggleFavorite,
    isFavorite
  };
};