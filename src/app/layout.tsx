"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Comfortaa, DM_Sans, Inter } from "next/font/google";
import "../styles/index.css";
import BgParticle from "../components/Hero/ParticleBg";

const inter = DM_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`bg-black ${inter.className}`}>
        <Providers>
          <div className="absolute left-0 top-0 -z-10">
            <BgParticle />
          </div>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
import ParticleBg from "@/components/Hero/ParticleBg";
