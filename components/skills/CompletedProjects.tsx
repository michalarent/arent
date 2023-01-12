import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Scramble from "react-scramble";
import Card from "../Card";
import Section from "../section/Section";

export default function CompletedProjects() {
  const [shouldStart, setShouldStart] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShouldStart(true);
    }, 1200);
  }, []);

  return (
    <Section
      title="Current Web3 Projects"
      description={`One of my proudest achievements is being a core member of the team that developed a successful DEX-aggregator and charting platform. To date, this platform has been used over 1.4 million times, which is a testament to the hard work and dedication of our team.`}
      delay={500}
      titleDelay={600}
    >
      <div className="flex flex-col-reverse items-center gap-4 mt-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Card className="relative h-full">
            <video
              src="/silh.mp4"
              autoPlay
              muted
              className="absolute right-0 md:w-1/2 w-1/2  xl:w-1/3 bottom-0 z-0 opacity-30 hue-rotate-90"
              loop
            />
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <small className="text-neutral-400">
                  Startup Project — Co-founder, Software Engineer
                </small>
              </div>
              <h3 className="text-3xl mt-1 font-hero xl:w-2/3">
                Real-time GMX & Binance Futures Browser and Copy-trading Tool
              </h3>
              <p className="text-neutral-400 font-light text-lg mt-2 pr-12 xl:w-2/3">
                A members-only browser for the GMX platform. Used GraphQL to
                fetch trades from TheGraph and present the data in a filterable
                format. The tool allows users to copy trades from{" "}
                <i>anonymous</i> traders on either GMX or Binance.
              </p>

              <small className="text-neutral-400 mt-3 flex-wrap xl:w-2/3 text-sm uppercase flex items-center gap-x-4">
                <small>urql</small>
                <small>Next.js</small>
                <small>TRPC</small>
                <small>Node.js</small>
                <small>Ethers.js</small>
                <small>GCP</small>
              </small>
            </div>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Card className="relative thirteen h-full">
            <video
              src="/chart.mp4"
              autoPlay
              muted
              className="absolute blur-sm object-contain left-0 md:-top-20 top-0 z-0 opacity-30 hue-rotate-[0deg]"
              loop
            />
            <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t md:bg-gradient-to-r from-black md:via-black"></div>
            <div className="relative z-10">
              <small className="text-neutral-400">
                Commercial (NDA) — Senior Frontend Engineer
              </small>
              <h3 className="text-3xl xl:w-2/3 mt-1 font-hero">
                ERC20 Token Charts & DEX Aggregator
              </h3>
              <p className="text-neutral-400 font-light text-lg mt-2 pr-12 xl:w-2/3">
                A web-based platform featuring a proprietary candlestick chart
                API, dedicated Node.js/Rust DEX aggregation engine and a sleek
                user interface.
                <br />
                <strong className="mt-2 inline-block text-yellow-300 font-hero text-sm">
                  As of Dec, 31st 2022, the platform attracted more than 1.5M
                  users.
                </strong>
              </p>
              <small className="text-neutral-400 mt-3 text-sm xl:w-2/3 flex-wrap uppercase flex items-center gap-x-4">
                <small>Next.js</small>
                <small>Trading View</small>
                <small>Node.js</small>
                <small>Rust</small>
                <small>Ethers.js</small>
                <small>Tailwind</small>
                <small>Alchemy</small>
                <small>Prisma</small>
                <small>AWS</small>
                <small>Solidity</small>
                <small>Redux</small>
              </small>
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
