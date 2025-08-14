import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "@/redux/Providers";

const rubik = Rubik({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fresh Harvests",
  description: "Groceries Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo-icon.png" sizes="any" />
      </head>
      <body
        className={`${rubik.className} antialiased flex flex-col min-h-screen`}
      >
        <Providers>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <footer className="w-full bg-gray-200">
            <Footer />
          </footer>
        </Providers>
      </body>
    </html>
  );
}
