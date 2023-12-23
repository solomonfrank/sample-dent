import Container from "@/components/container";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineTouchApp } from "react-icons/md";
import { VscTools } from "react-icons/vsc";
import { PiScan } from "react-icons/pi";
import { RxDotFilled } from "react-icons/rx";
import { BsArrowDown } from "react-icons/bs";
import { SlSocialYoutube } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa6";
import { LiaFacebookSquare } from "react-icons/lia";

import { Card } from "@/components/ui";

import { AnimatedText } from "@/components/ui/AnimatedText";

const cards = [
  {
    id: 4,
    angle: 23,
    url: "/assets/5.webp",
    exitAngle: 26,
    title: "Personalized Care",
    icon: PiScan,
  },
  {
    id: 3,
    angle: 18,
    url: "/assets/4.webp",
    exitAngle: 21,
    title: "Modern Solution",
    icon: VscTools,
  },
  {
    id: 2,
    angle: 10,
    url: "/assets/3.webp",
    exitAngle: 13,
    title: "Convenience",
    icon: MdOutlineTouchApp,
  },
  {
    id: 1,
    angle: 2,
    url: "/assets/2.webp",
    exitAngle: 6,
    title: "Advanced Technology",
    icon: IoSettingsOutline,
  },
];
export const Hero = () => {
  return (
    <>
      <Container className=" pt-[10rem] justify-center items-center relative  h-screen overflow-hidden mb-10">
        <div
          className=" w-full flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2
         -translate-y-1/2 h-full"
        >
          {/* <h1 className="text-[10rem]  font-medium">OUR ADVANTAGES</h1> */}

          <AnimatedText
            inView={true}
            el="h2"
            text={["OUR ADVANTAGES"]}
            className="text-[12rem] inline-block overflow-hidden  leading-none "
          />

          <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center">
            {cards.map((item, index) => {
              return (
                <Card
                  key={item.id}
                  className={`-rotate-[${item.angle}deg] [grid-area:1/1] animate-tilt-card-other`}
                  src={item.url}
                  title={item.title}
                  index={`${item.id}`}
                  exitAngle={`${item.exitAngle}`}
                  angle={`${item.angle}`}
                  icon={item.icon}
                />
              );
            })}
          </div>
        </div>

        <div className="absolute bottom-[8rem] w-full flex ">
          <div className="mr-auto">
            <span>
              <RxDotFilled size={15} color="#ff5434" />
            </span>
            <p className="text-sm">Your Smile, Our Passion</p>
          </div>

          <div className="mr-[50px]">
            <div className="flex gap-3 mb-3">
              <span>
                <FaInstagram size={20} />
              </span>
              <span>
                <LiaFacebookSquare size={20} />
              </span>
              <SlSocialYoutube size={20} />
            </div>

            <p className="text-sm">Best Startup of 2003</p>
          </div>
        </div>
        <span
          className="absolute  left-1/2 -bottom-[2rem] h-[80px] w-[80px] rounded-full 
          border border-primary flex justify-center overflow-hidden
          animate-scroll-down-arrow-span
          "
        >
          <BsArrowDown
            color="#000"
            size={20}
            className="mt-2 animate-scroll-down-arrow"
          />
        </span>
      </Container>
    </>
  );
};
