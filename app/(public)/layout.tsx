import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { PhoneCallIcon, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import NavBar from "./_components/navbar";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 py-4 px-4 md:px-8 flex justify-between items-center bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm transition-all duration-300">
        <Link
          href={"#home"}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <Image
            loading="lazy"
            src="/images/logo.png"
            alt="logo"
            width={0}
            height={0}
            sizes="100%"
            className="w-16 h-16 transition-transform group-hover:scale-110 duration-300"
          />
          <h1 className="font-black hidden md:block italic text-2xl text-green transition-colors group-hover:text-green/80">
            KopiSanjaya
          </h1>
        </Link>
        <NavBar />
      </header>
      <div className="pt-24"></div>
      <main>{children}</main>
      <footer
        id="contact"
        className="px-8 md:px-16 py-12 bg-gradient-to-br from-slate-50 via-gray-50 to-green-50 mt-32 space-y-8 border-t border-gray-200"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                loading="lazy"
                src="/images/logo.png"
                alt="logo"
                width={0}
                height={0}
                sizes="100%"
                className="w-16 h-16"
              />
              <h1 className="font-black italic text-2xl text-green">
                KopiSanjaya
              </h1>
            </div>
            <p className="font-medium text-gray-700 max-w-md">
              Nikmati kehangatan dan kelezatan dalam setiap hidangan kopi bubuk
              kami. Dipanggang dengan penuh cinta dan disajikan dengan senyuman.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-green">Quick Links</h3>
            <div className="flex flex-col gap-3">
              <Link
                className="hover:font-bold hover:text-green transition-colors hover:translate-x-1 inline-block duration-200"
                href={"#home"}
              >
                🏠 Home
              </Link>
              <Link
                className="hover:font-bold hover:text-green transition-colors hover:translate-x-1 inline-block duration-200"
                href={"#advantages"}
              >
                ⭐ Advantages
              </Link>
              <Link
                className="hover:font-bold hover:text-green transition-colors hover:translate-x-1 inline-block duration-200"
                href={"#product"}
              >
                ☕ Product
              </Link>
              <Link
                className="hover:font-bold hover:text-green transition-colors hover:translate-x-1 inline-block duration-200"
                href={"#contact"}
              >
                📞 Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse gap-4 pt-8 md:flex-row items-center justify-between border-t border-gray-300 mt-8">
          <p className="text-gray-600 text-sm">
            ©2024 Kopi Sanjaya. All rights reserved.
          </p>
          <div className="flex gap-6 items-center">
            <Link
              href="https://www.instagram.com/kopi.sanjaya/"
              target="_blank"
              className="p-2 rounded-full hover:bg-green/10 transition-all duration-300 group"
            >
              <InstagramLogoIcon className="w-5 h-5 group-hover:text-green group-hover:scale-110 transition-all duration-300" />
            </Link>
            <Link
              href="https://shopee.co.id/kopi_sanjaya?uls_trackid=4ve41iv500m2&utm_content=3CZpvra4LVgufnRiu21Sr8Y8ALSs"
              target="_blank"
              className="p-2 rounded-full hover:bg-green/10 transition-all duration-300 group"
            >
              <ShoppingBag className="w-5 h-5 group-hover:text-green group-hover:scale-110 transition-all duration-300" />
            </Link>
            <Link
              href="https://wa.me/6288245063915"
              target="_blank"
              className="p-2 rounded-full hover:bg-green/10 transition-all duration-300 group"
            >
              <PhoneCallIcon className="w-5 h-5 group-hover:text-green group-hover:scale-110 transition-all duration-300" />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
