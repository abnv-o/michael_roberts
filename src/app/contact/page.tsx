import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "This is Contact Page ",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
     <div className=" mt-32 lg:mt-36">
      <Contact />
      </div>
    </>
  );
};

export default ContactPage;
