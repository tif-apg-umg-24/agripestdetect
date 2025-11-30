import { TrendingUp, Cloud, Droplets, Wind, AlertTriangle, CheckCircle } from 'lucide-react';

export default function PredictionDashboard() {
  const predictions = [
    { day: 'Senin', risk: 25, weather: 'Cerah', temp: 28 },
    { day: 'Selasa', risk: 35, weather: 'Berawan', temp: 27 },
    { day: 'Rabu', risk: 65, weather: 'Hujan', temp: 24 },
    { day: 'Kamis', risk: 80, weather: 'Hujan', temp: 23 },
    { day: 'Jumat', risk: 55, weather: 'Berawan', temp: 26 },
    { day: 'Sabtu', risk: 30, weather: 'Cerah', temp: 29 },
    { day: 'Minggu', risk: 20, weather: 'Cerah', temp: 30 },
  ];

  const getRiskColor = (risk: number) => {
    if (risk >= 70) return 'bg-red-500';
    if (risk >= 40) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getRiskLevel = (risk: number) => {
    if (risk >= 70) return 'Tinggi';
    if (risk >= 40) return 'Sedang';
    return 'Rendah';
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
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Prediksi Serangan Hama</h1>
          <p className="text-gray-600">AI memprediksi potensi serangan berdasarkan cuaca dan pola historis</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Cloud className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Cuaca Hari Ini</p>
                <p className="text-xl font-bold text-gray-800">Cerah Berawan</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-gray-500">Suhu</p>
                <p className="text-lg font-semibold text-gray-700">28°C</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Kelembaban</p>
                <p className="text-lg font-semibold text-gray-700">75%</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg p-6 text-white">
            <div className="flex items-center space-x-3 mb-4">
              <CheckCircle className="w-8 h-8" />
              <div>
                <p className="text-sm text-green-100">Risiko Hari Ini</p>
                <p className="text-2xl font-bold">Rendah</p>
              </div>
            </div>
            <p className="text-sm text-green-100">Kondisi cuaca mendukung untuk pertumbuhan tanaman</p>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-xl shadow-lg p-6 text-white">
            <div className="flex items-center space-x-3 mb-4">
              <AlertTriangle className="w-8 h-8" />
              <div>
                <p className="text-sm text-orange-100">Peringatan 3 Hari</p>
                <p className="text-2xl font-bold">Tinggi</p>
              </div>
            </div>
            <p className="text-sm text-orange-100">Potensi serangan ulat grayak meningkat</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <TrendingUp className="w-6 h-6 text-green-600" />
            <h2 className="text-2xl font-bold text-gray-800">Prediksi 7 Hari Kedepan</h2>
          </div>

          <div className="space-y-4">
            {predictions.map((pred, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all duration-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center space-x-4 flex-1">
                    <div className="w-20">
                      <p className="font-semibold text-gray-800">{pred.day}</p>
                      <p className="text-xs text-gray-500">{pred.weather}</p>
                    </div>

                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Cloud className="w-4 h-4" />
                      <span>{pred.temp}°C</span>
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Risiko Serangan</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getRiskColor(pred.risk)}`}>
                        {getRiskLevel(pred.risk)}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className={`h-2.5 rounded-full transition-all duration-500 ${getRiskColor(pred.risk)}`}
                        style={{ width: `${pred.risk}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="font-bold text-xl mb-4 flex items-center space-x-2">
              <Droplets className="w-6 h-6 text-blue-500" />
              <span>Faktor Cuaca</span>
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Curah Hujan</span>
                <span className="font-semibold text-gray-800">45mm</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Kelembaban</span>
                <span className="font-semibold text-gray-800">75%</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Kecepatan Angin</span>
                <span className="font-semibold text-gray-800">12 km/h</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Suhu Rata-rata</span>
                <span className="font-semibold text-gray-800">26°C</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl shadow-lg p-6 text-white">
            <h3 className="font-bold text-xl mb-4 flex items-center space-x-2">
              <Wind className="w-6 h-6" />
              <span>Rekomendasi AI</span>
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Tingkatkan monitoring pada hari Kamis (risiko tinggi)</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Siapkan pestisida organik mulai hari Rabu</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Lakukan penyemprotan preventif saat cuaca cerah</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Pasang perangkap feromon di sekitar lahan</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
