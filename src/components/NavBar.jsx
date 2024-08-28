import { AnimatePresence, motion } from "framer-motion";

const NavBar = () => {
  return (
    <nav className="bg-darkBlue py-5 drop-shadow-lg text-white">
      <div className="container flex justify-between">
        <a href="#" className="font-bold text-lg sm:text-xl md:text-3xl">
          Where in the world?
        </a>
        <button className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-4 sm:size-6 outline-none"
          >
            <path
              fillRule="evenodd"
              d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
              clipRule="evenodd"
            />
          </svg>

          <span className="ml-2 font-semibold text-sm sm:text-base">
            Dark Mode
          </span>
        </button>
      </div>
    </nav>
  );
};
export default NavBar;
