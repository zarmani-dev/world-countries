import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const NavBar = () => {
  const [isDark, setIsDark] = useState(true);

  const handleClick = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };

  return (
    <nav className="bg-lightGrayBg dark:bg-darkBlue py-5 drop-shadow-lg text-darkBlueText dark:text-white">
      <div className="container flex justify-between">
        <a href="#" className="font-bold text-lg sm:text-xl md:text-3xl">
          Where in the world?
        </a>
        <motion.button onClick={handleClick} className="flex items-center">
          {!isDark ? (
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              whileInView={{ y: [-30, 0] }}
              whileTap={{ y: -30 }}
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4 sm:size-6 outline-none"
            >
              <path
                fillRule="evenodd"
                d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
                clipRule="evenodd"
              />
            </motion.svg>
          ) : (
            <motion.svg
              animate={{
                rotate: 360,
                transition: { duration: 5, repeat: Infinity },
              }}
              whileTap={{ y: -30 }}
              whileInView={{
                y: [-30, 0],
              }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 sm:size-6 outline-none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </motion.svg>
          )}

          {isDark ? (
            <span className="ml-2 font-semibold text-sm sm:text-base">
              Light Mode
            </span>
          ) : (
            <span className="ml-2 font-semibold text-sm sm:text-base">
              Dark Mode
            </span>
          )}
        </motion.button>
      </div>
    </nav>
  );
};
export default NavBar;
