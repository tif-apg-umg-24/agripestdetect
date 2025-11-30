import { Menu, X, Leaf } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function Header({ activeSection, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Beranda' },
    { id: 'scanner', label: 'Scan Hama' },
    { id: 'map', label: 'Peta Hama' },
    { id: 'prediction', label: 'Prediksi' },
    { id: 'community', label: 'Komunitas' },
    { id: 'marketplace', label: 'Marketplace' },
  ];

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-2 rounded-xl shadow-lg">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                AgriPest Detect Pro
              </h1>
              <p className="text-xs text-gray-500 hidden sm:block">AI-Powered Pest Detection</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
                  activeSection === item.id
                    ? 'bg-green-500 text-white shadow-md'
                    : 'text-gray-700 hover:bg-green-50 hover:text-green-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <nav className="px-4 py-2 space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 font-medium ${
                  activeSection === item.id
                    ? 'bg-green-500 text-white'
                    : 'text-gray-700 hover:bg-green-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
