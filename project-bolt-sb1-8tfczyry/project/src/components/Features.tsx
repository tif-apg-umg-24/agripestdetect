import {
  Camera,
  MapPin,
  TrendingUp,
  Leaf,
  Mountain,
  Calculator,
  MessageCircle,
  Users,
  Bell,
  BarChart3,
  WifiOff,
  RefreshCw,
  ShoppingCart,
  Cpu,
} from 'lucide-react';

interface FeaturesProps {
  onFeatureClick: (section: string) => void;
}

export default function Features({ onFeatureClick }: FeaturesProps) {
  const features = [
    {
      id: 'scanner',
      icon: Camera,
      title: 'Scan Hama Real-Time',
      description: 'Deteksi hama langsung melalui kamera dengan AI detection',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
    },
    {
      id: 'map',
      icon: MapPin,
      title: 'Peta Persebaran Hama',
      description: 'Monitoring persebaran hama berdasarkan geolocation',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-50',
    },
    {
      id: 'prediction',
      icon: TrendingUp,
      title: 'Prediksi Serangan',
      description: 'AI memprediksi serangan hama berdasarkan cuaca & pola',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50',
    },
    {
      id: 'assistant',
      icon: Leaf,
      title: 'Rekomendasi Organik',
      description: 'Saran pestisida organik & DIY yang aman lingkungan',
      color: 'from-lime-500 to-green-600',
      bgColor: 'bg-lime-50',
    },
    {
      id: 'soil',
      icon: Mountain,
      title: 'Scan Kualitas Tanah',
      description: 'Analisis kondisi tanah melalui visual detection',
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-50',
    },
    {
      id: 'calculator',
      icon: Calculator,
      title: 'Kalkulator Kerugian',
      description: 'Estimasi kerugian panen berdasarkan tingkat kerusakan',
      color: 'from-red-500 to-rose-600',
      bgColor: 'bg-red-50',
    },
    {
      id: 'assistant',
      icon: MessageCircle,
      title: 'Asisten Virtual AI',
      description: 'Chatbot cerdas untuk konsultasi pertanian 24/7',
      color: 'from-indigo-500 to-blue-600',
      bgColor: 'bg-indigo-50',
    },
    {
      id: 'community',
      icon: Users,
      title: 'Komunitas Petani',
      description: 'Berbagi pengalaman & diskusi dengan petani lainnya',
      color: 'from-teal-500 to-cyan-600',
      bgColor: 'bg-teal-50',
    },
    {
      id: 'prediction',
      icon: Bell,
      title: 'Early Warning System',
      description: 'Notifikasi dini wabah hama di area sekitar Anda',
      color: 'from-yellow-500 to-amber-600',
      bgColor: 'bg-yellow-50',
    },
    {
      id: 'progress',
      icon: BarChart3,
      title: 'Laporan Perkembangan',
      description: 'Grafik pertumbuhan tanaman mingguan/bulanan',
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-emerald-50',
    },
    {
      id: 'scanner',
      icon: WifiOff,
      title: 'Mode Offline',
      description: 'Tetap berfungsi tanpa koneksi internet stabil',
      color: 'from-slate-500 to-gray-600',
      bgColor: 'bg-slate-50',
    },
    {
      id: 'assistant',
      icon: RefreshCw,
      title: 'Rotasi Tanaman',
      description: 'Rekomendasi pola tanam untuk mencegah hama',
      color: 'from-green-500 to-lime-600',
      bgColor: 'bg-green-50',
    },
    {
      id: 'marketplace',
      icon: ShoppingCart,
      title: 'Marketplace',
      description: 'Beli pestisida, pupuk, dan alat pertanian',
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50',
    },
    {
      id: 'prediction',
      icon: Cpu,
      title: 'Integrasi IoT',
      description: 'Koneksi dengan sensor lahan untuk monitoring',
      color: 'from-blue-500 to-purple-600',
      bgColor: 'bg-blue-50',
    },
  ];

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Fitur Lengkap untuk{' '}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Pertanian Modern
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Teknologi AI terdepan untuk membantu petani meningkatkan produktivitas dan mengurangi kerugian
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={`${feature.id}-${feature.title}`}
                onClick={() => onFeatureClick(feature.id)}
                className="group cursor-pointer bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-green-200"
              >
                <div className={`${feature.bgColor} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`bg-gradient-to-br ${feature.color} p-2 rounded-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
