import React from "react";

const Footer = () => {
  const Year = new Date().getFullYear();

  return (
    <footer className="relative bg-black text-white">
      <div className="absolute bg-indigo-400 top-0 left-0 w-[100%] overflow-hidden">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,
                        250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,
                        3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="relative block h-[600px] fill-white"
          ></path>
        </svg>
        <div className="grid lg:grid-cols-4 gap-20 sm:grid-cols-1 p-20 bg-indigo-400 lg:flex  lg: justify-between">
          <div>
            <li className="my-4 list-none">Terms</li>
            <li className="my-4 list-none">Website Guidlines & Ideas</li>
            <li className="my-4 list-none">Tips & Tricks</li>
            <li className="my-4 list-none">careers</li>
            <li className="my-4 list-none">blogs</li>
            <li className="my-4 list-none">Help & Support</li>
          </div>
          <div className="flex flex-col gap-5">
            <p>
              <li className="my-4 list-none">Terms</li>
              <li className="my-4 list-none">Privacy policy</li>
              <li className="my-4 list-none">Sitemap</li>
              <li className="my-4 list-none">Accessibility statement</li>
            </p>
          </div>

          <div className="mb-4 md:mb-0">
            <h2 className="text-3xl text-slate-900 font-semibold py-2">
              Contact
            </h2>
            <p className="text-[16px] my-4">Email: Coursherkaro24@gmail.com</p>
            <p className="text-[16px] my-4">Phone: +91 24000 25000 </p>
          </div>
        </div>

        <div className="mt-20">
          <div className="h-full flex items-center justify-center mb-5">
            <form className="w-96 relative">
              <input
                type="email"
                placeholder="Subscribe to our website"
                className="w-full text-gray-800 p-4 h-10 rounded-full focus:outline-none 
                            focus:border border-pink-800"
              />
              <button
                type="Submit"
                className="px-8 py-2 rounded-full text-white
                                 absolute top-0 right-0 bg-[#3e4377]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <h6 className="text-center text-slate-950 text-[17px] font-medium">
          &copy; Copyrights Coursherkaro {Year}
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
