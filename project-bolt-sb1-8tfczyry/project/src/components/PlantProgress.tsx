import { BarChart3, TrendingUp, Calendar, Leaf } from 'lucide-react';

export default function PlantProgress() {
  const weeklyData = [
    { week: 'Minggu 1', height: 15, health: 85, pests: 5 },
    { week: 'Minggu 2', height: 28, health: 88, pests: 3 },
    { week: 'Minggu 3', height: 42, health: 90, pests: 2 },
    { week: 'Minggu 4', height: 58, health: 92, pests: 1 },
  ];

  const maxHeight = Math.max(...weeklyData.map((d) => d.height));

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
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Laporan Perkembangan Tanaman</h1>
          <p className="text-gray-600">Monitoring pertumbuhan dan kesehatan tanaman Anda</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-6 text-white shadow-lg">
            <Leaf className="w-8 h-8 mb-3 opacity-80" />
            <div className="text-3xl font-bold mb-1">92%</div>
            <div className="text-green-100">Kesehatan Tanaman</div>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl p-6 text-white shadow-lg">
            <TrendingUp className="w-8 h-8 mb-3 opacity-80" />
            <div className="text-3xl font-bold mb-1">+38%</div>
            <div className="text-blue-100">Pertumbuhan</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl p-6 text-white shadow-lg">
            <BarChart3 className="w-8 h-8 mb-3 opacity-80" />
            <div className="text-3xl font-bold mb-1">58 cm</div>
            <div className="text-purple-100">Tinggi Rata-rata</div>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-xl p-6 text-white shadow-lg">
            <Calendar className="w-8 h-8 mb-3 opacity-80" />
            <div className="text-3xl font-bold mb-1">28</div>
            <div className="text-orange-100">Hari Monitoring</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center space-x-2">
                <BarChart3 className="w-6 h-6 text-green-600" />
                <span>Pertumbuhan Tinggi</span>
              </h2>
              <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm">
                <option>4 Minggu</option>
                <option>8 Minggu</option>
                <option>12 Minggu</option>
              </select>
            </div>

            <div className="h-64 flex items-end justify-between space-x-4">
              {weeklyData.map((data, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center">
                  <div className="w-full bg-gray-100 rounded-t-lg relative" style={{ height: '200px' }}>
                    <div
                      className="absolute bottom-0 w-full bg-gradient-to-t from-green-500 to-emerald-400 rounded-t-lg transition-all duration-1000 flex items-end justify-center pb-2"
                      style={{ height: `${(data.height / maxHeight) * 100}%` }}
                    >
                      <span className="text-white font-bold text-sm">{data.height}cm</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-3 font-medium">{data.week}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
              <TrendingUp className="w-6 h-6 text-blue-600" />
              <span>Tingkat Kesehatan</span>
            </h2>

            <div className="space-y-6">
              {weeklyData.map((data, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-gray-700">{data.week}</span>
                    <span className="font-bold text-green-600">{data.health}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div
                      className="bg-gradient-to-r from-green-500 to-emerald-500 h-4 rounded-full transition-all duration-1000 flex items-center justify-end pr-2"
                      style={{ width: `${data.health}%` }}
                    >
                      <span className="text-xs text-white font-semibold"></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-gray-700">
                <span className="font-semibold text-green-700">Analisis AI:</span> Kesehatan tanaman meningkat
                konsisten. Pertahankan pola perawatan saat ini untuk hasil optimal.
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="font-bold text-lg mb-4 flex items-center space-x-2">
              <Leaf className="w-5 h-5 text-green-600" />
              <span>Deteksi Hama</span>
            </h3>
            <div className="space-y-3">
              {weeklyData.map((data, idx) => (
                <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">{data.week}</span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      data.pests <= 2
                        ? 'bg-green-100 text-green-700'
                        : data.pests <= 4
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {data.pests} insiden
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl shadow-lg p-6 text-white">
            <Calendar className="w-8 h-8 mb-3 opacity-80" />
            <h3 className="font-bold text-lg mb-4">Jadwal Perawatan</h3>
            <div className="space-y-3">
              <div className="bg-white/20 rounded-lg p-3">
                <p className="text-sm text-blue-100">Besok</p>
                <p className="font-semibold">Penyiraman Pagi</p>
              </div>
              <div className="bg-white/20 rounded-lg p-3">
                <p className="text-sm text-blue-100">3 Hari Lagi</p>
                <p className="font-semibold">Pemupukan Organik</p>
              </div>
              <div className="bg-white/20 rounded-lg p-3">
                <p className="text-sm text-blue-100">1 Minggu</p>
                <p className="font-semibold">Monitoring Hama</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg p-6 text-white">
            <TrendingUp className="w-8 h-8 mb-3 opacity-80" />
            <h3 className="font-bold text-lg mb-4">Prediksi Panen</h3>
            <div className="mb-4">
              <p className="text-sm text-green-100 mb-2">Estimasi Waktu Panen</p>
              <p className="text-3xl font-bold">42 Hari</p>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <p className="text-sm text-green-100 mb-1">Estimasi Hasil</p>
              <p className="text-2xl font-bold">2.8 Ton/Ha</p>
              <p className="text-xs text-green-100 mt-2">Berdasarkan kondisi saat ini</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
