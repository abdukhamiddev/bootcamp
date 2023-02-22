import Nav from "@/components";
import "@/styles/globals.scss";

import { Poppins } from "@next/font/google";
import { ThemeProvider } from "next-themes";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <div id="__sticky" className={`${poppins.variable} font-sans`}>
        <Nav />
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </ThemeProvider>
  );
}
