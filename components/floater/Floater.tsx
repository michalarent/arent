import clsx from "clsx";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import Draggable from "react-draggable";
import useIsClient from "../../hooks/useIsClient";

const ZIndexContext = React.createContext({
  z: "",
  setZ: (z: string) => {},
});

const useZIndex = () => React.useContext(ZIndexContext);

export default function Floater({ children }: { children: React.ReactNode }) {
  const [z, setZ] = React.useState("");

  // heap mechanism

  return (
    <ZIndexContext.Provider value={{ z, setZ }}>
      <div className="absolute overflow-hidden left-0 top-0 h-screen w-full">
        {children}
      </div>
    </ZIndexContext.Provider>
  );
}

export function FloatComponent({
  children,
  zIndex,
  id,
}: {
  children: React.ReactNode;
  zIndex?: number;
  id: string;
}) {
  const { z, setZ } = useZIndex();

  const [xy, setXY] = React.useState([0, 0]);
  const [isDragging, setIsDragging] = React.useState(false);

  const isClient = useIsClient();

  useEffect(() => {
    const screenSize = [window.innerWidth, window.innerHeight];
    setXY([
      (getRandomNumber(0, 80) / 100) * screenSize[0],
      (getRandomNumber(20, 50) / 100) * screenSize[1],
    ]);
  }, []);

  if (!isClient) return null;

  return (
    <Draggable
      onStart={() => {
        setIsDragging(true);
        setZ(id);
      }}
      onStop={() => {
        setIsDragging(false);
      }}
      defaultPosition={{
        x: xy[0],
        y: xy[1],
      }}
      grid={[1, 1]}
      defaultClassName={clsx("w-80 h-40 relative ")}
    >
      <motion.div
        key={id}
        animate={{
          zIndex: z === id ? 100 : zIndex,
        }}
        transition={{
          duration: 0.1,
        }}
        className=" p-0 w-min"
        onMouseEnter={() => setZ(id)}
        onMouseLeave={() => setZ("")}
        style={{
          visibility: !isClient ? "hidden" : "visible",
        }}
      >
        {children}
      </motion.div>
    </Draggable>
  );
}

function getRandomNumber(from: number, to: number) {
  return Math.random() * (to - from) + from;
}
