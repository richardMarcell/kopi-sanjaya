import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { PhoneCallIcon, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import NavBar from "./_components/navbar";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="py-4 px-4 md:px-8 flex justify-between items-center border-[0.5px]">
        <Link href={"#home"} className="flex items-center gap-2 cursor-pointer">
          <Image
            loading="lazy"
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
      <footer id="contact" className="px-8 py-4 bg-slate-50  mt-32 space-y-6">
        <div className="flex items-center gap-1">
          <Image
            loading="lazy"
            src={"/images/logo.png"}
            alt="logo"
            width={0}
            height={0}
            sizes="100%"
            className="w-16 h-16"
          />
          <h1 className="font-black italic text-2xl text-green">KopiSanjaya</h1>
        </div>
        <p className="font-bold w-80">
          Nikmati kehangatan dan kelezatan dalam setiap hidangan kopi bubuk kami
        </p>
        <div className="flex gap-8">
          <Link className="hover:font-bold hover:text-green" href={"#home"}>
            Home
          </Link>
          <Link
            className="hover:font-bold hover:text-green"
            href={"#advantages"}
          >
            Advantages
          </Link>
          <Link className="hover:font-bold hover:text-green" href={"#product"}>
            Product
          </Link>
          <Link className="hover:font-bold hover:text-green" href={"#contact"}>
            Contact
          </Link>
        </div>

        <div className="flex flex-col-reverse gap-4 pt-4 md:flex-row items-center justify-between border-t-[0.5px] py-2 border-black">
          <p>©2024 Kopi Sanjaya. All right reserved.</p>
          <div className="flex gap-4 items-center">
            <Link
              href={"https://www.instagram.com/kopi.sanjaya/"}
              target="_blank"
              className="scale-[1.8]"
            >
              <InstagramLogoIcon className="hover:text-green mr-2" />
            </Link>
            <Link
              href={
                "https://shopee.co.id/kopi_sanjaya?uls_trackid=4ve41iv500m2&utm_content=3CZpvra4LVgufnRiu21Sr8Y8ALSs"
              }
              target="_blank"
            >
              <ShoppingBag className="hover:text-green" />
            </Link>
            <Link href={"https://wa.me/6288245063915"} target="_blank">
              <PhoneCallIcon className="hover:text-green" />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
