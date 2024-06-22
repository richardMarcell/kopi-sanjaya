import Image from "next/image";

export default function ProductSection() {
  return (
    <section id="product" className="px-16 lg:px-32 mt-32">
      <div className="space-y-4">
        <p className="font-black text-green opacity-50">PRODUCT</p>
        <h1 className="font-black text-3xl lg:text-5xl text-green">
          Variant of Kopi Sanjaya
        </h1>
      </div>
      <div className="flex gap-8 flex-col mt-10">
        <div className="flex flex-col md:flex-row gap-4">
          <Image
            loading="lazy"
            src={"/images/kopi-biasa-new.jpg"}
            alt="Kopi Biasa"
            width={0}
            height={0}
            sizes="100%"
            className="md:w-1/2 w-full h-[400px] lg:h-[600px] rounded-xl"
          />
          <div className="space-y-4">
            <div>
              <h1 className="font-black text-xl opacity-80">Kopi Biasa</h1>
              <p className="font-medium">
                Varian kopi bubuk biasa dengan harga yang lebih terjangkau
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex h-10 w-10 border rounded-full items-center justify-center font-black bg-green text-white">
                1
              </div>
              <div>
                <p className="font-bold">100 gr</p>
                <p>
                  Anda bisa mendapatkan varian biasa dalam 100gr pada harga
                  Rp7.500
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-10 w-10 border rounded-full items-center justify-center font-black bg-green text-white">
                2
              </div>
              <div>
                <p className="font-bold">200 gr</p>
                <p>
                  Anda bisa mendapatkan varian biasa dalam 200gr pada harga
                  Rp15.000
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-10 w-10 border rounded-full items-center justify-center font-black bg-green text-white">
                3
              </div>
              <div>
                <p className="font-bold">500 gr</p>
                <p>
                  Anda bisa mendapatkan varian biasa dalam 500gr pada harga
                  Rp37.500
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-10 w-10 border rounded-full items-center justify-center font-black bg-green text-white">
                4
              </div>
              <div>
                <p className="font-bold">1000 gr</p>
                <p>
                  Anda bisa mendapatkan varian biasa dalam 1000gr pada harga
                  Rp75.000
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse gap-4">
          <Image
            loading="lazy"
            src={"/images/kopi-premium.png"}
            alt="Kopi Biasa"
            width={0}
            height={0}
            sizes="100%"
            className="md:w-1/2 w-full h-[400px] lg:h-[600px] rounded-xl"
          />
          <div className="space-y-4">
            <div>
              <h1 className="font-black text-xl opacity-80">Kopi Premium</h1>
              <p className="font-medium">
                Varian kopi bubuk premium dengan biji kopi robusta yang premium
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex h-10 w-10 border rounded-full items-center justify-center font-black bg-green text-white">
                1
              </div>
              <div>
                <p className="font-bold">200 gr</p>
                <p>
                  Anda bisa mendapatkan varian premium dalam 200gr pada harga
                  Rp32.000
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-10 w-10 border rounded-full items-center justify-center font-black bg-green text-white">
                2
              </div>
              <div>
                <p className="font-bold">400 gr</p>
                <p>
                  Anda bisa mendapatkan varian premium dalam 400gr pada harga
                  Rp64.000
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="font-black text-xl opacity-80">New Variant</h1>
          <div className="flex gap-4">
            <Image
              loading="lazy"
              src={"/images/kopi-toples-300-gram.jpg"}
              alt="Kopi Biasa"
              width={0}
              height={0}
              sizes="100%"
              className="md:w-1/2 w-full h-[250px] lg:h-[750px] border rounded-xl object-fill"
            />
            <Image
              loading="lazy"
              src={"/images/kopi-toples-500-gram.jpg"}
              alt="Kopi Biasa"
              width={0}
              height={0}
              sizes="100%"
              className="md:w-1/2 w-full h-[250px] lg:h-[750px] border rounded-xl object-fill"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
