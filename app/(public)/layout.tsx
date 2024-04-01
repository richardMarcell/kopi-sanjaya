import Image from "next/image";
import { ReactNode } from "react";
import NavBar from "./_components/navbar";
import Link from "next/link";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="py-4 px-4 md:px-8 flex justify-between items-center border-[0.5px]">
        <Link href={"#home"} className="flex items-center gap-2 cursor-pointer">
          <Image
            src={"/images/logo.png"}
            alt="logo"
            width={0}
            height={0}
            sizes="100%"
            className="w-16 h-16"
          />
          <h1 className="font-black hidden md:block italic text-2xl text-green">
            KopiSanjaya
          </h1>
        </Link>
        <NavBar />
      </header>
      <main>{children}</main>
      <footer className="p-4 border-t mt-32">
        <div className="flex items-center gap-1">
          <Image
            src={"/images/logo.png"}
            alt="logo"
            width={0}
            height={0}
            sizes="100%"
            className="w-16 h-16"
          />
          <h1 className="font-black hidden md:block italic text-2xl text-green">
            KopiSanjaya
          </h1>
        </div>
        <p></p>
      </footer>
    </>
  );
}
