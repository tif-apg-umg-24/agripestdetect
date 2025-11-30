import { ShoppingCart, Star, Search, Filter } from 'lucide-react';

export default function Marketplace() {
  const products = [
    {
      id: 1,
      name: 'Pestisida Organik Mimba',
      category: 'Pestisida',
      price: 85000,
      rating: 4.8,
      reviews: 234,
      image: '🌿',
      stock: 'Tersedia',
    },
    {
      id: 2,
      name: 'Pupuk Kompos Premium',
      category: 'Pupuk',
      price: 120000,
      rating: 4.9,
      reviews: 189,
      image: '🌱',
      stock: 'Tersedia',
    },
    {
      id: 3,
      name: 'Sprayer Elektrik 16L',
      category: 'Alat',
      price: 650000,
      rating: 4.7,
      reviews: 92,
      image: '💧',
      stock: 'Tersedia',
    },
    {
      id: 4,
      name: 'Perangkap Feromon',
      category: 'Alat',
      price: 45000,
      rating: 4.6,
      reviews: 156,
      image: '🪤',
      stock: 'Tersedia',
    },
    {
      id: 5,
      name: 'Bacillus Thuringiensis',
      category: 'Pestisida',
      price: 95000,
      rating: 4.9,
      reviews: 201,
      image: '🧪',
      stock: 'Terbatas',
    },
    {
      id: 6,
      name: 'Pupuk NPK Organik',
      category: 'Pupuk',
      price: 110000,
      rating: 4.8,
      reviews: 178,
      image: '🌾',
      stock: 'Tersedia',
    },
  ];

  const categories = ['Semua', 'Pestisida', 'Pupuk', 'Alat', 'Bibit'];

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(num);
  };

  return (
    <section className="py-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <button
            onClick={() => window.history.back()}
            className="text-green-600 hover:text-green-700 font-medium mb-4"
          >
            ← Kembali
          </button>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Marketplace Pertanian</h1>
          <p className="text-gray-600">Belanja kebutuhan pertanian dengan harga terjangkau</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-6 text-white shadow-lg">
            <ShoppingCart className="w-8 h-8 mb-3 opacity-80" />
            <div className="text-3xl font-bold mb-1">500+</div>
            <div className="text-green-100">Produk Tersedia</div>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl p-6 text-white shadow-lg">
            <Star className="w-8 h-8 mb-3 opacity-80" />
            <div className="text-3xl font-bold mb-1">4.8/5</div>
            <div className="text-blue-100">Rating Toko</div>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-xl p-6 text-white shadow-lg">
            <ShoppingCart className="w-8 h-8 mb-3 opacity-80" />
            <div className="text-3xl font-bold mb-1">15K+</div>
            <div className="text-orange-100">Transaksi Sukses</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Cari produk, pestisida, pupuk..."
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
              />
            </div>
            <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2">
              <Filter className="w-5 h-5" />
              <span>Filter</span>
            </button>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                className={`px-4 py-2 rounded-lg transition-all ${
                  idx === 0
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="aspect-square bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center text-8xl group-hover:scale-110 transition-transform duration-300">
                {product.image}
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                    {product.category}
                  </span>
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      product.stock === 'Tersedia'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-orange-100 text-orange-700'
                    }`}
                  >
                    {product.stock}
                  </span>
                </div>

                <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-2">{product.name}</h3>

                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-semibold text-gray-700 ml-1">{product.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">({product.reviews} ulasan)</span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-green-600">{formatCurrency(product.price)}</p>
                    <p className="text-xs text-gray-500">Per unit</p>
                  </div>
                  <button className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-6 sm:p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Butuh Rekomendasi Produk?</h3>
              <p className="text-green-100">
                Asisten AI kami siap membantu memilih produk yang tepat untuk kebutuhan Anda
              </p>
            </div>
            <button className="px-8 py-4 bg-white text-green-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
              Konsultasi Sekarang
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
