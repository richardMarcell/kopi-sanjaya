import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Heroes Section Or Home Start*/}
      <section className="flex items-center flex-col-reverse p-4 gap-4 mt-5">
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-black md:text-4xl lg:text-5xl text-3xl text-green text-center">
            Menyajikan Kelezatan Kopi Bubuk Terbaik
          </h1>
          <p className="text-center text-sm md:text-lg lg:text-xl lg:px-20">
            Nikmati kehangatan dan kelezatan dalam setiap hidangan kopi bubuk
            kami, dipanggang dengan penuh cinta dan disajikan dengan senyuman.
            Sambut pagi dengan segelas kopi, sambut kehidupan dengan Kopi
            Sanjaya.
          </p>
          <button className="p-4 font-bold bg-green hover:opacity-80 text-white rounded-full">
            Selengkapnya
          </button>
        </div>
        <Image
          width={0}
          height={0}
          src={"/images/heroes-ornament.svg"}
          alt="heroes ornament"
          sizes="100%"
          className="w-[350px] h-[320px]"
        />
      </section>
      {/* Heroes Section Or Home End*/}
    </>
  );
}
