import { useEffect, useState } from "react";
import Scramble from "react-scramble";

export default function Scrambler({
  text,
  delay,
}: {
  text: string;
  delay?: number;
}) {
  const [shouldStart, setShouldStart] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShouldStart(true);
    }, delay || 0);

    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <Scramble
      steps={[
        {
          action: "+",
          roll: 10,
          type: "all",
        },
        {
          action: "-",
          roll: 10,
          type: "all",
        },
      ]}
      mouseEnterTrigger={"restart"}
      text={text}
      speed="fast"
      autoStart={shouldStart}
    ></Scramble>
  );
}
