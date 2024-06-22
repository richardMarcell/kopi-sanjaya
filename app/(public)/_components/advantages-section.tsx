import { BadgeDollarSignIcon, Book, Factory, LibraryBig } from "lucide-react";

export default function AdvantagesSection() {
  return (
    <section id="advantages" className="mt-32 space-y-4">
      <p className="font-black text-center text-green opacity-50">ADVANTAGES</p>
      <h1 className="text-center font-black text-3xl lg:text-5xl text-green">
        Why Kopi Sanjaya?
      </h1>
      <p className="text-center font-medium px-8">
        Temukan Keunggulan Kopi Sanjaya: Rasakan Kelezatan dan Kualitas Biji
        Kopi Robusta Terbaik Kami
      </p>
      <div className="flex gap-4 justify-center flex-wrap">
        <div className="p-4 flex flex-col items-center rounded-xl w-80 h-60 gap-2">
          <BadgeDollarSignIcon size={50} className="text-green" />
          <h1 className="font-black text-green">Harga Terjangkau</h1>
          <p className="text-center">
            Nikmati Kelezatan Kopi Berkualitas Tanpa Harus Menguras Dompet Anda.
            Harga Kopi Sanjaya Sangat Terjangkau, Menjadikan Setiap Tegukan
            Lebih Menyenangkan.
          </p>
        </div>
        <div className="p-4 flex flex-col items-center rounded-xl w-80 h-60 gap-2">
          <div>
            <LibraryBig size={40} className="text-green" />
          </div>
          <h1 className="font-black text-green">Varian</h1>
          <p className="text-center">
            Kopi Sanjaya hadir dalam dua jenis, kopi bubuk biasa dan kopi bubuk
            premium. Dengan harga yang terjangkau, Anda dapat menikmati kualitas
            dan rasa yang istimewa dari kedua varian ini.
          </p>
        </div>
        <div className="p-4 flex flex-col items-center rounded-xl w-80 h-60 gap-2">
          <div>
            <Factory size={40} className="text-green" />
          </div>{" "}
          <h1 className="font-black text-green">Robusta</h1>
          <p className="text-center">
            Kopi Sanjaya menggunakan jenis biji kopi Robusta untuk varian
            premium. Kopi Robusta memiliki rasa yang sangat kuat, dengan rasa
            yang lebih pahit dibandingkan kopi arabika
          </p>
        </div>
        <div className="p-4 flex flex-col items-center rounded-xl w-80 h-60 gap-2">
          <div>
            <Book size={40} className="text-green" />
          </div>{" "}
          <h1 className="font-black text-green">Legalitas</h1>
          <p className="text-center">
          Kopi Sanjaya telah mendapatkan sertifikasi P-IRT dari Dinas Kesehatan. Ini menjamin bahwa kopi kami memenuhi standar keamanan dan kebersihan yang ketat.
          </p>
        </div>
      </div>
    </section>
  );
}
