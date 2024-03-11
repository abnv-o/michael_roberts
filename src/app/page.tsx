import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Why from "@/components/Why";
import Hero from "@/components/Hero";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Micheal Roberts",
  description: "This is Home for Micheal Roberts ",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Why />
     
      <AboutSectionOne />
      <AboutSectionTwo />
      
      <Contact />
    </>
  );
}
