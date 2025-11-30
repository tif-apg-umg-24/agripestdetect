import { useState } from 'react';
import { Mountain, Camera, Droplets, Thermometer, Activity, CheckCircle } from 'lucide-react';

export default function SoilScanner() {
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState<any>(null);

  const startScan = () => {
    setScanning(true);
    setResult(null);

    setTimeout(() => {
      setScanning(false);
      setResult({
        soilType: 'Tanah Lempung Berpasir',
        moisture: 68,
        ph: 6.5,
        health: 'Baik',
        nutrients: {
          nitrogen: 75,
          phosphorus: 60,
          potassium: 80,
        },
        recommendations: [
          'Tingkatkan kadar fosfor dengan pupuk organik',
          'Pertahankan kelembaban di level 60-70%',
          'pH tanah ideal untuk kebanyakan tanaman',
          'Tambahkan kompos untuk meningkatkan struktur tanah'
        ]
      });
    }, 3000);
  };

  return (
    <section className="py-12 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <button
            onClick={() => window.history.back()}
            className="text-green-600 hover:text-green-700 font-medium mb-4"
          >
            ← Kembali
          </button>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Scan Kualitas Tanah</h1>
          <p className="text-gray-600">Analisis kondisi tanah melalui deteksi visual AI</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-amber-500 to-orange-600 p-6">
            <div className="flex items-center space-x-3">
              <Mountain className="w-8 h-8 text-white" />
              <div>
                <h2 className="text-xl font-bold text-white">Soil Analysis AI</h2>
                <p className="text-orange-100 text-sm">Visual Detection System</p>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <div className="aspect-video bg-gradient-to-br from-amber-900 to-orange-900 rounded-xl flex items-center justify-center mb-6 relative overflow-hidden">
              {scanning ? (
                <div className="text-center">
                  <div className="animate-spin rounded-full h-16 w-16 border-4 border-orange-500 border-t-transparent mb-4 mx-auto"></div>
                  <p className="text-white font-medium">Menganalisis kondisi tanah...</p>
                  <p className="text-gray-400 text-sm mt-2">Memproses data visual</p>
                </div>
              ) : result ? (
                <div className="w-full h-full bg-amber-900 flex items-center justify-center">
                  <CheckCircle className="w-20 h-20 text-green-400" />
                </div>
              ) : (
                <div className="text-center">
                  <Mountain className="w-16 h-16 text-amber-600 mb-4 mx-auto" />
                  <p className="text-gray-400">Arahkan kamera ke permukaan tanah</p>
                </div>
              )}
            </div>

            {result && (
              <div className="space-y-6 mb-6">
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-6 rounded-lg">
                  <h3 className="font-bold text-xl text-gray-800 mb-4">{result.soilType}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Droplets className="w-5 h-5 text-blue-500" />
                        <p className="text-sm text-gray-600">Kelembaban</p>
                      </div>
                      <p className="text-2xl font-bold text-blue-600">{result.moisture}%</p>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${result.moisture}%` }}></div>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Thermometer className="w-5 h-5 text-green-500" />
                        <p className="text-sm text-gray-600">pH Tanah</p>
                      </div>
                      <p className="text-2xl font-bold text-green-600">{result.ph}</p>
                      <p className="text-xs text-gray-500 mt-2">Optimal: 6.0-7.0</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Activity className="w-5 h-5 text-emerald-500" />
                        <p className="text-sm text-gray-600">Kesehatan</p>
                      </div>
                      <p className="text-2xl font-bold text-emerald-600">{result.health}</p>
                      <div className="flex items-center space-x-1 mt-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                        <span className="text-xs text-gray-500">Kondisi optimal</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h4 className="font-bold text-gray-800 mb-4">Kandungan Nutrisi (NPK)</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">Nitrogen (N)</span>
                        <span className="font-semibold text-gray-800">{result.nutrients.nitrogen}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full" style={{ width: `${result.nutrients.nitrogen}%` }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">Fosfor (P)</span>
                        <span className="font-semibold text-gray-800">{result.nutrients.phosphorus}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-3 rounded-full" style={{ width: `${result.nutrients.phosphorus}%` }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">Kalium (K)</span>
                        <span className="font-semibold text-gray-800">{result.nutrients.potassium}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-3 rounded-full" style={{ width: `${result.nutrients.potassium}%` }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-800 mb-4 flex items-center space-x-2">
                    <CheckCircle className="w-6 h-6 text-emerald-600" />
                    <span>Rekomendasi Perbaikan</span>
                  </h4>
                  <ul className="space-y-3">
                    {result.recommendations.map((rec: string, idx: number) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            <button
              onClick={startScan}
              disabled={scanning}
              className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              <Camera className="w-5 h-5" />
              <span>{scanning ? 'Memindai...' : 'Scan Tanah Sekarang'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
