import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { PiDnaLight } from "react-icons/pi";
import { SiReact } from "react-icons/si";
import { RxDotFilled } from "react-icons/rx";
import { SlSocialYoutube } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa6";
import { LiaFacebookSquare } from "react-icons/lia";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineTouchApp } from "react-icons/md";
import { VscTools } from "react-icons/vsc";
import { PiScan } from "react-icons/pi";

import { PiToothThin } from "react-icons/pi";
import { Button } from "./ui";
import Container from "./container";
import { AnimatedText } from "./ui/AnimatedText";
import { useEffect, useRef } from "react";
import { ProductScrollable } from "./scrollable";

const MotionButton = motion(Button);

const cards = [
  {
    url: "/assets/5.webp",
    title: "Appointment Scheduling",
    icon: PiScan,
  },
  {
    url: "/assets/4.webp",
    title: "Oral Care guide",
    icon: VscTools,
  },
  {
    url: "/assets/3.webp",
    title: "Teledenstry Consultation",
    icon: MdOutlineTouchApp,
  },
  {
    url: "/assets/17.webp",
    title: "Sympton Checker",
    icon: IoSettingsOutline,
  },
  {
    url: "/assets/16.webp",
    title: "Oral health Assessment",
    icon: IoSettingsOutline,
  },
];

const cards2 = [
  {
    url: "/assets/18.webp",
    title: "Advanced Technology",
    icon: IoSettingsOutline,
  },
  {
    url: "/assets/7.webp",
    title: "Oral health Assessment",
    icon: PiScan,
  },
  {
    url: "/assets/8.webp",
    title: "Dental Health Record",
    icon: VscTools,
  },
  {
    url: "/assets/9.webp",
    title: "TootlBrush Tracking",
    icon: MdOutlineTouchApp,
  },
  {
    url: "/assets/10.webp",
    title: "Sympton Checker",
    icon: IoSettingsOutline,
  },
];

const animationVariantsFlip = {
  flip: {
    opacity: 1,
    rotateY: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
    transformOrigin: "center",
  },
  original: {
    rotateY: -35,
    opacity: 0.05,
    transformOrigin: "center",
  },
};

const animationVariantsFlipDown = {
  flip: {
    opacity: 1,
    rotateY: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
    transformOrigin: "center",
  },
  original: {
    rotateY: 35,
    opacity: 0.05,
    transformOrigin: "center",
  },
};

const animationVariantsApp = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.4,
      ease: "easeInOut",
    },
  },
  hidden: {
    opacity: 0,
  },
};

const childVariant = {
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.5,
      ease: "easeInOut",
    },
  },
  hidden: {
    scale: 0,
    opacity: 0,
  },
};
export const Services = () => {
  const timeoutId = useRef<NodeJS.Timeout>();
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  const activeShortcut = useRef(0);
  const { ref, inView } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });

  const schduleTimeout = () => {
    timeoutId.current = setTimeout(goToNextProductItem, 2000);
  };

  const goToNextProductItem = () => {
    const nexItem = (activeShortcut.current + 1) % cards.length;

    goToNextItem(nexItem);
  };

  const goToNextItem = (index: number) => {
    clearTimeout(timeoutId.current);

    if (!scrollWrapperRef.current) return;

    const activeElement =
      scrollWrapperRef.current?.querySelector<HTMLDivElement>(
        `#firstCard-${index}`
      );

    if (!activeElement) return;

    activeElement.scrollIntoView({
      behavior: "smooth",
    });

    activeShortcut.current = index;

    schduleTimeout();
  };

  useEffect(() => {
    if (inView) {
      // schduleTimeout();
    }

    return () => {
      clearTimeout(timeoutId.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);
  return (
    <>
      <Container className=" w-full h-screen relative">
        <div className="w-full h-full px-8 pt-12 relative">
          <div className="flex h-full relative">
            <div ref={ref} className="relative basis-1/2 mr-auto">
              <div className="flex flex-col justify-center h-full">
                <span
                  className="flex gap-1 mb-8"
                  style={
                    {
                      "--animation-icon-delay": "0s",
                    } as React.CSSProperties
                  }
                >
                  <span
                    style={{ "--icon-fade": "0" } as React.CSSProperties}
                    className={`h-9 w-9 opacity-0 rounded-full bg-[#d9e8f9] flex items-center justify-center ${
                      inView && "animate-revolution-icon-fade"
                    }`}
                  >
                    <PiDnaLight size={25} color="#ff5434" />
                  </span>
                  <span
                    style={{ "--icon-fade": "1" } as React.CSSProperties}
                    className={`h-9 w-9 opacity-0 rounded-full bg-[#d9e8f9] flex items-center justify-center ${
                      inView && "animate-revolution-icon-fade"
                    }`}
                  >
                    <SiReact size={25} color="#ff5434" />
                  </span>
                  <span
                    style={{ "--icon-fade": "2" } as React.CSSProperties}
                    className={`h-9 w-9 opacity-0 rounded-full bg-[#d9e8f9] flex items-center justify-center ${
                      inView && "animate-revolution-icon-fade"
                    }`}
                  >
                    <PiToothThin size={25} color="#ff5434" />
                  </span>
                </span>
                <div>
                  {/* <AnimatedText
                    el="h2"
                    text={["EXPLORE OUR", "SERVICE, MAKE", "YOUR SMILE SHINE"]}
                    // text="Instant dev environment"
                    className="text-[6rem] overflow-hidden leading-none  mb-8 "
                    inView={inView}
                  /> */}
                  <div className="mb-8">
                    <AnimatedText
                      el="h2"
                      text={["EXPLORE OUR"]}
                      // text="Instant dev environment"
                      className="text-[6rem] overflow-hidden leading-none  "
                      inView={inView}
                    />
                    <AnimatedText
                      el="h2"
                      text={["SERVICE, MAKE"]}
                      // text="Instant dev environment"
                      className="text-[6rem] overflow-hidden leading-none"
                      inView={inView}
                    />
                    <AnimatedText
                      el="h2"
                      text={["YOUR SMILE SHINE"]}
                      // text="Instant dev environment"
                      className="text-[6rem] overflow-hidden leading-none"
                      inView={inView}
                    />
                  </div>

                  <motion.div className="flex items-center gap-2">
                    <MotionButton
                      animate={inView ? "visible" : "hidden"}
                      initial="hidden"
                      variants={animationVariantsApp}
                      className="bg-secondary rounded-full font-medium capitalize text-[#fff]   outline-none border-none"
                    >
                      <motion.span
                        animate={inView ? "visible" : "hidden"}
                        initial="hidden"
                        variants={childVariant}
                      >
                        Get The App
                      </motion.span>
                    </MotionButton>
                    <MotionButton
                      animate={inView ? "visible" : "hidden"}
                      initial="hidden"
                      variants={animationVariantsApp}
                      className="rounded-full capitalize border-2 font-medium text-primary border-primary "
                    >
                      <motion.span
                        animate={inView ? "visible" : "hidden"}
                        initial="hidden"
                        variants={childVariant}
                      >
                        Meet the team
                      </motion.span>
                    </MotionButton>
                  </motion.div>
                </div>
              </div>

              <div className="absolute bottom-0 w-full overflow-hidden">
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

            <div className="absolute h-[100vh] top-0 right-0 ">
              <div className="flex gap-3 h-full [perspective:2000px] [transform-style:preserve-3d]">
                <ProductScrollable
                  data={cards}
                  variants={animationVariantsFlip}
                  inView={inView}
                  label="firstCard"
                  key="firstCard"
                  start={0}
                  timer={1500}
                />
                <ProductScrollable
                  data={cards2}
                  variants={animationVariantsFlipDown}
                  inView={inView}
                  label="secondCard"
                  key="secondCard"
                  start={cards.length - 1}
                  timer={2000}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
