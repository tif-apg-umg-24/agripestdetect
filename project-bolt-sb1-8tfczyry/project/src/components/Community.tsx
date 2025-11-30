import { useState } from 'react';
import { Users, MessageSquare, ThumbsUp, Camera, Search } from 'lucide-react';

interface Post {
  id: number;
  author: string;
  location: string;
  content: string;
  pest: string;
  likes: number;
  comments: number;
  timestamp: string;
}

export default function Community() {
  const [posts] = useState<Post[]>([
    {
      id: 1,
      author: 'Pak Budi',
      location: 'Bandung, Jawa Barat',
      content: 'Berhasil mengatasi ulat grayak dengan ekstrak daun mimba! Hasilnya sangat efektif dalam 3 hari. Terima kasih AgriPest untuk rekomendasinya.',
      pest: 'Ulat Grayak',
      likes: 24,
      comments: 8,
      timestamp: '2 jam yang lalu',
    },
    {
      id: 2,
      author: 'Ibu Sari',
      location: 'Yogyakarta',
      content: 'Ada yang pernah coba kombinasi bawang putih + cabai untuk wereng? Butuh saran dosis yang tepat untuk lahan 1 hektar.',
      pest: 'Wereng Coklat',
      likes: 15,
      comments: 12,
      timestamp: '5 jam yang lalu',
    },
    {
      id: 3,
      author: 'Pak Ahmad',
      location: 'Malang, Jawa Timur',
      content: 'Tips rotasi tanaman: Setelah padi, tanam kacang-kacangan. Mengurangi hama hingga 60%! Sudah terbukti di lahan saya.',
      pest: 'Pencegahan',
      likes: 42,
      comments: 18,
      timestamp: '1 hari yang lalu',
    },
    {
      id: 4,
      author: 'Ibu Dewi',
      location: 'Sukabumi, Jawa Barat',
      content: 'Scan kualitas tanah saya menunjukkan kekurangan fosfor. Setelah aplikasi pupuk organik sesuai rekomendasi, hasil panen meningkat 30%!',
      pest: 'Nutrisi Tanah',
      likes: 31,
      comments: 9,
      timestamp: '2 hari yang lalu',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

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
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Komunitas Petani</h1>
          <p className="text-gray-600">Berbagi pengalaman dan solusi dengan ribuan petani lainnya</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-6 text-white shadow-lg">
            <Users className="w-8 h-8 mb-3 opacity-80" />
            <div className="text-3xl font-bold mb-1">52,480</div>
            <div className="text-green-100">Anggota Aktif</div>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl p-6 text-white shadow-lg">
            <MessageSquare className="w-8 h-8 mb-3 opacity-80" />
            <div className="text-3xl font-bold mb-1">12,350</div>
            <div className="text-blue-100">Diskusi</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl p-6 text-white shadow-lg">
            <ThumbsUp className="w-8 h-8 mb-3 opacity-80" />
            <div className="text-3xl font-bold mb-1">98%</div>
            <div className="text-purple-100">Tingkat Kepuasan</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Cari diskusi, hama, atau solusi..."
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
              />
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg flex items-center justify-center space-x-2 transform hover:scale-105 transition-all">
              <Camera className="w-5 h-5" />
              <span>Buat Postingan</span>
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {post.author.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">{post.author}</h3>
                      <p className="text-sm text-gray-500">{post.location}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                    {post.pest}
                  </span>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">{post.content}</p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors">
                      <ThumbsUp className="w-5 h-5" />
                      <span className="text-sm font-medium">{post.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                      <MessageSquare className="w-5 h-5" />
                      <span className="text-sm font-medium">{post.comments}</span>
                    </button>
                  </div>
                  <span className="text-xs text-gray-400">{post.timestamp}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-lg mb-4">Topik Populer</h3>
              <div className="space-y-3">
                {['Ulat Grayak', 'Wereng Coklat', 'Pestisida Organik', 'Rotasi Tanaman', 'Kualitas Tanah'].map(
                  (topic, idx) => (
                    <button
                      key={idx}
                      className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-green-50 rounded-lg transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-700">{topic}</span>
                        <span className="text-xs text-gray-500">{Math.floor(Math.random() * 500) + 100} diskusi</span>
                      </div>
                    </button>
                  )
                )}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl shadow-lg p-6 text-white">
              <MessageSquare className="w-8 h-8 mb-3 opacity-80" />
              <h3 className="font-bold text-lg mb-2">Butuh Bantuan?</h3>
              <p className="text-blue-100 text-sm mb-4">
                Tim ahli kami siap membantu menjawab pertanyaan Anda
              </p>
              <button className="w-full px-4 py-2 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                Hubungi Ahli
              </button>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg p-6 text-white">
              <Users className="w-8 h-8 mb-3 opacity-80" />
              <h3 className="font-bold text-lg mb-2">Petani Terbaik Bulan Ini</h3>
              <div className="space-y-3 mt-4">
                {['Pak Joko', 'Ibu Ani', 'Pak Rudi'].map((name, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center font-bold">
                      {idx + 1}
                    </div>
                    <span className="text-green-100">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
