import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



export const metadata: Metadata = {
  title: "The LPs Rochester",
  description: "The LPs Rochester",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">
        {children}
        </main>
        </body>
        <Footer />
    </html>
  );
}
