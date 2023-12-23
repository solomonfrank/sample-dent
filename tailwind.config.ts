import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: ["1.3rem", "1.2"],
      sm: ["1.4rem", "1"],
      md: ["1.6rem", "1"],
      lg: ["1.8rem", "1"],
      xl: ["2.2rem", "1.3"],
      "2xl": "2.4rem",
      "3xl": "2.6rem",
      "4xl": "3.8rem",
      "5xl": "4rem",
      "6xl": ["4.2rem", "1"],
      "8xl": ["8rem", "1"],
    },
    fontFamily: {
      sans: ["Inter"],
    },
    spacing: {
      0: "0",
      1: "0.4rem",
      2: "0.8rem",
      3: "1.2rem",
      4: "1.6rem",
      5: "2rem",
      6: "2.4rem",
      7: "2.8rem",
      8: "3.2rem",
      9: "3.6rem",
      10: "4rem",
      11: "4.4rem",
      12: "4.8rem",
      13: "5.2rem",
      14: "5.6rem",
      15: "6rem",
      16: "6.4rem",
    },
    extend: {
      colors: {
        background: "#000212",
        "white-08": "rgba(255, 255, 255, 0.08)",
        primary: "#000",
        secondary: "#ff5434",
        textiary: "#b4bcd099",
      },
      backgroundImage: {
        "conic-hero-gradient":
          "conic-gradient(from 230.29deg at 51.63% 52.16%, rgb(36, 0, 255) 0deg, rgb(0, 135, 255) 67.5deg, rgb(108, 39, 157) 198.75deg, rgb(24, 38, 163) 251.25deg, rgb(54, 103, 196) 301.88deg, rgb(105, 30, 255) 360deg)",
        "hero-gradient":
          "radial-gradient(ellipse 50% 80% at 20% 40%,rgba(93,52,221,0.1),transparent), radial-gradient(ellipse 50% 80% at 80% 50%,rgba(120,119,198,0.15),transparent)",
        maskHero:
          "linear-gradient(to right bottom, rgb(255, 255, 255) 30%, rgba(255, 255, 255, 0.38))",
        subtleMask:
          "radial-gradient(ellipse 80% 50% at 50% -20%,rgba(120,119,198,0.3),hsla(0,0%,100%,0))",
        backgroundGalaxy:
          "radial-gradient(circle at bottom center,#7877C6,transparent 70%)",
        unlikeBackground:
          "linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.05) 100%)",
        shortbackground: "",
      },
      keyframes: {
        "dental-fade": {
          0: {
            opacity: "1",
          },

          "100%": {
            opacity: "0",
          },
        },
        "dental-arrow-show": {
          "0%, 25%": {
            opacity: "1",
            transform: "rotate(0deg)",
            "animation-timing-function": "cubic-bezier(0.12,0.01,0.08,0.99)",
          },
          "50%": {
            transform: "rotate(90deg)",
            opacity: "1",
            "animation-timing-function": "cubic-bezier(0.12,0.01,0.08,0.99)",
          },

          "100%": {
            opacity: "1",
            transform: "rotate(0deg)",
          },
        },

        moveIcon: {
          "0%": {
            transform: "translate(-20px, -20px)",
          },
          "25%": {
            transform: "translate(15px, -20px)",
          },
          "50%": {
            transform: "translateY(calc(12px))",
          },
          "100%": {
            transform: "translate(15px,calc(12px))",
          },
        },
        moveIconDense: {
          "50%": {
            transform: "translateY(12px))",
          },
          "100%": {
            transform: "translateY(12px)",
          },
        },
        slideLeft: {
          "0": {
            transform: "translateX(20px)",
          },
          "100%": {
            transform: "translateX(-10px)",
          },
        },
        // slideLogo: {
        //   "0%": {
        //     transform: "translate(-50px, -50%)",
        //     opacity: "0",
        //   },

        //   "50%": {
        //     transform: "translate(0%, -50%)",
        //     opacity: "1",
        //   },
        //   "100%": {
        //     transform: "translate(0%, -85%)",
        //     opacity: "1",
        //   },
        // },

        slideLogo: {
          "0%": {
            transform: "translate(-50px, -50%)",
            opacity: "0",
          },

          "50%": {
            transform: "translate(0%, -50%)",
            opacity: "1",
          },
          "100%": {
            transform: "translate(0%, -50%)",
            opacity: "1",
          },
        },
        // slideLogot: {
        //   "0%": {
        //     transform: "translateY(50%)",
        //     opacity: "1",
        //   },
        //   "50%": {
        //     transform: "translateY(-20%)",
        //     opacity: "1",
        //   },
        //   "100%": {
        //     transform: "translateY(-20%)",
        //     opacity: "1",
        //   },
        // },
        slideRight: {
          "0": {
            transform: "translateX(-20px)",
            opacity: "0",
          },
          "25%, 50%": {
            transform: "translateX(-20px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0px)",
            opacity: "1",
          },
        },
        "brand-title": {
          "0%": {
            opacity: "0",
            transform: "translateY(100%)",
          },
          "50%, 100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        moveIconAssistance: {
          "0%, 25%": {
            transform: "translateY(0)",
          },
          "50%": {
            // transform: "translateY(-55%)",
            transform: "translateY(-40px)",
            // transform: "translateY(calc((50% - 0.6rem) * -1px))",
          },
          "100%": {
            // transform: "translateY(-55%)",
            transform: "translateY(-40px)",
            //  transform: "translateY(calc((50% - 0.6rem) * -1px))",
          },
        },
        "rotate-arrow": {
          "0%,25%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(90deg)",
          },
          "60%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(0deg)",
          },
        },

        "rotate-left-arrow": {
          "0%": {
            transform: "rotate(0)",
          },
          "25%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(90deg)",
            opacity: "1",
          },
          "100%": {
            opacity: "1",
            transform: "rotate(90deg)",
          },
        },

        // title card
        "tilt-card": {
          "0%": {
            opacity: "0",
            transform: "rotate(-30deg) translateY(100px)",
          },

          "40%": {
            opacity: "1",
            transform: "rotate(-23deg)",
          },

          "60%": {
            opacity: "1",
            transform: "rotate(-18deg)",
          },
          "70%": {
            opacity: "1",
            transform: "rotate(-10deg)",
          },

          "100%": {
            opacity: "1",
            transform: "rotate(-2deg)",
          },
        },
        "tilt-card-other": {
          "0%": {
            opacity: "1",
            transform: "rotate(-30deg) translateY(100px)",
          },
        },
        "remove-card": {
          "0%": {
            transform: "rotate(-18deg)",
          },

          "100%": {
            transform: "translateY(-200%)",
            opacity: "0",
            visibility: "hidden",
          },
        },
        "scroll-down-arrow-span": {
          "0%": {
            transform: "translateY(-6rem)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        "scroll-down-arrow": {
          "0%": {
            transform: "none",
          },
          "100%": {
            transform: "translateY(10px)",
          },
        },

        "reveal-text": {
          "0%": {
            opacity: "1",
            transform: "translateY(100%)",
            //  "animation-timing-function": "cubic-bezier(0.65, 0, 0.35, 1)",
          },

          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        "fade-started": {
          "0%": {
            opacity: "0",
            transform: "scale(0.3)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },

        "revolution-slide": {
          "0%": {
            transform: "translate(18%, 0px)",
          },

          "100%": {
            transform: "translateX(0px)",
          },
        },

        "technology-slide": {
          "0%": {
            transform: "translate(5vw, 0px)",
          },

          "100%": {
            transform: "translateX(0px)",
          },
        },
        "revolution-icon-fade": {
          "0%": {
            opacity: "0",
            transform: "scale(0.3)",
          },

          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },

        "revolution-text-fade": {
          "0%": {
            opacity: "0",
          },

          "100%": {
            opacity: "1",
          },
        },

        "reveal-brand-title": {
          "0%": {
            width: "100%",
          },
          "100%": {
            width: "0%",
          },
        },
      },
      animation: {
        "reveal-brand-title": "reveal-brand-title 0.6s 0.6s linear forwards",
        "dental-arrow-show": "dental-arrow-show 1000ms  0.2s ease-out forwards",
        "dental-fade": "dental-fade 1500ms ease forwards",
        // scaleTitle: "scaleTitle 1500ms ease-in-out forwards",
        "rotate-arrow": "rotate-arrow 1500ms ease forwards",
        "rotate-left-arrow": "rotate-left-arrow 1500ms ease forwards",
        moveIcon: "moveIcon 1500ms ease forwards",
        moveIconDense: "moveIconDense 1500ms 0.2s ease forwards",
        moveIconAssistance: "moveIconAssistance 1500ms 200ms ease forwards",
        slideLeft: "slideLeft 1500ms ease forwards",
        slideRight: "slideRight 500ms 800ms ease forwards",
        slideLogo: "slideLogo 1000ms 1000ms ease forwards",
        "brand-title": "brand-title 1500ms 1800ms ease forwards",
        slideLogot: "slideLogot 1000ms 1500ms ease forwards",
        "tilt-card": "tilt-card-other 1000ms ease forwards",
        "tilt-card-other":
          "tilt-card-other 1000ms  ease forwards, remove-cardy 1000ms calc((var(--index) * 2000ms) + 1000ms) ease-in-out forwards",
        "scroll-down-arrow":
          "scroll-down-arrow 1000ms linear infinite alternate",
        "scroll-down-arrow-span": "scroll-down-arrow-span 1000ms ease forwards",
        "reveal-text":
          "reveal-text 0.5s calc(var(--revealIndex) * 20ms) linear forwards ",
        "reveal-text-middle": "reveal-text 1s 0.5s  ease forwards",
        "reveal-text-last": "reveal-text 1s 1s  ease forwards",
        "fade-started": "fade-started 1s 40ms ease forwards",
        "revolution-slide": "revolution-slide 1s 1s linear forwards",
        "technology-slide": "technology-slide 1s 1s linear forwards",
        "revolution-icon-fade":
          "revolution-icon-fade 0.8s calc(var(--icon-fade) * 20ms + var(--animation-icon-delay, 1.2s)) linear forwards",

        "revolution-text-fade":
          "revolution-text-fade 0.8s calc(var(--text-fade-index) * 50ms + var(--animation-text-delay, 2s)) linear forwards",
      },
    },
  },
  plugins: [],
};
export default config;
