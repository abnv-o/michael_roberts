import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "This is About Page ",
  // other metadata
};

const AboutPage = () => {
  return (
    <><div className="mt-32 lg:mt-8">
      <AboutSectionOne />
      <AboutSectionTwo />
      </div>
    </>
  );
};

export default AboutPage;
