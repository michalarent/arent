import clsx from "clsx";

export default function Card({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={clsx(
        "w-fit rounded-lg  overflow-hidden ring-[0.5px]  ring-neutral-700"
      )}
    >
      <div
        className={clsx(
          "rounded-lg relative w-full  p-4",
          className
          // "thirteen"
        )}
      >
        {children}
      </div>
    </div>
  );
}
