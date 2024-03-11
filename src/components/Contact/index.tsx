

const Contact = () => {
  return (
    <div className="w-full px-4 flex items-center justify-center">
      <div
        className="mb-12 flex flex-col items-center justify-center bg-gray-300 rounded-3xl  bg-opacity-10 bg-clip-padding px-8 py-8 text-gray-300 backdrop-blur-md backdrop-filter shadow-three  sm:p-14 lg:mb-5 lg:w-5/6 xl:p-14"
        data-wow-delay=".15s
      "
      >
        <h2 className="mb-3 text-2xl font-bold text-white  sm:text-3xl lg:text-2xl xl:text-3xl">
          Message Us
        </h2>
        <p className="mb-12 text-base font-medium text-body-color">
          Our support team will get back to you ASAP via email.
        </p>
        <form>
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2">
              <div className="mb-8">
                <label
                  htmlFor="name"
                  className="mb-3 block text-sm font-medium text-white"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                />
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2">
              <div className="mb-8">
                <label
                  htmlFor="email"
                  className="mb-3 block text-sm font-medium text-dark dark:text-white"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                />
              </div>
            </div>
            <div className="w-full px-4">
              <div className="mb-8">
                <label
                  htmlFor="message"
                  className="mb-3 block text-sm font-medium text-white"
                >
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Enter your Message"
                  className="border-stroke w-full resize-none rounded-sm border border-transparent bg-[#2C303B] text-body-color-dark shadow-two focus:border-primary focus:shadow-none"
                ></textarea>
              </div>
            </div>
            <div className="w-full px-4">
              <button className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
