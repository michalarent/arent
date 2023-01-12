import { TypeAnimation } from "react-type-animation";
import FadeIn from "./animation/FadeIn";

export default function Hero() {
  return (
    <div className="h-auto md:h-[180px] xl:h-[260px] font-hero 2xl:h-[270px] text-neutral-200 text-left">
      <TypeAnimation
        sequence={[
          "MICHAL ARENT", // Types 'One'
        ]}
        defaultValue="M"
        wrapper="div"
        cursor={false}
        className=" text-5xl h-[48px] sm:h-auto 2xl:text-7xl"
      />
      <TypeAnimation
        sequence={[
          "Software Engineer", // Types 'One'
        ]}
        defaultValue="S"
        cursor={true}
        wrapper="div"
        speed={70}
        className="text-3xl h-[32px] sm:h-auto 2xl:text-5xl uppercase text-indigo-500"
      />
      <div className="hidden md:block lg:w-2/3 2xl:w-1/2 mt-4 xl:mt-2">
        <TypeAnimation
          sequence={["Warsaw-based software engineer and Web3 developer. "]}
          cursor={false}
          speed={99}
          wrapper="span"
          className="text-lg uppercase text-left font-light"
        />
        <TypeAnimation
          sequence={["Passionate about web development, web3 and blockchain."]}
          cursor={false}
          speed={75}
          wrapper="span"
          dir="rtl"
          className="ml-1 text-lg  uppercase font-light text-right"
        />
      </div>
      <FadeIn>
        <div className="block md:hidden lg:w-2/3 2xl:w-1/2 mt-4 xl:mt-2 text-base md:text-lg uppercase text-left font-light">
          Warsaw-based software engineer and Web3 developer. Passionate about
          web development, web3 and blockchain.
        </div>
      </FadeIn>
    </div>
  );
}
