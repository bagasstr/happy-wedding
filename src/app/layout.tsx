import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import cn from "@/lib/cn";
import dynamic from "next/dynamic";

const DynamicNavbar = dynamic(() => import("@/components/molecules/Navbar"), {
  ssr: false,
  loading: () => (
    <div className='mt-4 justify-center flex items-center h-dvh'></div>
  ),
});
const myFont = localFont({
  src: "./fonts/SF-Pro.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={cn(myFont.className, "bg-background")}>
        <DynamicNavbar />
        <main id='home' className='pt-24'>
          {children}
        </main>
      </body>
    </html>
  );
}
