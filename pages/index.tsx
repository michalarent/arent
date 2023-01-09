import { Roboto } from "@next/font/google";
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Card from "../components/Card";
import BackgroundGrid from "../components/graphics/BackgroundGrid";
import Header from "../components/Header";
import Section from "../components/section/Section";
import CompletedProjects from "../components/skills/CompletedProjects";
import SkillPills from "../components/skills/SkillPills";

export default function Home() {
  return (
    <>
      <Head>
        <title>Michal Arent | Software Engineer</title>
        <meta
          name="description"
          content="Full-stack engineer with 3 years of commercial experience with
                  a strong foundation in technologies such as React, Next.js,
                  Ethers.js, Solidity, Typescript, and Node.js."
        />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <main className=" xl:grid grid-cols-2 p-8 xl:p-0">
        <div className="absolute pointer-events-none w-full invert h-full left-0 top-0">
          <BackgroundGrid />
        </div>
        <div className=" xl:h-screen xl:p-12 2xl:p-20 !pb-8 xl:sticky top-0">
          <Header />
        </div>
        <AnimatePresence mode="wait">
          <div className="mt-8 xl:pl-4 xl:pr-28 p-2 overflow-x-hidden xl:mt-[40px] 2xl:mt-[70px] pb-12">
            <Section
              title="About"
              titleDelay={400}
              delay={100}
              description={
                <>
                  Full-stack engineer with 3 years of commercial experience with
                  a strong foundation in technologies such as React, Next.js,
                  Ethers.js, Solidity, Typescript, and Node.js. I&apos;m
                  currently working on two projects in the Web3 space.
                </>
              }
            />
            <div className="mt-8 text-neutral-100 lg:grid grid-cols-2 gap-4 xl:block">
              <CompletedProjects />
              <motion.div
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{
                  once: true,
                }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="text-neutral-100 mt-12 "
              >
                <SkillPills />
              </motion.div>
            </div>
            <div className="mt-8">
              <Section
                title="Outside of Web3"
                titleDelay={400}
                delay={100}
                description={
                  <>
                    I continue to collaborate on various commercial and
                    non-profit projects as a freelancer.
                  </>
                }
              >
                <motion.div
                  className="mt-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{
                    once: true,
                  }}
                  transition={{ delay: 0.2 }}
                >
                  <Card className="relative text-neutral-100 h-full">
                    <Image
                      alt=""
                      fill
                      src="/garden.png"
                      className="absolute object-cover invert right-0 md:w-1/2 w-1/2  xl:w-1/3 bottom-0 z-0 opacity-20 hue-rotate-90"
                    />
                    <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t md:bg-gradient-to-r from-black "></div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-between">
                        <small className="text-neutral-400">
                          Non-profit — Designer, Frontend Engineer
                        </small>
                      </div>
                      <h3 className="text-3xl mt-1 font-hero xl:w-2/3">
                        Interactive virtual exhibition for the Supermarket
                        Museum project
                      </h3>
                      <p className="text-neutral-400 font-light text-lg mt-2 pr-12 xl:w-2/3">
                        Took part in the development of an interactive virtual
                        exhibition for the Supermarket Museum project. The
                        project was funded by the European Cultural Foundation.
                      </p>
                      <div className="mt-2 text-sm font-hero text-yellow-300">
                        <Link
                          className="pt-2"
                          target="_blank"
                          href="https://supermarketmuseum.agropermalab.org"
                        >
                          Visit the exhibition &rarr;
                        </Link>
                      </div>

                      <small className="text-neutral-400 mt-3 flex-wrap xl:w-2/3 text-sm uppercase flex items-center gap-x-4">
                        <small>CMS</small>
                        <small>GraphQL</small>
                        <small>Next.js</small>
                        <small>Node.js</small>
                      </small>
                    </div>
                  </Card>
                </motion.div>
              </Section>
            </div>
          </div>

          {/* <SkillGrid />
        <div className="fixed left-4 bottom-4 text-xs text-neutral-300">
          Copyright &copy; 2021 Michał Arent
        </div>
        <div className="fixed right-4 bottom-4 text-xs text-neutral-300">
          Work in progress due to lack of time
        </div> */}
        </AnimatePresence>
      </main>
    </>
  );
}
