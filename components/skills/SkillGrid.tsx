import { AnimatePresence, motion } from "framer-motion";
import Card from "../Card";
import CompletedProjects from "./CompletedProjects";
import SkillPills from "./SkillPills";

export default function SkillGrid() {
  return (
    <div className="mt-20 max-w-[1000px] mx-auto w-full pb-20 text-neutral-100 grid gap-8 grid-cols-2">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
        >
          <SkillPills />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
        >
          <CompletedProjects />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
