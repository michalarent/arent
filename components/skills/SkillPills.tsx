import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Scramble from "react-scramble";
import Card from "../Card";
import Scrambler from "../Scrambler";
import Section from "../section/Section";

export default function SkillPills() {
  const [shouldStart, setShouldStart] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShouldStart(true);
    }, 1000);
  }, []);

  // text = "Frameworks, libraries and tools that I use at work:";
  return (
    <Section
      title="Frameworks, libraries and tools "
      titleDelay={600}
      description={`I'm most familiar with Typescript + Next.js/React, although I'm currently exploring CommonJs and Rust-based web frameworks, such as Leptos.`}
    >
      <div className="grid grid-cols-4 items-center">
        <div className="col-span-1 font-hero text-xl py-8 border-neutral-300">
          <Scrambler text="Frontend" delay={1000} />
        </div>
        <div className="col-span-3 p-8 flex items-center gap-3 flex-wrap">
          {[
            "React",
            "Next.js",
            "CommonJs",
            "Three.js",
            "Vue",
            "WASM",
            "RxJs",
            "Redux",
            "Jotai",
            "Express.js",
          ].map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card key={skill} className="w-min !px-3 py-1.5">
                {skill}
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="col-span-1 font-hero text-xl py-8 pt-0 border-neutral-300">
          <Scrambler text="Design" delay={1000} />
        </div>
        <div className="col-span-3 p-8 pt-0 flex items-center gap-3 flex-wrap">
          {["Blender", "Illustrator", "Photoshop", "Figma", "XD"].map(
            (skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card key={skill} className="w-min !px-3 py-1.5">
                  {skill}
                </Card>
              </motion.div>
            )
          )}
        </div>

        <div className="col-span-1 font-hero text-xl p-8 pt-0 pl-0 border-neutral-300">
          <Scrambler text="Web3" delay={1000} />
        </div>
        <div className="col-span-3 p-8 pt-0 flex items-center gap-3 flex-wrap">
          {[
            "Ethers.js",
            "Hardhat",
            "Truffle",
            "Solidity",
            "Typechain",
            "Chainlink SDK",
          ].map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card key={skill} className="w-fit !px-3 !shrink-0 py-1.5">
                {skill}
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="col-span-1 font-hero text-xl p-8 pt-0 pl-0 border-neutral-300">
          <Scrambler text="Other/Backend" delay={1000} />
        </div>
        <div className="col-span-3 p-8 pt-0 flex items-center gap-3 flex-wrap">
          {[
            "Terraform",
            "AWS",
            "GCP",
            "Docker",
            "Vercel",
            "PostgreSQL",
            "Prisma",
            "Supabase",
          ].map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card key={skill} className="w-fit !px-3 !shrink-0 py-1.5">
                {skill}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
