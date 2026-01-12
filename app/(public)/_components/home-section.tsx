import Image from "next/image";
import Link from "next/link";

export default function HomeSection() {
  return (
    <section
      id="home"
      className="relative min-h-[80vh] flex items-center justify-center px-4 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-cream/30 -z-10"></div>

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-green/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-cream/30 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6 animate-slide-up order-2 lg:order-1">
          <div className="inline-block">
            <span className="px-4 py-2 bg-green/10 text-green rounded-full text-sm font-semibold">
              ☕ Kopi Premium Indonesia
            </span>
          </div>
          <h1 className="font-black text-4xl md:text-5xl lg:text-6xl text-green leading-tight">
            Menyajikan Kelezatan{" "}
            <span className="bg-gradient-to-r from-green to-green-700 bg-clip-text text-transparent">
              Kopi Bubuk Terbaik
            </span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Nikmati kehangatan dan kelezatan dalam setiap hidangan kopi bubuk
            kami, dipanggang dengan penuh cinta dan disajikan dengan senyuman.
            Sambut pagi dengan segelas kopi, sambut kehidupan dengan Kopi
            Sanjaya.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href={"#advantages"}
              className="px-8 py-4 font-bold bg-green hover:bg-green/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Selengkapnya →
            </Link>
            <Link
              href={"#product"}
              className="px-8 py-4 font-bold border-2 border-green text-green hover:bg-green hover:text-white rounded-full transition-all duration-300 hover:scale-105"
            >
              Lihat Produk
            </Link>
          </div>
        </div>
        <div className="flex justify-center order-1 lg:order-2 animate-fade-in">
          <div className="relative">
            <div className="absolute inset-0 bg-green/10 rounded-full blur-2xl"></div>
            <Image
              loading="lazy"
              width={0}
              height={0}
              src={"/images/heroes-ornament.svg"}
              alt="heroes ornament"
              sizes="100%"
              className="w-[350px] h-[320px] lg:w-[500px] lg:h-[450px] relative z-10 drop-shadow-2xl animate-scale-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
