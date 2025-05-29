import { Footer } from "@/components/layout/footer";
import Header from "@/components/layout/header";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saskatchewan Travel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <div className="w-full max-w-[1300px] mx-auto flex flex-col flex-1">
          <Header />
          <main className="px-8">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
