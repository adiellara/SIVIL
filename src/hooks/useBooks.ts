import { useState, useMemo } from 'react';
import { Book, SearchFilters } from '../types';
import { mockBooks } from '../data/mockData';

export const useBooks = () => {
  const [books] = useState<Book[]>(mockBooks);
  const [filters, setFilters] = useState<SearchFilters>({
    query: '',
    category: 'Todas las categorías',
    minPrice: 0,
    maxPrice: 200,
    condition: 'Todas las condiciones',
    availability: 'Todas las disponibilidades',
    sortBy: 'recent'
  });

  const filteredBooks = useMemo(() => {
    let filtered = books.filter(book => {
      // Text search
      if (filters.query && !book.title.toLowerCase().includes(filters.query.toLowerCase()) &&
          !book.author.toLowerCase().includes(filters.query.toLowerCase())) {
        return false;
      }

      // Category filter
      if (filters.category !== 'Todas las categorías' && book.category !== filters.category) {
        return false;
      }

      // Price range
      if (book.price < filters.minPrice || book.price > filters.maxPrice) {
        return false;
      }

      // Condition filter
      if (filters.condition !== 'Todas las condiciones' && book.condition !== filters.condition) {
        return false;
      }

      // Availability filter
      if (filters.availability !== 'Todas las disponibilidades' && book.availability !== filters.availability) {
        return false;
      }

      return true;
    });

    // Sort books
    switch (filters.sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'recent':
      default:
        // Keep original order for "recent"
        break;
    }

    return filtered;
  }, [books, filters]);

  return {
    books: filteredBooks,
    filters,
    setFilters,
    totalBooks: books.length
  };
};