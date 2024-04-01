import { BadgeIcon } from "@radix-ui/react-icons";
import HomeSection from "./_components/home-section";
import { BadgeDollarSignIcon, Factory, LibraryBig } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Heroes Section Or Home Start*/}
      <HomeSection />
      {/* Heroes Section Or Home End*/}

      {/* Advantages Section Start */}
      <section className="mt-32 space-y-4">
        <p className="font-black text-center text-green opacity-50">
          ADVANTAGES
        </p>
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
              Nikmati Kelezatan Kopi Berkualitas Tanpa Harus Menguras Dompet
              Anda. Harga Kopi Sanjaya Sangat Terjangkau, Menjadikan Setiap
              Tegukan Lebih Menyenangkan.
            </p>
          </div>
          <div className="p-4 flex flex-col items-center rounded-xl w-80 h-60 gap-2">
            <LibraryBig size={50} className="text-green" />
            <h1 className="font-black text-green">Varian</h1>
            <p className="text-center">
              Kopi Sanjaya hadir dalam dua jenis, kopi bubuk biasa dan kopi
              bubuk premium. Dengan harga yang terjangkau, Anda dapat menikmati
              kualitas dan rasa yang istimewa dari kedua varian ini.
            </p>
          </div>
          <div className="p-4 flex flex-col items-center rounded-xl w-80 h-60 gap-2">
            <Factory size={50} className="text-green" />
            <h1 className="font-black text-green">Robusta</h1>
            <p className="text-center">
              Kopi Sanjaya menggunakan jenis biji kopi Robusta untuk varian
              premium. Kopi Robusta memiliki rasa yang sangat kuat, dengan rasa
              yang lebih pahit dibandingkan kopi arabika
            </p>
          </div>
        </div>
      </section>
      {/* Advantages Section End */}

      {/* Product Section Start */}
      <section></section>
      {/* Product Section End */}
      {/* Product Section Start */}
      <section></section>
      {/* Product Section End */}
    </>
  );
}
