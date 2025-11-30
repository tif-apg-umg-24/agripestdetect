import { useState } from 'react';
import { Camera, Upload, CheckCircle, AlertTriangle, Leaf, Zap } from 'lucide-react';

export default function Scanner() {
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState<any>(null);

  const startScan = () => {
    setScanning(true);
    setResult(null);

    setTimeout(() => {
      setScanning(false);
      setResult({
        pest: 'Ulat Grayak (Spodoptera litura)',
        confidence: 96,
        severity: 'Tinggi',
        damage: 65,
        recommendations: [
          'Aplikasi pestisida nabati ekstrak mimba',
          'Pemasangan perangkap feromon',
          'Penggunaan Bacillus thuringiensis',
          'Penyemprotan pada malam hari'
        ],
        organic: [
          'Larutan bawang putih + cabai',
          'Ekstrak daun pepaya',
          'Campuran sabun cuci + minyak goreng'
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
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Scan Hama Real-Time</h1>
          <p className="text-gray-600">Deteksi hama pada tanaman Anda menggunakan teknologi AI</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6">
            <div className="flex items-center space-x-3">
              <Camera className="w-8 h-8 text-white" />
              <div>
                <h2 className="text-xl font-bold text-white">AI Detection System</h2>
                <p className="text-green-100 text-sm">Powered by Deep Learning</p>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl flex items-center justify-center mb-6 relative overflow-hidden">
              {scanning ? (
                <div className="text-center">
                  <div className="animate-spin rounded-full h-16 w-16 border-4 border-green-500 border-t-transparent mb-4 mx-auto"></div>
                  <p className="text-white font-medium">Menganalisis gambar...</p>
                  <p className="text-gray-400 text-sm mt-2">AI sedang memproses</p>
                </div>
              ) : result ? (
                <div className="w-full h-full bg-green-900 flex items-center justify-center">
                  <CheckCircle className="w-20 h-20 text-green-400" />
                </div>
              ) : (
                <div className="text-center">
                  <Camera className="w-16 h-16 text-gray-600 mb-4 mx-auto" />
                  <p className="text-gray-400">Kamera siap digunakan</p>
                </div>
              )}

              {scanning && (
                <div className="absolute inset-0 border-4 border-green-500 animate-pulse"></div>
              )}
            </div>

            {result && (
              <div className="space-y-6 mb-6">
                <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-lg">
                  <div className="flex items-start space-x-4">
                    <AlertTriangle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="font-bold text-xl text-gray-800 mb-2">{result.pest}</h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-600">Akurasi</p>
                          <p className="text-2xl font-bold text-green-600">{result.confidence}%</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Tingkat Bahaya</p>
                          <p className="text-xl font-bold text-red-600">{result.severity}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Kerusakan</p>
                          <p className="text-2xl font-bold text-orange-600">{result.damage}%</p>
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                          <div
                            className="bg-gradient-to-r from-red-500 to-orange-500 h-3 rounded-full transition-all duration-1000"
                            style={{ width: `${result.damage}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-xl p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <Zap className="w-6 h-6 text-green-600" />
                    <h4 className="font-bold text-gray-800">Rekomendasi Penanganan</h4>
                  </div>
                  <ul className="space-y-2">
                    {result.recommendations.map((rec: string, idx: number) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-emerald-50 rounded-xl p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <Leaf className="w-6 h-6 text-emerald-600" />
                    <h4 className="font-bold text-gray-800">Pestisida Organik DIY</h4>
                  </div>
                  <ul className="space-y-2">
                    {result.organic.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Leaf className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={startScan}
                disabled={scanning}
                className="flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <Camera className="w-5 h-5" />
                <span>{scanning ? 'Memindai...' : 'Mulai Scan'}</span>
              </button>
              <button className="flex items-center justify-center space-x-2 px-6 py-4 bg-white text-gray-700 font-semibold rounded-xl shadow-md hover:shadow-lg border-2 border-gray-200 hover:border-green-500 transition-all duration-200">
                <Upload className="w-5 h-5" />
                <span>Upload Foto</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
