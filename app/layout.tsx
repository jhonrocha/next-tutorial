import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="grid grid-flow-row grid-cols-2 p-1 bg-primary text-secondary">
          <div className="ml-10">LOGO</div>
          <ul className="flex justify-around bg-alpha items-center">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/playground">Playground</Link>
            </li>
          </ul>
        </nav>
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
