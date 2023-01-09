import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaGithubSquare,
  FaLinkedin,
  FaEnvelopeSquare,
  FaGithub,
  FaEnvelope,
  FaExternalLinkAlt,
} from "react-icons/fa";
import Scramble from "react-scramble";
import FadeIn from "./animation/FadeIn";
import Card from "./Card";
import BackgroundGrid from "./graphics/BackgroundGrid";
import Hero from "./Hero";
import Scrambler from "./Scrambler";

export default function Header() {
  return (
    <div className="w-full h-full flex lg:flex-row xl:flex-col flex-col sticky">
      <motion.img
        className="absolute h-[600px] w-[420px] object-contain brightness-70 hue-rotate-[160deg] pointer-events-none"
        src="/blur-indigo.png"
        height={600}
        width={420}
        initial={{
          opacity: 0,
        }}
        animate={{
          y: [0, 10, -200, 0, -150, 0],
          x: [0, 30, -150, 0, 150, 0],
          opacity: [0.6, 0.8, 0.5, 0.6],
          filter: ["saturation(0)", "saturation(1)"],
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.img
        className="absolute h-[600px] w-[420px] object-contain brightness-50 hue-rotate-[260deg] pointer-events-none"
        src="/blur-indigo.png"
        initial={{
          opacity: 0,
        }}
        height={600}
        width={420}
        animate={{
          x: [50, 110, -200, 0, -150, 50],
          y: [50, 130, -150, 0, 150, 50],
          opacity: [0.3, 0.6, 0.5, 0.3],
          filter: ["saturation(0)", "saturation(1)"],
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <Hero />
      <FadeIn>
        <div className="flex flex-col sm:flex-row lg:flex-col  gap-4 text-neutral-200 xl:w-[240px] text-lg md:mt-0 mt-4">
          <Link href="https://github.com/michalarent" target="_blank">
            <Card className="flex items-center gap-4 px-6 font-mono w-[240px] bg-black/50 text-lg hover:bg-neutral-900/70">
              <FaGithub className="w-5 h-5 " /> <Scrambler text="Github" />
              <FaExternalLinkAlt className="w-3 h-3" />
            </Card>
          </Link>
          <Link href="https://linkedin.com/arentmichael" target="_blank">
            <Card className="flex font-mono items-center gap-4 px-6 w-[240px]  text-lg hover:bg-neutral-900/70">
              <FaLinkedin className="w-5 h-5 " /> <Scrambler text="Linkedin" />
              <FaExternalLinkAlt className="w-3 h-3" />
            </Card>
          </Link>
          <Link href="mailto:arent.michal@gmail.com" target="_blank">
            <Card className="flex items-center gap-4 px-6 w-[240px] font-mono text-lg hover:bg-neutral-900/70">
              <FaEnvelope className="w-5 h-5 " /> <Scrambler text="Email" />
            </Card>
          </Link>
        </div>
      </FadeIn>
      <div className="xl:block hidden font-mono xl:mt-auto text-neutral-400 text-xs">
        &copy; <Scrambler text={`2023 Michał Arent`} />
      </div>
    </div>
  );
}
