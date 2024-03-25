"use client"
import { motion,useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import Image from "next/image";

const AboutSectionTwo = () => {

  const ref = useRef<HTMLElement>(null)
  const {scrollYProgress} = useScroll({
     target: ref,
     offset:["1 0","0 0.3 "]
   });
 
  const scaleProgress = useTransform(scrollYProgress,[0,1],[0.5,1]);


  return (
    <motion.section ref={ref} style={{
      scale: scaleProgress,
      opacity: scaleProgress,
      
    }} className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="rounded-3xl bg-gray-300  bg-opacity-20 bg-clip-padding px-8 py-8 text-gray-300 backdrop-blur-sm backdrop-filter">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
            
              <Image
                src="/images/mrim2.png"
                alt="about image"
                fill
                className="drop-shadow-three hidden dark:block dark:drop-shadow-none rounded-lg"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  MR Care: Our Pledge to You
                </h3>
                <p className="text-body-color text-base font-medium leading-relaxed sm:text-lg sm:leading-relaxed">
                  MR Care represents our commitment to customer satisfaction
                  with extensive after-sales support, including technical help,
                  software maintenance, and tailored services, ensuring your
                  lasting contentment and confidence in our products.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Sustainability at Our Core
                </h3>
                <p className="text-body-color text-base font-medium leading-relaxed sm:text-lg sm:leading-relaxed">
                  Sustainability isn’t just a buzzword for us; it’s our raison
                  d’être. By meticulously remanufacturing electronic devices, we
                  prevent millions of tons of potential e-waste from polluting
                  our environment. Our process is rigorous, ensuring that each
                  device meets the highest standards of quality and reliability,
                  comparable to their brand-new counterparts.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Ethical Consumerism and Quality Assurance
                </h3>
                <p className="text-body-color text-base font-medium leading-relaxed sm:text-lg sm:leading-relaxed">
                  We believe in ethical consumerism. Every device we sell
                  supports the recycling and reuse of electronic devices,
                  reducing the environmental impact and fostering a more
                  sustainable future. Our customers can trust in the performance
                  of our remanufactured devices, thanks to our stringent testing
                  and quality control processes.
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSectionTwo;
