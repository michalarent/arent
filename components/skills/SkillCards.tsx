import clsx from "clsx";
import { FaReact } from "react-icons/fa";
import Card from "../Card";

export function CardReact({ className }: { className?: string }) {
  return (
    <Card className={clsx(className, "  cursor-move   ")}>
      <div className="flex items-center gap-2">
        <FaReact className=" text-2xl mb-1 text-blue-400" />
        <h3 className="font-bold  text-2xl mb-1">React.js</h3>
      </div>
      <p className="text-neutral-400">
        3 years of commercial experience in React, including the latest updates
        containing server components and syntax changes.
      </p>
    </Card>
  );
}

export function CardNext({ className }: { className?: string }) {
  return (
    <Card className={clsx(className, " cursor-move  ")}>
      <div className="flex items-end mb-1    gap-2  justify-between">
        <h3 className="font-bold  text-2xl ">Next.js</h3>
      </div>
      <p className="text-neutral-400">
        3 years of commercial experience in React, including the latest updates
        containing server components and syntax changes.
      </p>
    </Card>
  );
}

export function CardEthers({ className }: { className?: string }) {
  return (
    <Card className={clsx(className, " cursor-move  ")}>
      <div className="flex items-end mb-1    gap-2  justify-between">
        <h3 className="font-bold  text-2xl ">Ethers.js</h3>
      </div>
      <p className="text-neutral-400">
        3 years of commercial experience in React, including the latest updates
        containing server components and syntax changes.
      </p>
    </Card>
  );
}

export function CardTypescript({ className }: { className?: string }) {
  return (
    <Card className={clsx(className, " cursor-move  ")}>
      <div className="flex items-end mb-1    gap-2  justify-between">
        <h3 className="font-bold  text-2xl ">Typescript</h3>
      </div>
      <p className="text-neutral-400">
        3 years of commercial experience in React, including the latest updates
        containing server components and syntax changes.
      </p>
    </Card>
  );
}

export function CardSolidity({ className }: { className?: string }) {
  return (
    <Card className={clsx(className, " cursor-move  ")}>
      <div className="flex items-end mb-1    gap-2  justify-between">
        <h3 className="font-bold  text-2xl ">Solidity</h3>
      </div>
      <p className="text-neutral-400">
        3 years of commercial experience in React, including the latest updates
        containing server components and syntax changes.
      </p>
    </Card>
  );
}
