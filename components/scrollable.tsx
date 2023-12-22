import { Variants, motion } from "framer-motion";
import { CardService } from "./ui";
import { useEffect, useRef } from "react";
import { IconType } from "react-icons";

type Product = {
  url: string;
  title: string;
  icon: IconType;
};

type ProductScrollableProps = {
  data: Product[];
  inView: boolean;
  variants: Variants;
  label: string;
  start: number;
  timer: number;
};
export const ProductScrollable = ({
  data,
  inView,
  variants,
  label,
  start,
  timer,
}: ProductScrollableProps) => {
  const timeoutId = useRef<NodeJS.Timeout>();
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  const activeShortcut = useRef(start);

  const schduleTimeout = () => {
    timeoutId.current = setTimeout(goToNextProductItem, timer);
  };

  const goToNextProductItem = () => {
    const nexItem = (activeShortcut.current + 1) % data.length;

    goToNextItem(nexItem);
  };

  const goToNextItem = (index: number) => {
    clearTimeout(timeoutId.current);

    if (!scrollWrapperRef.current) return;

    const activeElement =
      scrollWrapperRef.current?.querySelector<HTMLDivElement>(
        `#${label}-${index}`
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
      schduleTimeout();
    }

    return () => {
      clearTimeout(timeoutId.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);
  return (
    <motion.div
      ref={scrollWrapperRef}
      initial="original"
      animate={inView ? "flip" : "original"}
      variants={variants}
      className={`flex flex-col gap-3 h-full overflow-auto no-scrollbar opacity-20 
       snap-y snap-mandatory origin-left [transform-style:preserve-3d]`}
    >
      {data.map((item, index) => {
        return (
          <div
            key={item.url}
            className={`origin-center`}
            id={`${label}-${index}`}
          >
            <CardService
              src={item.url}
              key={item.url}
              title={item.title}
              className={`shrink-0 
            snap-center  `}
            />
          </div>
        );
      })}
    </motion.div>
  );
};
