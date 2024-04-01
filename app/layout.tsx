import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// const poppinsNew = localFont({
//   src: [
//     {
//       style: "black",
//       weight: "900",
//       path: "./fonts/Poppins-Black.ttf",
//     },
//     {
//       style: "black",
//       weight: "900",
//       path: "./fonts/Poppins-BlackItalic.ttf",
//     },
//     {
//       style: "bold",
//       weight: "700",
//       path: "./fonts/Poppins-Bold.ttf",
//     },
//     {
//       style: "bold",
//       weight: "700",
//       path: "./fonts/Poppins-BoldItalic.ttf",
//     },
//     {
//       style: "extrabold",
//       weight: "800",
//       path: "./fonts/Poppins-ExtraBold.ttf",
//     },
//     {
//       style: "extrabold",
//       weight: "800",
//       path: "./fonts/Poppins-ExtraBoldItalic.ttf",
//     },
//     {
//       style: "extralight",
//       weight: "200",
//       path: "./fonts/Poppins-ExtraLight.ttf",
//     },
//     {
//       style: "extralight",
//       weight: "200",
//       path: "./fonts/Poppins-ExtraLightItalic.ttf",
//     },
//     {
//       style: "normal",
//       weight: "400",
//       path: "./fonts/Poppins-Italic.ttf",
//     },
//     {
//       style: "light",
//       weight: "300",
//       path: "./fonts/Poppins-Light.ttf",
//     },
//     {
//       style: "light",
//       weight: "300",
//       path: "./fonts/Poppins-LightItalic.ttf",
//     },
//     {
//       style: "medium",
//       weight: "500",
//       path: "./fonts/Poppins-MediumItalic.ttf",
//     },
//     {
//       style: "medium",
//       weight: "500",
//       path: "./fonts/Poppins-MediumItalic.ttf",
//     },
//     {
//       style: "normal",
//       weight: "400",
//       path: "./fonts/Poppins-Regular.ttf",
//     },
//     {
//       style: "semibold",
//       weight: "600",
//       path: "./fonts/Poppins-SemiBold.ttf",
//     },
//     {
//       style: "semibold",
//       weight: "600",
//       path: "./fonts/Poppins-SemiBoldItalic.ttf",
//     },
//     {
//       style: "thin",
//       weight: "100",
//       path: "./fonts/Poppins-Thin.ttf",
//     },
//     {
//       style: "thin",
//       weight: "100",
//       path: "./fonts/Poppins-ThinItalic.ttf",
//     },
//   ],
//   variable: "--font-poppins",
// });

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  title: "Kopi Sanjaya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
