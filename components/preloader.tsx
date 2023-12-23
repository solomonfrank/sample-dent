import { PiToothThin } from "react-icons/pi";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

export const Preloader = ({
  className,
  handleAnimationEnd,
}: {
  className?: string;
  handleAnimationEnd?: () => void;
}) => {
  const animateLogVariant = {
    slide: {
      x: 0,
      y: "-50%",
      opacity: 1,

      transition: {
        delay: 1,
        ease: "linear",
        y: {
          delay: 1.4,
        },
      },
    },
    original: {
      x: "-20%",
      opacity: 0,
    },
  };
  return (
    <AnimatePresence>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`fixed  bg-[#fffcef] inset-0  w-full h-full ${className}`}
      >
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, visibility: "hidden" }}
          transition={{ delay: 1, ease: "easeInOut" }}
          className="flex justify-center flex-col  items-center w-full h-full"
        >
          <div className="flex gap-2 items-center">
            <span
              className="h-[6rem] w-[6rem] animate-moveIcon rounded-full bg-transparent border-2
          border-secondary flex justify-center items-center"
            >
              <BsArrowRight
                size={30}
                color="#ff5434"
                className="origin-center animate-rotate-arrow"
              />
            </span>

            {/* <span
          className="origin-center before:inset-0 animate-moveIconDense before:origin-center
        will-change-auto transition-transform 
        before:animate-scaleTitle before:rounded-full 
        before:bg-secondary before:absolute h-[5rem] w-[10rem] overflow-hidden relative   text-md 
         rounded-full text-[#fff] text-center flex  items-center justify-center"
        >
          <span className="absolute animate-dental-fade">DENTAL</span>
          <BsArrowRight
            size={30}
            color="#fff"
            className="origin-center animate-dental-arrow-show overflow-hidden absolute opacity-0 animate-arrow-fade"
          />
        </span> */}

            <motion.span
              initial={{ width: "10rem" }}
              animate={{ width: "6rem" }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="origin-center before:inset-0 before:origin-center  animate-moveIconDense
        will-change-auto transition-transform 
          before:rounded-full 
        before:bg-secondary before:absolute h-[6rem] w-[10rem] overflow-hidden relative -translate-y-[20px]   text-md 
         rounded-full text-[#fff] text-center flex  items-center justify-center"
            >
              <span className="absolute animate-dental-fade ">DENTAL</span>
              <BsArrowRight
                size={30}
                color="#fff"
                className="origin-center animate-dental-arrow-show overflow-hidden absolute opacity-0"
              />
            </motion.span>
          </div>
          <div className="flex gap-2 items-center ml-[18%]  animate-slideLeft ">
            <motion.span
              layout
              initial={{ width: "13rem" }}
              animate={{ width: "6rem" }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className=" before:w-full before:h-full relative 
          before:absolute before:inset-0 before:origin-center will-change-transform 
            h-[6rem] w-[13rem]  text-secondary text-md rounded-full  
          bg-[#fff] text-center flex  items-center justify-center overflow-hidden animate-moveIconAssistance "
            >
              <motion.span
                layout
                className="absolute animate-dental-fade will-change-transform"
              >
                ASSISTANCE
              </motion.span>
              <BsArrowLeft
                size={30}
                color="#ff5434"
                className="origin-center overflow-hidden absolute opacity-0 animate-rotate-left-arrow"
              />
            </motion.span>

            <span
              className="h-[6rem] w-[6rem] rounded-full bg-[#ff5434] 
        flex justify-center items-center  animate-moveIconAssistance "
            >
              <PiToothThin size={30} color="#fff" />
            </span>
          </div>
        </motion.div>

        <motion.div
          exit={{ opacity: 0 }}
          className="flex flex-col justify-center items-center absolute
      top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 "
        >
          <motion.span
            // animate={{ x: 0 }}
            // initial={{ x: "-50%" }}
            transition={{ delay: 1.5, ease: "easeInOut" }}
            variants={animateLogVariant}
            onAnimationComplete={(definition) => {
              console.log("Completed animating", definition);
              if (handleAnimationEnd) {
                handleAnimationEnd();
              }
            }}
            animate="slide"
            initial="original"
            className="flex flex-col justify-center items-center gap-2  overflow-hidden 
        "
          >
            <motion.span
              // animate={{ x: 0 }}
              // initial={{ x: "-50%" }}
              // transition={{ delay: 1.5, ease: "easeInOut" }}
              className="h-[6rem] w-[6rem] rounded-full bg-[#ff5434]  
        flex justify-center items-center"
            >
              <PiToothThin size={32} color="#fff" />
            </motion.span>
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ delay: 1.4, ease: "linear" }}
              className="text-secondary text-lg inline-block "
            >
              <span className="inline-block">DENTYTECH</span>
            </motion.span>
          </motion.span>
        </motion.div>
      </motion.section>
    </AnimatePresence>
  );
};
