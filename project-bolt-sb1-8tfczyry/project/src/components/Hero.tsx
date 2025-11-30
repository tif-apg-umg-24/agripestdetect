import { Camera, TrendingUp, MapPin, Shield } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

export default function Hero({ onGetStarted }: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full">
              <Shield className="w-4 h-4 text-green-600 mr-2" />
              <span className="text-sm font-semibold text-green-700">AI-Powered Technology</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Lindungi Tanaman Anda dengan{' '}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Deteksi AI
              </span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              AgriPest Detect Pro menggunakan teknologi AI canggih untuk mendeteksi hama secara real-time,
              memprediksi serangan, dan memberikan solusi ramah lingkungan untuk meningkatkan hasil panen Anda.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onGetStarted}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Mulai Scan Sekarang
              </button>
              <button className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl shadow-md hover:shadow-lg border-2 border-gray-200 hover:border-green-500 transition-all duration-200">
                Lihat Demo
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">99%</div>
                <div className="text-sm text-gray-600 mt-1">Akurasi AI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">50K+</div>
                <div className="text-sm text-gray-600 mt-1">Petani Aktif</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">24/7</div>
                <div className="text-sm text-gray-600 mt-1">Support AI</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-300">
              <div className="aspect-square bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <Camera className="w-32 h-32 text-green-500" />
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 bg-green-50 p-4 rounded-lg">
                  <Camera className="w-6 h-6 text-green-600" />
                  <span className="font-medium text-gray-700">Real-time Detection</span>
                </div>
                <div className="flex items-center space-x-3 bg-blue-50 p-4 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                  <span className="font-medium text-gray-700">AI Prediction</span>
                </div>
                <div className="flex items-center space-x-3 bg-purple-50 p-4 rounded-lg">
                  <MapPin className="w-6 h-6 text-purple-600" />
                  <span className="font-medium text-gray-700">Pest Mapping</span>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
