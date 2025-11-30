import { useState } from 'react';
import { Calculator, TrendingDown, DollarSign, Leaf } from 'lucide-react';

export default function LossCalculator() {
  const [area, setArea] = useState('');
  const [damage, setDamage] = useState(30);
  const [cropType, setCropType] = useState('padi');
  const [result, setResult] = useState<any>(null);

  const calculate = () => {
    const areaNum = parseFloat(area) || 0;
    const pricePerHectare: Record<string, number> = {
      padi: 8000000,
      jagung: 6000000,
      cabai: 15000000,
      tomat: 12000000,
    };

    const expectedYield = areaNum * pricePerHectare[cropType];
    const damagePercent = damage / 100;
    const estimatedLoss = expectedYield * damagePercent;
    const remainingYield = expectedYield - estimatedLoss;

    setResult({
      expectedYield,
      estimatedLoss,
      remainingYield,
      damagePercent: damage,
      savings: estimatedLoss * 0.7,
    });
  };

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(num);
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
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Kalkulator Estimasi Kerugian</h1>
          <p className="text-gray-600">Hitung potensi kerugian panen berdasarkan tingkat kerusakan</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-red-500 to-orange-600 p-6">
            <div className="flex items-center space-x-3">
              <Calculator className="w-8 h-8 text-white" />
              <div>
                <h2 className="text-xl font-bold text-white">Perhitungan Otomatis</h2>
                <p className="text-red-100 text-sm">Estimasi Kerugian Panen</p>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <div className="space-y-6 mb-8">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Jenis Tanaman
                </label>
                <select
                  value={cropType}
                  onChange={(e) => setCropType(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                >
                  <option value="padi">Padi</option>
                  <option value="jagung">Jagung</option>
                  <option value="cabai">Cabai</option>
                  <option value="tomat">Tomat</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Luas Lahan (Hektar)
                </label>
                <input
                  type="number"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  placeholder="Contoh: 2.5"
                  step="0.1"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Tingkat Kerusakan: {damage}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={damage}
                  onChange={(e) => setDamage(parseInt(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-500"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>0%</span>
                  <span>25%</span>
                  <span>50%</span>
                  <span>75%</span>
                  <span>100%</span>
                </div>
              </div>
            </div>

            <button
              onClick={calculate}
              className="w-full px-6 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 mb-8"
            >
              Hitung Estimasi Kerugian
            </button>

            {result && (
              <div className="space-y-6">
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-6 text-white">
                    <Leaf className="w-8 h-8 mb-3 opacity-80" />
                    <p className="text-sm text-green-100 mb-1">Hasil Panen Normal</p>
                    <p className="text-xl font-bold">{formatCurrency(result.expectedYield)}</p>
                  </div>

                  <div className="bg-gradient-to-br from-red-500 to-orange-600 rounded-xl p-6 text-white">
                    <TrendingDown className="w-8 h-8 mb-3 opacity-80" />
                    <p className="text-sm text-red-100 mb-1">Estimasi Kerugian</p>
                    <p className="text-xl font-bold">{formatCurrency(result.estimatedLoss)}</p>
                  </div>

                  <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl p-6 text-white">
                    <DollarSign className="w-8 h-8 mb-3 opacity-80" />
                    <p className="text-sm text-blue-100 mb-1">Sisa Hasil Panen</p>
                    <p className="text-xl font-bold">{formatCurrency(result.remainingYield)}</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 rounded-lg p-6">
                  <h3 className="font-bold text-xl text-gray-800 mb-4">Analisis Kerugian</h3>

                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Persentase Kerusakan</span>
                      <span className="font-bold text-red-600">{result.damagePercent}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div
                        className="bg-gradient-to-r from-red-500 to-orange-500 h-4 rounded-full transition-all duration-500"
                        style={{ width: `${result.damagePercent}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 mb-4">
                    <p className="text-sm text-gray-600 mb-2">
                      Dengan penanganan cepat menggunakan AgriPest Detect Pro, Anda dapat menyelamatkan hingga:
                    </p>
                    <p className="text-2xl font-bold text-green-600">
                      {formatCurrency(result.savings)}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">~70% dari kerugian dapat dicegah</p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-700">Rekomendasi:</p>
                    <ul className="text-sm text-gray-600 space-y-1 ml-4">
                      <li>• Segera lakukan scan hama untuk identifikasi akurat</li>
                      <li>• Terapkan penanganan organik sesegera mungkin</li>
                      <li>• Monitoring rutin untuk mencegah kerusakan lebih lanjut</li>
                      <li>• Konsultasi dengan Asisten AI untuk solusi optimal</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
