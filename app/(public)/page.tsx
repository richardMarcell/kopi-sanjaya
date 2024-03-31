import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Heroes Section Or Home Start*/}
      <section className="flex items-center flex-col-reverse">
        <div className="p-4">
          <h1 className="font-black text-4xl text-green text-center">
            Menyajikan Kelezatan Kopi Bubuk Terbaik
          </h1>
          <p></p>
        </div>
        <Image
          width={0}
          height={0}
          src={"/images/heroes-ornament.png"}
          alt="heroes ornament"
          sizes="100%"
          className="w-[400px] h-[360px]"
        />
      </section>
      {/* Heroes Section Or Home End*/}
    </>
  );
}
