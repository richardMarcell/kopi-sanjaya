import { BadgeDollarSignIcon, Book, Factory, LibraryBig } from "lucide-react";

export default function AdvantagesSection() {
  return (
    <section
      id="advantages"
      className="py-20 px-4 bg-gradient-to-b from-white to-green-50/30"
    >
      <div className="container mx-auto space-y-4">
        <p className="font-black text-center text-green/60 text-sm tracking-widest uppercase">
          ADVANTAGES
        </p>
        <h1 className="text-center font-black text-3xl lg:text-5xl text-green mb-4">
          Why Kopi Sanjaya?
        </h1>
        <p className="text-center font-medium px-8 text-gray-600 max-w-2xl mx-auto">
          Temukan Keunggulan Kopi Sanjaya: Rasakan Kelezatan dan Kualitas Biji
          Kopi Robusta Terbaik Kami
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
          <div className="group p-8 flex flex-col items-center rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <div className="p-4 bg-green/10 rounded-full mb-4 group-hover:bg-green/20 transition-all duration-300 group-hover:scale-110">
              <BadgeDollarSignIcon size={40} className="text-green" />
            </div>
            <h1 className="font-black text-green text-xl mb-3">
              Harga Terjangkau
            </h1>
            <p className="text-center text-gray-600 leading-relaxed">
              Nikmati Kelezatan Kopi Berkualitas Tanpa Harus Menguras Dompet
              Anda. Harga Kopi Sanjaya Sangat Terjangkau.
            </p>
          </div>
          <div className="group p-8 flex flex-col items-center rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <div className="p-4 bg-green/10 rounded-full mb-4 group-hover:bg-green/20 transition-all duration-300 group-hover:scale-110">
              <LibraryBig size={40} className="text-green" />
            </div>
            <h1 className="font-black text-green text-xl mb-3">Varian</h1>
            <p className="text-center text-gray-600 leading-relaxed">
              Kopi Sanjaya hadir dalam dua jenis, kopi bubuk biasa dan kopi
              bubuk premium dengan kualitas dan rasa istimewa.
            </p>
          </div>
          <div className="group p-8 flex flex-col items-center rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <div className="p-4 bg-green/10 rounded-full mb-4 group-hover:bg-green/20 transition-all duration-300 group-hover:scale-110">
              <Factory size={40} className="text-green" />
            </div>
            <h1 className="font-black text-green text-xl mb-3">Robusta</h1>
            <p className="text-center text-gray-600 leading-relaxed">
              Kopi Sanjaya menggunakan jenis biji kopi Robusta untuk varian
              premium dengan rasa yang sangat kuat dan khas.
            </p>
          </div>
          <div className="group p-8 flex flex-col items-center rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <div className="p-4 bg-green/10 rounded-full mb-4 group-hover:bg-green/20 transition-all duration-300 group-hover:scale-110">
              <Book size={40} className="text-green" />
            </div>
            <h1 className="font-black text-green text-xl mb-3">Legalitas</h1>
            <p className="text-center text-gray-600 leading-relaxed">
              Kopi Sanjaya telah mendapatkan sertifikasi P-IRT dari Dinas
              Kesehatan dengan standar keamanan ketat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
