import React from "react";

const page = () => {
  return (
    <section className="my-16 pt-16 md:pt-20 lg:pt-28">
      <div className="container flex flex-col items-center justify-evenly gap-8">

      <h1 className="text-4xl"> OUR PRODUCTS</h1>
        <div className="w-full rounded-3xl bg-gray-300 bg-opacity-20  bg-clip-padding px-8 py-8 text-gray-300 backdrop-blur-sm backdrop-filter lg:w-2/3">
          <div className="flex w-full flex-col items-start justify-center gap-4 lg:w-full">
            <h1 className="md:text-5xl text-white">REMANUFACTURED PRINTERS </h1>
            <h1 className="text-sm md:text-xl">
              1. HP LaserJet 1020 Printer Remanufactured
            </h1>
            <h1 className="text-sm md:text-xl">
              2. HP LaserJet 1108 Printer Remanufactured
            </h1>
            <h1 className="text-sm md:text-xl">
              3. HP LaserJet M1005 Monochrome Copier Printer Scanner
              Remanufactured
            </h1>
            <h1 className="text-sm md:text-xl">
              4. Epson M100 Single Function Inkjet Printer Remanufactured
            </h1>
            <h1 className="text-sm md:text-xl">5. HP LaserJet P1007 Printer</h1>
            <h1 className="text-sm md:text-xl">
              6. Canon LBP 2900B Monochrome Laser Printer Remanufactured
            </h1>
          </div>
        </div>

        <div className="w-full rounded-3xl bg-gray-300 bg-opacity-20  bg-clip-padding px-8 py-8 text-gray-300 backdrop-blur-sm backdrop-filter lg:w-2/3">
          <div className="flex w-full flex-col items-start justify-center gap-4 lg:w-full">
            <h1 className="md:text-5xl text-white">REMANUFACTURED SPARES </h1>
            <h1 className="text-sm md:text-xl">1. METRO FUSER</h1>
            <h1 className="text-sm md:text-xl">2. DMP HEADS </h1>
            <h1 className="text-sm md:text-xl">3. FORMATTER BOARDS</h1>
            <h1 className="text-sm md:text-xl">4. LSU</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
