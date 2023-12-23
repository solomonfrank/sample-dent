import { PiToothThin } from "react-icons/pi";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const MotionBsArrowRight = motion(BsArrowRight);

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
        delay: 0.9,
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

  const xDuration = 0.5;
  const parentVariant = {
    slide: {
      x: 0,
      y: 0,
      transition: {
        duration: xDuration,
        when: "beforeChildren",
        y: {
          delay: xDuration,
        },
      },
    },
    original: {
      x: "-50px",
      y: "-50px",
    },
  };

  const childVariant = {
    original: {
      x: 0,
      y: 0,
    },

    slide: {
      x: "12px",
      y: 0,
    },

    // slideRight: {
    //   x: "300px",
    //   y: 0,
    //   transition: {
    //     x: {
    //       delay: 1,
    //     },
    //   },
    // },
  };

  const denseVaraint = {
    original: {
      width: "10rem",
      y: "-50px",
    },
    final: {
      width: "6rem",
      y: 0,
      transition: {
        delay: 0.2,
        duration: xDuration,
      },
    },
  };

  const denseVaraintText = {
    original: {
      opacity: 1,
    },
    final: {
      opacity: 0,
      y: 0,
      transition: {
        duration: xDuration,
      },
    },
  };

  const AssistantVaraint = {
    original: {
      width: "13rem",
      y: "20px",
    },
    final: {
      width: "6rem",
      y: "-55px",
      transition: {
        // delay: 0.5,
        y: {
          delay: 0.3,
          duration: 0.6,
        },
        duration: xDuration,
      },
    },
  };

  const logoVariant = {
    original: {
      y: "20px",
    },
    final: {
      y: "-55px",
      transition: {
        // delay: 0.5,
        y: {
          delay: 0.3,
          duration: 0.6,
        },
        duration: xDuration,
      },
    },
  };

  const ContainerVariant = {
    final: {
      opacity: 0,
      transition: {
        duration: xDuration,
        when: "beforeChildren",
        delay: xDuration * 2,
      },
    },
    original: {
      opacity: 1,
    },
  };
  return (
    <AnimatePresence>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`fixed  bg-[#fffcef] inset-0  w-full h-full ${className} flex justify-center items-center`}
      >
        <motion.div
          variants={ContainerVariant}
          initial="original"
          animate="final"
          className="flex flex-col w-full justify-center items-center  absolute top-1/2 left-1/2
         -translate-x-1/2 -translate-y-1/2"
        >
          <motion.div
            initial={{ opacity: 1 }}
            transition={{ delay: 1, ease: "easeInOut" }}
            className="flex justify-center items-center w-full h-full"
          >
            <motion.div
              variants={parentVariant}
              initial="original"
              animate={["slide"]}
              className="flex gap-4 items-center"
            >
              <motion.span
                variants={childVariant}
                className="h-[6rem] w-[6rem]  rounded-full bg-transparent border-2 will-change-transform
          border-secondary flex justify-center items-center"
              >
                <BsArrowRight
                  size={30}
                  color="#ff5434"
                  className="origin-center  animate-rotate-arrow"
                />
              </motion.span>
            </motion.div>

            <motion.div>
              <motion.span
                initial="original"
                animate="final"
                layout
                variants={denseVaraint}
                className="origin-center before:inset-0 before:origin-center  
        will-change-auto transition-transform 
          before:rounded-full 
        before:bg-secondary before:absolute h-[6rem] w-[10rem] overflow-hidden relative -translate-y-[20px]   text-md 
         rounded-full text-[#fff] text-center flex  items-center justify-center"
              >
                <motion.span
                  initial="original"
                  animate="final"
                  variants={denseVaraintText}
                  className="absolute "
                >
                  DENTAL
                </motion.span>
                <BsArrowRight
                  size={30}
                  color="#fff"
                  className="origin-center animate-dental-arrow-show overflow-hidden absolute opacity-0"
                />
              </motion.span>
            </motion.div>

            {/* <div className="flex gap-2 items-center ml-[18%]  animate-slideLeft ">
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
          </div> */}
          </motion.div>

          <motion.div className="flex justify-center items-center w-full h-full ml-[25rem]">
            <div className="flex gap-2 items-center ">
              <div>
                <motion.span
                  layout
                  initial="original"
                  animate="final"
                  variants={AssistantVaraint}
                  className=" before:w-full before:h-full relative 
          before:absolute before:inset-0 before:origin-center will-change-transform 
            h-[6rem] w-[13rem]  text-secondary text-md rounded-full  
          bg-[#fff] text-center flex  items-center justify-center overflow-hidden  "
                >
                  <motion.span
                    initial="original"
                    animate="final"
                    variants={denseVaraintText}
                    layout
                    className="absolute will-change-transform"
                  >
                    ASSISTANCE
                  </motion.span>
                  <BsArrowLeft
                    size={30}
                    color="#ff5434"
                    className="origin-center overflow-hidden absolute opacity-0 animate-rotate-left-arrow"
                  />
                </motion.span>
              </div>

              <motion.span
                initial="original"
                animate="final"
                variants={logoVariant}
                className="h-[6rem] w-[6rem] rounded-full bg-[#ff5434] 
        flex justify-center items-center "
              >
                <PiToothThin size={30} color="#fff" />
              </motion.span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col justify-center items-center absolute
      top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 "
        >
          <motion.span
            transition={{ delay: 5, ease: "easeInOut" }}
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
