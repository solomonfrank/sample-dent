import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Container from "@/components/container";
import { PiDnaLight } from "react-icons/pi";
import { SiReact } from "react-icons/si";
import { RxDotFilled } from "react-icons/rx";
import { BsPlayFill } from "react-icons/bs";
import { SlSocialYoutube } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa6";
import { LiaFacebookSquare } from "react-icons/lia";
import { IoFlowerSharp } from "react-icons/io5";

import { PiToothThin } from "react-icons/pi";
import { Button } from "./ui";

const MotionButton = motion(Button);

const photos = [
  { url: "/assets/2.png", zIndex: "z-40" },
  { url: "/assets/3.png", zIndex: "z-30" },
  { url: "/assets/4.png", zIndex: "z-20" },
  { url: "/assets/5.png", zIndex: "z-10" },
];

const animationVariantsDental = {
  slideRight: {
    x: 0,
    transition: {
      ease: "linear",
      delay: 1,
      duration: 0.8,
    },
  },
  original: {
    x: "-50%",
    y: 0,
  },
};

const animationVariantsImg = {
  slideRight: {
    opacity: 1,
    scale: 1,
    visibility: "visible",
    transition: {
      ease: "linear",
      delay: 1,
      duration: 0.8,
    },
  },
  original: {
    scale: 0,
    opacity: 0,
    y: 0,
  },
};
const animationVariantsIcon = {
  slideRight: {
    opacity: 1,
    x: "-40%",
    visibility: "visible",
    transition: {
      ease: "linear",
      delay: 1.2,
      duration: 0.5,
    },
  },
  original: {
    x: "-100%",
    opacity: 0,
    scale: 1,
    y: 0,
  },
};

const animationVariantsCare = {
  slideRight: {
    x: 0,
    transition: {
      ease: "linear",
      delay: 1,
      duration: 0.8,
    },
  },
  original: {
    x: "-22vw",
    y: 0,
  },
};

const animationVariantsButton = {
  slideRight: {
    opacity: 1,
    scaleX: 1,
    transformOrigin: "left",
    visibility: "visible",
    transition: {
      ease: "linear",
      delay: 0.8,
      duration: 0.8,
    },
  },
  original: {
    scaleX: 0,
    opacity: 0,
  },
};

const animationVariantsLogo = {
  slideRight: {
    opacity: 1,
    visibility: "visible",
    transition: {
      ease: "linear",
      delay: 1.5,
      duration: 0.8,
    },
  },
  original: {
    opacity: 0,
  },
};

const animationVariantsMoreImg = {
  slideRight: (index: number) => ({
    x: "-2.8rem",
    opacity: 1,
    scale: 1,
    transition: {
      delay: Number(index) * 0.05 + 1.2,
      duration: 0.8,
      ease: "linear",
    },
  }),
  original: {
    x: "-100%",
    opacity: 0,
    scale: 0,
  },
};

const animationVariantsPlayImg = {
  slideRight: {
    opacity: 1,
    scale: 1,
    transformOrigin: "bottom",
    transition: {
      ease: "linear",
      delay: 1.5,
      duration: 0.8,
    },
  },
  original: {
    opacity: 0,
    scale: 0.3,
  },
};

export const Revolution = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  return (
    <Container className=" w-full h-screen relative">
      <div className="w-full h-full px-8 pt-12 relative" ref={ref}>
        <div
          className={` w-full overflow-hidden `}
          style={{ "--revealIndex": "0" } as React.CSSProperties}
        >
          <h2
            className={`uppercase w-full  flex gap-4 items-center  text-[11rem] will-change-transform 
            overflow-hidden opacity-0 ${inView && "animate-reveal-text"} `}
          >
            <span
              className={`mr-auto uppercase inline-block will-change-transform translate-x-[18%] ${
                inView && "animate-revolution-slide"
              }  `}
            >
              Revolutioning
            </span>
            <span className="flex flex-col gap-2 ">
              <span className="flex gap-1">
                <span
                  style={{ "--icon-fade": "0" } as React.CSSProperties}
                  className={`h-7 w-7 opacity-0 rounded-full bg-[#d9e8f9] flex items-center justify-center ${
                    inView && "animate-revolution-icon-fade"
                  }`}
                >
                  <PiDnaLight size={15} color="#ff5434" />
                </span>
                <span
                  style={{ "--icon-fade": "1" } as React.CSSProperties}
                  className={`h-7 w-7 opacity-0 rounded-full bg-[#d9e8f9] flex items-center justify-center ${
                    inView && "animate-revolution-icon-fade"
                  }`}
                >
                  <SiReact size={15} color="#ff5434" />
                </span>
                <span
                  style={{ "--icon-fade": "2" } as React.CSSProperties}
                  className={`h-7 w-7 opacity-0 rounded-full bg-[#d9e8f9] flex items-center justify-center ${
                    inView && "animate-revolution-icon-fade"
                  }`}
                >
                  <PiToothThin size={15} color="#ff5434" />
                </span>
              </span>
              <span className="capitalize text-md flex flex-col gap-1">
                <span
                  style={{ "--text-fade-index": "0" } as React.CSSProperties}
                  className={`font-medium opacity-0 ${
                    inView && "animate-revolution-text-fade"
                  }`}
                >
                  Modern Solution,
                </span>
                <span
                  style={{ "--text-fade-index": "1" } as React.CSSProperties}
                  className={`font-medium  opacity-0 ${
                    inView && "animate-revolution-text-fade"
                  }`}
                >
                  Timeless Smile
                </span>
              </span>
            </span>
          </h2>
        </div>

        <div
          className={`flex items-center w-full overflow-hidden  `}
          style={{ "--revealIndex": "1" } as React.CSSProperties}
        >
          <h2
            className={`uppercase w-full  flex items-center gap-5  text-[11rem] will-change-transform 
            overflow-hidden opacity-0 ${inView && "animate-reveal-text"} `}
          >
            <span className="flex ">
              <MotionButton
                initial="original"
                animate={inView ? "slideRight" : "original"}
                variants={animationVariantsButton}
                className="border-none opacity-0 origin-top-left invisible  bg-[#d9e8f9] rounded-full text-secondary"
                size="large"
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: inView ? 1 : 0,
                    visibility: inView ? "visible" : "hidden",
                    transition: {
                      delay: 1.5,
                      duration: 0.8,
                    },
                  }}
                  className="opacity-0  invisible"
                >
                  ASSISTANCE
                </motion.span>
              </MotionButton>
              <motion.span
                initial="original"
                animate={inView ? "slideRight" : "original"}
                variants={animationVariantsLogo}
                className="opacity-0 invisible h-[5rem] w-[5rem]  rounded-full bg-[#ff5434] 
        flex justify-center items-center "
              >
                <PiToothThin size={30} color="#fff" />
              </motion.span>
            </span>

            <motion.span
              initial="original"
              animate={inView ? "slideRight" : "original"}
              variants={animationVariantsDental}
              className={` inline-block will-change-transform -translate-x-1/2 `}
            >
              Dental
            </motion.span>
            <span className=" flex ">
              <motion.span
                initial="original"
                animate={inView ? "slideRight" : "original"}
                variants={animationVariantsImg}
                className="h-[9rem] w-[9rem] opacity-0 invisible rounded-full overflow-hidden  z-10
        flex justify-center items-center "
              >
                <img
                  src="/assets/2.png"
                  className="w-full h-full object-cover"
                />
              </motion.span>
              <motion.span
                initial="original"
                animate={inView ? "slideRight" : "original"}
                variants={animationVariantsIcon}
                className="  -translate-x-full h-[9rem] w-[9rem] rounded-full overflow-hidden  bg-[#d9e8f9]
        flex justify-center items-center "
              >
                <IoFlowerSharp size={60} color="#ff5434" />
              </motion.span>
            </span>

            <motion.span
              initial="original"
              animate={inView ? "slideRight" : "original"}
              variants={animationVariantsCare}
              className="inline-block will-change-transform -translate-x-[22vw]"
            >
              Care
            </motion.span>
          </h2>
        </div>

        <div
          className={`flex items-center w-full overflow-hidden  `}
          style={{ "--revealIndex": "2" } as React.CSSProperties}
        >
          <h2
            className={`uppercase w-full gap-2  flex items-center  text-[11rem] will-change-transform 
            overflow-hidden opacity-0 ${inView && "animate-reveal-text"} `}
          >
            <span
              className={`mr-auto inline-block will-change-transform translate-x-[5vw] ${
                inView && "animate-technology-slide"
              }  `}
            >
              WITH TECHNOLOGY
            </span>

            <motion.span className="flex ">
              {photos.map((item, index) => {
                return (
                  <motion.span
                    custom={Number(index)}
                    initial="initial"
                    animate={inView ? "slideRight" : "original"}
                    variants={animationVariantsMoreImg}
                    key={index}
                    className={`h-[4rem]  w-[4rem] [&:not(:last-child)]:-mr-6 rounded-full overflow-hidden
            flex justify-center items-center opacity-0 ${item.zIndex} `}
                  >
                    <img
                      src={item.url}
                      className="w-full h-full object-cover"
                    />
                  </motion.span>
                );
              })}
            </motion.span>
          </h2>

          <motion.figure
            initial="initial"
            animate={inView ? "slideRight" : "original"}
            variants={animationVariantsPlayImg}
            className="absolute -left-[5%] top-[65%] w-[20rem] h-[12rem]  "
          >
            <img
              src="/assets/2.png"
              className="w-full h-full object-cover z-10 rounded-lg overflow-hidden"
            />

            <span className="w-8 h-8 translate-x-1/2  absolute right-0 bottom-0 rounded-full z-20 flex items-center justify-center bg-[#d9e8f9]">
              <BsPlayFill color="#ff5434" size={20} />
            </span>
          </motion.figure>
        </div>

        <span
          className={`absolute opacity-0 will-change-transform flex items-center bottom-[6rem] justify-center left-1/2  text-center 
        -translate-x-1/2  w-[12rem] h-[12rem] text-[#fff] bg-secondary rounded-full text-lg after:absolute
        after:rotated-half-circle ${inView && "animate-fade-started"}`}
        >
          GET <br /> STARTED
        </span>

        <div className="absolute bottom-[3rem] w-full">
          <div className="w-full flex ">
            <div className="mr-auto ">
              <span
                style={
                  {
                    "--text-fade-index": "0",
                    "--animation-text-delay": "1.5s",
                  } as React.CSSProperties
                }
                className={`${
                  inView && "animate-revolution-text-fade"
                } opacity-0 `}
              >
                <RxDotFilled size={15} color="#ff5434" />
              </span>
              <p
                style={
                  {
                    "--text-fade-index": "0",
                    "--animation-text-delay": "1.5s",
                  } as React.CSSProperties
                }
                className={`text-sm opacity-0 ${
                  inView && "animate-revolution-text-fade"
                } `}
              >
                Your Smile, Our Passion
              </p>
            </div>

            <div className="mr-[50px]">
              <div
                className={`flex gap-3 mb-3 `}
                style={
                  {
                    "--animation-icon-delay ": "1s",
                  } as React.CSSProperties
                }
              >
                <span
                  style={{ "--icon-fade": "0" } as React.CSSProperties}
                  className={`${
                    inView && "animate-revolution-icon-fade"
                  } opacity-0`}
                >
                  <FaInstagram size={20} />
                </span>
                <span
                  style={{ "--icon-fade": "1" } as React.CSSProperties}
                  className={`${
                    inView && "animate-revolution-icon-fade"
                  } opacity-0`}
                >
                  <LiaFacebookSquare size={20} />
                </span>
                <span
                  style={{ "--icon-fade": "2" } as React.CSSProperties}
                  className={`${
                    inView && "animate-revolution-icon-fade"
                  } opacity-0`}
                >
                  <SlSocialYoutube size={20} />
                </span>
              </div>

              <p
                style={
                  {
                    "--text-fade-index": "0",
                    "--animation-text-delay": "1.5s",
                  } as React.CSSProperties
                }
                className={`text-sm opacity-0 ${
                  inView && "animate-revolution-text-fade"
                }`}
              >
                Best Startup of 2003
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
