import Image from "next/image";

export default function ProductSection() {
  return (
    <section id="product" className="py-20 px-4 lg:px-16 bg-white">
      <div className="container mx-auto">
        <div className="space-y-4 mb-16 text-center">
          <p className="font-black text-green/60 text-sm tracking-widest uppercase">
            PRODUCT
          </p>
          <h1 className="font-black text-3xl lg:text-5xl text-green">
            Variant of Kopi Sanjaya
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pilih varian kopi favorit Anda dengan harga yang terjangkau
          </p>
        </div>

        <div className="flex gap-12 flex-col">
          {/* Kopi Biasa */}
          <div className="group bg-gradient-to-br from-white to-green-50/30 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
            <div className="flex flex-col md:flex-row gap-8 p-8">
              <div className="md:w-1/2 relative overflow-hidden rounded-2xl">
                <Image
                  loading="lazy"
                  src={"/images/kopi-biasa-new.jpg"}
                  alt="Kopi Biasa"
                  width={0}
                  height={0}
                  sizes="100%"
                  className="w-full h-[400px] lg:h-[600px] object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-green text-white px-4 py-2 rounded-full font-bold shadow-lg">
                  Terjangkau
                </div>
              </div>
              <div className="md:w-1/2 space-y-6 flex flex-col justify-center">
                <div>
                  <h2 className="font-black text-3xl text-green mb-2">
                    Kopi Biasa
                  </h2>
                  <p className="font-medium text-gray-600 text-lg">
                    Varian kopi bubuk biasa dengan harga yang lebih terjangkau
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { weight: "100 gr", price: "Rp7.500" },
                    { weight: "200 gr", price: "Rp15.000" },
                    { weight: "500 gr", price: "Rp37.500" },
                    { weight: "1000 gr", price: "Rp75.000" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="flex h-10 w-10 border-2 border-green rounded-full items-center justify-center font-black text-green shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-bold text-green">{item.weight}</p>
                        <p className="text-gray-600 text-sm">{item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Kopi Premium */}
          <div className="group bg-gradient-to-br from-green-50/30 to-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
            <div className="flex flex-col md:flex-row-reverse gap-8 p-8">
              <div className="md:w-1/2 relative overflow-hidden rounded-2xl">
                <Image
                  loading="lazy"
                  src={"/images/kopi-premium.png"}
                  alt="Kopi Premium"
                  width={0}
                  height={0}
                  sizes="100%"
                  className="w-full h-[400px] lg:h-[600px] object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-yellow-500 text-white px-4 py-2 rounded-full font-bold shadow-lg flex items-center gap-2">
                  ⭐ Premium
                </div>
              </div>
              <div className="md:w-1/2 space-y-6 flex flex-col justify-center">
                <div>
                  <h2 className="font-black text-3xl text-green mb-2">
                    Kopi Premium
                  </h2>
                  <p className="font-medium text-gray-600 text-lg">
                    Varian kopi bubuk premium dengan biji kopi robusta yang
                    premium
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { weight: "200 gr", price: "Rp32.000" },
                    { weight: "400 gr", price: "Rp64.000" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="flex h-10 w-10 border-2 border-green rounded-full items-center justify-center font-black text-green shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-bold text-green">{item.weight}</p>
                        <p className="text-gray-600 text-sm">{item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* New Variant */}
          <div className="bg-gradient-to-br from-cream/20 to-green-50/20 rounded-3xl p-8 border border-gray-100">
            <h2 className="font-black text-2xl text-green mb-6 text-center">
              🎉 New Variant
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <Image
                  loading="lazy"
                  src={"/images/kopi-toples-300-gram.jpg"}
                  alt="Kopi Toples 300 gram"
                  width={0}
                  height={0}
                  sizes="100%"
                  className="w-full h-[250px] lg:h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl">
                  <p className="font-bold text-green">Toples 300 gram</p>
                  <p className="text-sm text-gray-600">Kemasan praktis</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <Image
                  loading="lazy"
                  src={"/images/kopi-toples-500-gram.jpg"}
                  alt="Kopi Toples 500 gram"
                  width={0}
                  height={0}
                  sizes="100%"
                  className="w-full h-[250px] lg:h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl">
                  <p className="font-bold text-green">Toples 500 gram</p>
                  <p className="text-sm text-gray-600">Hemat & praktis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
