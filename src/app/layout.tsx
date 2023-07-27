import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next AppWrite app",
  description: "Learning appwrite",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1 className="w-100 bg-white text-black text-3xl text-center">
          This is all render element
        </h1>

        {children}
      </body>
    </html>
  );
}
