import { Leaf, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-2 rounded-xl">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">AgriPest Detect Pro</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Solusi AI terdepan untuk deteksi hama dan manajemen pertanian modern.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Fitur Utama</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-green-400 cursor-pointer transition-colors">Scan Hama Real-Time</li>
              <li className="hover:text-green-400 cursor-pointer transition-colors">Peta Persebaran</li>
              <li className="hover:text-green-400 cursor-pointer transition-colors">Prediksi AI</li>
              <li className="hover:text-green-400 cursor-pointer transition-colors">Komunitas Petani</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Bantuan</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-green-400 cursor-pointer transition-colors">Pusat Bantuan</li>
              <li className="hover:text-green-400 cursor-pointer transition-colors">Tutorial</li>
              <li className="hover:text-green-400 cursor-pointer transition-colors">FAQ</li>
              <li className="hover:text-green-400 cursor-pointer transition-colors">Hubungi Kami</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Kontak</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>support@agripest.co.id</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 AgriPest Detect Pro. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-green-400 transition-colors">
                Kebijakan Privasi
              </a>
              <a href="#" className="hover:text-green-400 transition-colors">
                Syarat & Ketentuan
              </a>
              <a href="#" className="hover:text-green-400 transition-colors">
                Lisensi
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
