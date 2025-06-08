import React from 'react';
import { Filter, SlidersHorizontal } from 'lucide-react';
import { SearchFilters as SearchFiltersType } from '../types';
import { categories, conditions, availabilityOptions } from '../data/mockData';

interface SearchFiltersProps {
  filters: SearchFiltersType;
  onFiltersChange: (filters: SearchFiltersType) => void;
  resultsCount: number;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({ filters, onFiltersChange, resultsCount }) => {
  const [showAdvancedFilters, setShowAdvancedFilters] = React.useState(false);

  const updateFilter = (key: keyof SearchFiltersType, value: any) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  return (
    <div className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Results count and sort */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">
              {resultsCount} libros encontrados
            </span>
            <button
              onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              <SlidersHorizontal className="h-4 w-4" />
              <span>Filtros</span>
            </button>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Ordenar por:</span>
            <select
              value={filters.sortBy}
              onChange={(e) => updateFilter('sortBy', e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="recent">Más Recientes</option>
              <option value="price-low">Precio: Menor a Mayor</option>
              <option value="price-high">Precio: Mayor a Menor</option>
              <option value="rating">Mejor Valorados</option>
            </select>
          </div>
        </div>

        {/* Quick filters */}
        <div className="flex flex-wrap gap-3 mb-4">
          <select
            value={filters.category}
            onChange={(e) => updateFilter('category', e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>

          <select
            value={filters.availability}
            onChange={(e) => updateFilter('availability', e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {availabilityOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>

          <select
            value={filters.condition}
            onChange={(e) => updateFilter('condition', e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {conditions.map(condition => (
              <option key={condition} value={condition}>{condition}</option>
            ))}
          </select>
        </div>

        {/* Advanced filters */}
        {showAdvancedFilters && (
          <div className="bg-gray-50 rounded-lg p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rango de Precio (USD)
                </label>
                <div className="flex items-center space-x-4">
                  <div>
                    <input
                      type="number"
                      placeholder="Mín"
                      value={filters.minPrice || ''}
                      onChange={(e) => updateFilter('minPrice', parseFloat(e.target.value) || 0)}
                      className="w-24 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <span className="text-gray-500">-</span>
                  <div>
                    <input
                      type="number"
                      placeholder="Máx"
                      value={filters.maxPrice || ''}
                      onChange={(e) => updateFilter('maxPrice', parseFloat(e.target.value) || 200)}
                      className="w-24 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <span className="text-sm text-gray-600">$</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Búsqueda por Texto
                </label>
                <input
                  type="text"
                  placeholder="Título, autor, ISBN..."
                  value={filters.query}
                  onChange={(e) => updateFilter('query', e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                onClick={() => onFiltersChange({
                  query: '',
                  category: 'Todas las categorías',
                  minPrice: 0,
                  maxPrice: 200,
                  condition: 'Todas las condiciones',
                  availability: 'Todas las disponibilidades',
                  sortBy: 'recent'
                })}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Limpiar Filtros
              </button>
              <button
                onClick={() => setShowAdvancedFilters(false)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Aplicar Filtros
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchFilters;