import React from 'react';
import { BookOpen, Users, Shield, Repeat } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Compra, Vende e{' '}
              <span className="text-yellow-300">Intercambia</span>{' '}
              Libros Usados
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
              La plataforma más segura y confiable para dar nueva vida a tus libros favoritos
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105">
                Explorar Libros
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-700 transition-all duration-300">
                Vender Mis Libros
              </button>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Libros apilados"
                className="w-full h-80 object-cover rounded-lg shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-yellow-500 text-blue-900 p-4 rounded-lg shadow-lg transform -rotate-12">
              <div className="text-2xl font-bold">+50,000</div>
              <div className="text-sm">Libros Disponibles</div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <div className="text-center space-y-4">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
              <BookOpen className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold">Amplio Catálogo</h3>
            <p className="text-blue-100">Miles de libros de todas las categorías y géneros</p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold">Comunidad Activa</h3>
            <p className="text-blue-100">Conecta con otros amantes de la lectura</p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
              <Shield className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold">Transacciones Seguras</h3>
            <p className="text-blue-100">Pagos protegidos y garantías de calidad</p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
              <Repeat className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold">Sistema de Intercambio</h3>
            <p className="text-blue-100">Intercambia tus libros por otros que te interesen</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;