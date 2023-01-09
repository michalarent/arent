export default function BackgroundGrid() {
  return (
    <div className="absolute pointer-events-none inset-0 bg-[url(/grid.svg)] bg-center [mask-image:linear-gradient(-180deg,white,rgba(255,255,255,0))]" />
  );
}
