"use client"
import { motion,useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";



const checkIcon = (
  
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

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
      
    }} id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div  className="container">
      <div  className="rounded-3xl bg-gray-300  bg-opacity-20 bg-clip-padding px-8 py-8 text-gray-300 backdrop-blur-sm backdrop-filter">
        <div  className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="About Michael Roberts"
                paragraph="At Michael Roberts, we’re not just a company; we’re a movement. Founded in 2018, our mission is to revolutionize the electronics industry by breathing new life into used devices. As a leader in the field of remanufactured printers, we’re driven by a passion for sustainability and a commitment to quality."
                mb="44px"
              />

              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="All options and features are tested" />
                    <List text="Firmware is updated and page count reset to zero" />
                    <List text="All individual options are tested independently" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Box is labeled with part number, description, and serial number" />
                    <List text="Unit is fully tested, including all trays and MP trays" />
                    <List text="Pickup rollers, transfer roller, fuser, transfer belts replaced" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 div">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                
                <Image
                  src="/images/mrim1.png"
                  alt="about-image"
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSectionOne;
