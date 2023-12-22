import { motion } from "framer-motion";
import Container from "@/components/container";
import { Button } from "@/components/ui";
import { PiToothThin } from "react-icons/pi";
import { CgMenuRight } from "react-icons/cg";

const iconVariant = {
  hidden: {
    opacity: 0,
    scale: 0,
    x: "500%",
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      ease: "linear",
      x: {
        delay: 0.8,
        duration: 0.6,
      },
      scale: {
        duration: 0.5,
      },
    },
  },
};

const textVariant = {
  hidden: {
    opacity: 1,
    // x: "-100%",
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      delay: 1.5,
      duration: 0.8,
    },
  },
};

export const Header = () => {
  return (
    <header className="fixed w-full top-0 left-0">
      <Container>
        <nav className="h-full flex items-center justify-between font-medium py-4">
          <div className="flex items-center">
            <Button className="rounded-full text-primary border-primary">
              Menu
            </Button>
            <span
              className="rounded-full w-8 h-8
           border-primary flex items-center justify-center border"
            >
              <CgMenuRight size={15} color="#000" />
            </span>
          </div>
          <div className="ml-auto flex items-center gap-2 relative">
            <motion.span
              initial="hidden"
              animate={"visible"}
              variants={iconVariant}
              className="rounded-full z-20 w-8 h-8 
           flex items-center justify-center  bg-secondary  "
            >
              <PiToothThin size={20} color="#fff" className="z-30" />
            </motion.span>
            <motion.span
              initial="hidden"
              // animate={"visible"}
              variants={textVariant}
              className="text-lg inline-block 
              before:animate-reveal-brand-title
              before:absolute before:w-full before:h-full before:bg-[#fff]"
            >
              DENTYTECH
            </motion.span>
          </div>
          <div className="ml-auto flex items-center">
            <Button
              className="rounded-full text-primary border-primary border"
              href="/"
            >
              Login
            </Button>
            <Button className="bg-secondary rounded-full   outline-none border-none">
              Sign up
            </Button>
          </div>
        </nav>
      </Container>
    </header>
  );
};
