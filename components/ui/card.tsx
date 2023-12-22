import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Button } from ".";
import { IconType } from "react-icons";
import { IoHeartOutline } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
import { useInView } from "react-intersection-observer";

export const Card = ({
  className,
  src,
  index,
  exitAngle,
  angle,
  title,
  icon: Icon,
}: {
  src?: string;
  className?: string;
  title?: string;
  index?: string;
  exitAngle?: string;
  angle?: string;
  icon?: IconType;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const variants = {
    visible: (exitAngle: number) => ({
      rotate: -exitAngle,
      y: "-200%",
      transition: {
        rotate: {
          delay: Number(index) * 1.5,
          ease: "easeInOut",
        },
        y: { delay: Number(index) * 1.5 + 0.5 },
      },
    }),

    hidden: { rotate: -Number(angle) },
  };
  return (
    <motion.div
      ref={ref}
      custom={Number(exitAngle)}
      animate="visible"
      initial="hidden"
      variants={variants}
      transition={{ delay: 1 }}
      style={
        {
          "--index": index,
          "--exitAngle": exitAngle,
          transformOrigin: "center center",
        } as React.CSSProperties
      }
      // initial={{
      //   y: "50%",
      //   rotate: -23,
      // }}
      // animate={{ rotate: -2, opacity: 1, y: "0%" }}
      // transition={{ ease: "easeInOut", duration: 0.5 }}
      className={twMerge(
        "pointer-events-none absolute grid h-[300px] will-change-transform  transition-transform  [transform-style:preserve-3d] w-[250px] origin-center",
        className
      )}
    >
      <figure className="overflow-hidden rounded-3xl w-full h-full absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
        <img src={src} className="w-full h-full object-cover" />
      </figure>

      <span className="z-[99] absolute flex items-center justify-center bottom-10 left-1/2 w-full -translate-x-1/2 ">
        <span className="w-7 h-7 rounded-full bg-[#fff] flex justify-center items-center">
          {Icon && <Icon size={20} />}
        </span>
        <Button
          size="small"
          className=" rounded-full border-none bg-[#fff] text-primary"
        >
          {title}
        </Button>
      </span>
    </motion.div>
  );
};

export const CardService = ({
  className,
  src,
  index,
  exitAngle,
  angle,
  title,
  icon: Icon,
  id,
}: {
  src?: string;
  className?: string;
  title?: string;
  index?: string;
  exitAngle?: string;
  angle?: string;
  icon?: IconType;
  id?: string;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const variants = {
    visible: (exitAngle: number) => ({
      rotate: -exitAngle,
      y: "-200%",
      transition: {
        rotate: {
          delay: Number(index) * 1.5,
          ease: "easeInOut",
        },
        y: { delay: Number(index) * 1.5 + 0.5 },
      },
    }),

    hidden: { rotate: -Number(angle) },
  };
  return (
    <motion.div
      ref={ref}
      id={id}
      custom={Number(exitAngle)}
      animate="visible"
      initial="hidden"
      variants={variants}
      transition={{ delay: 1 }}
      style={
        {
          "--index": index,
          "--exitAngle": exitAngle,
          transformOrigin: "center center",
        } as React.CSSProperties
      }
      className={twMerge(
        "pointer-events-none relative overflow-hidden h-[220px] will-change-transform  transition-transform  [transform-style:preserve-3d] w-[200px] origin-center",
        className
      )}
    >
      <span className="flex gap-1  z-[999] absolute right-3 top-3">
        <span
          className={`h-6 w-6 rounded-full bg-[#fff] flex items-center justify-center`}
        >
          <IoHeartOutline size={15} color="#000" />
        </span>
        <span
          className={`h-6 w-6 rounded-full bg-[#fff] flex items-center justify-center`}
        >
          <GoArrowUpRight size={15} color="#000" />
        </span>
      </span>
      <figure
        className="overflow-hidden rounded-3xl w-full h-full absolute 
      left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2
      before:absolute before:w-full before:h-full  before:z-40 before:top-0 before:left-0 before:bg-black before:opacity-20
      "
      >
        <img src={src} className="w-full h-full object-cover" />
      </figure>

      <span className="z-[99] absolute flex items-center justify-center bottom-3 left-1/2 w-full -translate-x-1/2 ">
        {Icon && (
          <span className="w-7 h-7 rounded-full bg-[#fff] flex justify-center items-center">
            {<Icon size={20} />}
          </span>
        )}

        <Button
          size="small"
          className=" rounded-full border-[#fff]  border-opacity-30 border-2 text-[#fff] text-opacity-60 bg-transparent"
        >
          {title}
        </Button>
      </span>
    </motion.div>
  );
};
