import { motion } from "framer-motion";
import Scramble from "react-scramble";
import Scrambler from "../Scrambler";

type Props = {
  title: string;
  description: React.ReactNode;
  children?: React.ReactNode;
  delay?: number;
  titleDelay: number;
};
export default function Section({
  title,
  description,
  children,
  delay,
  titleDelay,
}: Props) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        viewport={{
          once: true,
        }}
        transition={{ delay: titleDelay / 1000, type: "just" }}
        className="font-hero uppercase text-3xl text-neutral-100"
      >
        {title}
      </motion.div>
      <motion.p
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{
          once: true,
        }}
        transition={{ delay: titleDelay / 1000, type: "just" }}
        className=" text-neutral-400 text-base 2xl:text-lg font-extralight mt-2 pr-12"
      >
        {description}
      </motion.p>
      <div>{children}</div>
    </div>
  );
}
