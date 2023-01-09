import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "@next/font/google";
import localFont from "@next/font/local";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "500",
  variable: "--roboto-font",
});

const metro = localFont({
  src: [{ path: "../public/fonts/main/content.otf" }],
});

const fk = localFont({
  src: [{ path: "../public/fonts/main/display.ttf" }],
});

const mono = localFont({
  src: [{ path: "../public/fonts/mono/rel12.otf" }],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --roboto-font: ${metro.style.fontFamily};
            --fk-font: ${fk.style.fontFamily};
            --mono-font: ${mono.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}
