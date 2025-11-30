import { useState } from 'react';
import { MessageCircle, Send, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export default function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Halo! Saya Asisten Virtual AgriPest. Saya siap membantu Anda dengan pertanyaan seputar hama, penyakit tanaman, dan solusi pertanian. Apa yang bisa saya bantu hari ini?',
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');

  const quickQuestions = [
    'Bagaimana cara mengatasi ulat grayak?',
    'Pestisida organik apa yang aman?',
    'Cara meningkatkan kualitas tanah?',
    'Kapan waktu terbaik penyemprotan?',
  ];

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: text,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInput('');

    setTimeout(() => {
      const aiResponse = generateAIResponse(text);
      const aiMessage: Message = {
        id: messages.length + 2,
        text: aiResponse,
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
    }, 1000);
  };

  const generateAIResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase();

    if (lowerQuestion.includes('ulat grayak') || lowerQuestion.includes('ulat')) {
      return 'Untuk mengatasi ulat grayak, saya rekomendasikan: 1) Aplikasi Bacillus thuringiensis (pestisida biologis), 2) Penyemprotan larutan bawang putih + cabai, 3) Pemasangan perangkap feromon, 4) Monitoring rutin setiap 2 hari. Waktu optimal penyemprotan adalah sore/malam hari saat ulat aktif makan.';
    } else if (lowerQuestion.includes('pestisida organik') || lowerQuestion.includes('organik')) {
      return 'Pestisida organik yang aman dan efektif: 1) Ekstrak daun mimba (neem), 2) Larutan bawang putih + cabai + sabun, 3) Ekstrak daun pepaya, 4) Campuran minyak nabati + detergen. Semua bahan ini ramah lingkungan dan tidak meninggalkan residu berbahaya.';
    } else if (lowerQuestion.includes('tanah') || lowerQuestion.includes('kualitas')) {
      return 'Untuk meningkatkan kualitas tanah: 1) Tambahkan kompos matang 2-3 ton/ha, 2) Terapkan sistem rotasi tanaman, 3) Tanam tanaman penutup tanah, 4) Hindari pembakaran jerami, gunakan sebagai mulsa, 5) Lakukan pengapuran jika pH terlalu asam. Scan tanah Anda dengan fitur Soil Scanner untuk analisis lebih detail!';
    } else if (lowerQuestion.includes('penyemprotan') || lowerQuestion.includes('waktu')) {
      return 'Waktu terbaik penyemprotan: 1) Pagi hari (06:00-09:00) atau sore hari (16:00-18:00), 2) Hindari saat terik matahari (mengurangi efektivitas), 3) Jangan semprot saat hujan atau angin kencang, 4) Periksa prediksi cuaca di fitur Prediksi Serangan kami untuk timing optimal.';
    } else {
      return 'Terima kasih atas pertanyaan Anda. Untuk informasi lebih spesifik, silakan: 1) Gunakan fitur Scan Hama untuk deteksi akurat, 2) Cek Peta Persebaran Hama di area Anda, 3) Lihat Prediksi Serangan untuk perencanaan, 4) Atau bergabung di Komunitas Petani untuk berbagi pengalaman. Ada yang bisa saya bantu lagi?';
    }
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
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Asisten Virtual AI</h1>
          <p className="text-gray-600">Konsultasi pertanian 24/7 dengan chatbot cerdas kami</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col h-[600px]">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-600 p-6">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">AgriPest AI Assistant</h2>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <p className="text-blue-100 text-sm">Online</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start space-x-3 ${
                  message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}
              >
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                    message.sender === 'ai'
                      ? 'bg-gradient-to-br from-blue-500 to-cyan-600'
                      : 'bg-gradient-to-br from-green-500 to-emerald-600'
                  }`}
                >
                  {message.sender === 'ai' ? (
                    <Bot className="w-6 h-6 text-white" />
                  ) : (
                    <User className="w-6 h-6 text-white" />
                  )}
                </div>
                <div
                  className={`flex-1 max-w-[70%] ${
                    message.sender === 'user' ? 'items-end' : 'items-start'
                  }`}
                >
                  <div
                    className={`rounded-2xl p-4 shadow-md ${
                      message.sender === 'ai'
                        ? 'bg-white text-gray-800'
                        : 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 px-2">
                    {message.timestamp.toLocaleTimeString('id-ID', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 bg-white p-4">
            <div className="flex flex-wrap gap-2 mb-4">
              {quickQuestions.map((question, idx) => (
                <button
                  key={idx}
                  onClick={() => sendMessage(question)}
                  className="px-3 py-2 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-green-100 hover:text-green-700 transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>

            <div className="flex space-x-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage(input)}
                placeholder="Ketik pertanyaan Anda..."
                className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
              />
              <button
                onClick={() => sendMessage(input)}
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
