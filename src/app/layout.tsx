import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppinsFont = Poppins({
  subsets: ["latin"], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins', 
  display: 'swap',
});


export const metadata: Metadata = {
  title: "Nguyen Hong Phuoc",
  description: "Nguyen Hong Phuoc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-screen bg-[#efefed] poppins.variable">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppinsFont.variable} antialiased  bg-[#efefed]`}
      >
        {children}
      </body>
    </html>
  );
}
