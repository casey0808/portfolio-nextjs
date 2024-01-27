import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Header from "@/components/Header";

// const inter = Inter({ subsets: ["latin"] });
const notoSans = Noto_Sans({
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Casey CUI",
  description: "frontend developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoSans.className}>
        <main className="min-h-screen p-12 lg:p-20 max-w-5xl mx-auto text-neutral-900">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
