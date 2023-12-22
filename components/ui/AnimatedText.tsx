import { motion } from "framer-motion";

type AnimatedTextProps = {
  text: string | string[];
  el: keyof JSX.IntrinsicElements;
  className: string;
  inView: boolean;
};

export const AnimatedText = ({
  text,
  el: Wrapper = "p",
  className,
  inView,
}: AnimatedTextProps) => {
  // const { ref, inView, entry } = useInView({
  //   threshold: 0.4,
  //   triggerOnce: true,
  // });
  const textArr = Array.isArray(text) ? text : [text];
  const defaultAnimation = {
    initial: {
      opacity: 1,
      y: "100%",
    },

    final: {
      opacity: 1,
      y: "0",
      transition: {
        duration: 0.8,
      },
      // transition: {
      //   // ease: "easeInOut",
      //   // duration: 1,
      //   staggerChildren: 0.1,

      //   duration: 0.8,
      //   // type: "spring",
      //   // stiffness: 100,
      //   // damping: 12,
      // },
    },
  };

  return (
    <Wrapper className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        initial="initial"
        // variants={defaultAnimation}
        transition={{
          // staggerChildren: 0.1,
          // ease: "easeInOut",
          staggerChildren: 0.05, // delay between each animation
          // delayChildren: 5, // The delay before the start of child animations by 5s
        }}
        animate={inView ? "final" : "initial"}
        className="aria-hidden overflow-hidden"
      >
        {textArr.map((line) => {
          return (
            <span className="block  overflow-hidden" key={line}>
              {line.split(" ").map((word) => {
                return (
                  <span
                    key={word}
                    className="overflow-hidden inline-block h-full pt-0"
                  >
                    {word.split("").map((char, index) => {
                      return (
                        <motion.span
                          key={char}
                          className="inline-block will-change-transform"
                          variants={defaultAnimation}
                        >
                          {char}
                        </motion.span>
                      );
                    })}
                    <span>&nbsp;</span>
                  </span>
                );
              })}
            </span>
          );
        })}
      </motion.span>
    </Wrapper>
  );
};
