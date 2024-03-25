"use client"
import { motion,useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import Image from "next/image";



const Features = () => {

  const ref = useRef<HTMLDivElement>(null)
 const {scrollYProgress} = useScroll({
    target: ref,
    offset:["1 0","0 0.3"]
  });

 const scaleProgress = useTransform(scrollYProgress,[0,1],[0.5,1]);

  return (
    
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <motion.div ref={ref}
        style={{
          scale: scaleProgress,
          opacity: scrollYProgress,
        }} className="container">
          <div className="flex flex-col justify-center gap-8 rounded-3xl bg-gray-300  bg-opacity-20 bg-clip-padding px-8 py-8 text-gray-300 backdrop-blur-sm backdrop-filter lg:flex lg:flex-row ">
            {/* text */}
            <div className="flex flex-col justify-center gap-8 lg:w-1/2">
          <h1 className="text-3xl font-bold animate-typing overflow-hidden whitespace-nowrap lg:text-5xl">Why Remanufacturing ?</h1>
          <p className="align-left text-xl lg:px-8 ">
            Do you know... <br></br>We generate around 4 crore tons of
            electronic waste every year, worldwide. That’s like throwing 200
            laptops every second.Remanufacturing is not just repair; it’s a
            commitment to sustainability. By restoring products to their
            original glory, we reduce waste and conserve our precious resources.
            It’s a proactive step towards a greener planet, ensuring that we use
            less to create more. Choose remanufacturing, choose a sustainable
            future.
          </p>
          </div>
          {/* img */}
          <div className="flex justify-center items-center lg:h-auto w-full lg:w-1/2">
          
                <Image src="/mr3.png"  layout="responsive" width={500} height={300} alt="image" />
           </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Features;
