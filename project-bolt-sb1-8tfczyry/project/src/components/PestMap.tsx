import { MapPin, AlertCircle, TrendingUp, Users } from 'lucide-react';

export default function PestMap() {
  const pestData = [
    { id: 1, location: 'Bandung, Jawa Barat', pest: 'Ulat Grayak', severity: 'Tinggi', farmers: 23, lat: -6.9, lng: 107.6 },
    { id: 2, location: 'Yogyakarta', pest: 'Wereng Coklat', severity: 'Sedang', farmers: 15, lat: -7.8, lng: 110.4 },
    { id: 3, location: 'Malang, Jawa Timur', pest: 'Trips', severity: 'Rendah', farmers: 8, lat: -7.9, lng: 112.6 },
    { id: 4, location: 'Sukabumi, Jawa Barat', pest: 'Penggerek Batang', severity: 'Tinggi', farmers: 31, lat: -6.9, lng: 106.9 },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Tinggi': return 'bg-red-500';
      case 'Sedang': return 'bg-yellow-500';
      case 'Rendah': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
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
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Peta Persebaran Hama</h1>
          <p className="text-gray-600">Monitoring real-time serangan hama di berbagai wilayah</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-gradient-to-br from-red-500 to-orange-500 rounded-xl p-6 text-white shadow-lg">
            <AlertCircle className="w-8 h-8 mb-3 opacity-80" />
            <div className="text-3xl font-bold mb-1">12</div>
            <div className="text-red-100">Area Tingkat Tinggi</div>
          </div>
          <div className="bg-gradient-to-br from-yellow-500 to-amber-500 rounded-xl p-6 text-white shadow-lg">
            <TrendingUp className="w-8 h-8 mb-3 opacity-80" />
            <div className="text-3xl font-bold mb-1">28</div>
            <div className="text-yellow-100">Area Tingkat Sedang</div>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl p-6 text-white shadow-lg">
            <Users className="w-8 h-8 mb-3 opacity-80" />
            <div className="text-3xl font-bold mb-1">2,450</div>
            <div className="text-blue-100">Petani Terdampak</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-600 p-6">
              <div className="flex items-center space-x-3">
                <MapPin className="w-6 h-6 text-white" />
                <h2 className="text-xl font-bold text-white">Peta Interaktif</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="aspect-square bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  {pestData.map((item) => (
                    <div
                      key={item.id}
                      className={`absolute w-12 h-12 rounded-full ${getSeverityColor(item.severity)} opacity-60 animate-ping`}
                      style={{
                        top: `${(item.lat + 10) * 5}%`,
                        left: `${(item.lng - 100) * 8}%`,
                      }}
                    ></div>
                  ))}
                </div>
                <div className="relative z-10">
                  <MapPin className="w-24 h-24 text-blue-400" />
                  <p className="text-center text-gray-600 mt-4 font-medium">Peta Wilayah Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="font-bold text-xl mb-4 flex items-center space-x-2">
                <AlertCircle className="w-6 h-6 text-red-500" />
                <span>Laporan Terkini</span>
              </h3>
              <div className="space-y-3">
                {pestData.map((item) => (
                  <div
                    key={item.id}
                    className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all duration-200 cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <MapPin className="w-4 h-4 text-gray-500" />
                          <span className="font-semibold text-gray-800">{item.location}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{item.pest}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getSeverityColor(item.severity)}`}>
                        {item.severity}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{item.farmers} petani terdampak</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-white shadow-xl">
              <h3 className="font-bold text-lg mb-3">Zona Aman</h3>
              <p className="text-green-100 mb-4">Area Anda saat ini dalam kondisi aman dari serangan hama berat</p>
              <button className="px-4 py-2 bg-white text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors">
                Aktifkan Notifikasi
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
