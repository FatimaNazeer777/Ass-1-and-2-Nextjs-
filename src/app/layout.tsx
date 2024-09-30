import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { RiPlantFill } from "react-icons/ri";
import Link from "next/link";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "plant website",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <header className="text-gray-600 bg-white body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <RiPlantFill/>

      <span className="ml-3 text-xl font-bold">plantify</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center font-bold lg:gap-5 justify-center">
      <Link href="/" className="mr-5 hover:text-gray-900">Home</Link>
      <Link href="/about" className="mr-5 hover:text-gray-900">About</Link>
      <Link href="/bestPlants" className="mr-5 hover:text-gray-900">Best plants</Link>
      <Link href="/benefits" className="mr-5 hover:text-gray-900">benefits</Link>
    </nav>
  </div>
</header> */}

        {children}
        
      </body>
    </html>
  );
}
