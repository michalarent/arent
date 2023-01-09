import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <div className="h-[200px] xl:h-[260px] font-hero 2xl:h-[270px] text-neutral-200 text-left">
      <TypeAnimation
        sequence={[
          "MICHAL ARENT", // Types 'One'
        ]}
        wrapper="div"
        cursor={false}
        className=" text-6xl 2xl:text-7xl"
      />
      <TypeAnimation
        sequence={[
          "Software Engineer", // Types 'One'
        ]}
        cursor={true}
        wrapper="div"
        speed={70}
        className="text-3xl 2xl:text-5xl uppercase text-indigo-500"
      />
      <div className="lg:w-2/3 2xl:w-1/2 mt-4 xl:mt-2">
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
    </div>
  );
}
