import { SmoothScrollProvider } from "@/context/SmoothScroll.context";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div data-scroll-container id="scroll-container">
          <SmoothScrollProvider>
            <Main />
            <NextScript />
          </SmoothScrollProvider>
        </div>
      </body>
    </Html>
  );
}
