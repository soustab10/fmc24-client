import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./Layout";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      style={{
        backgroundImage: `url("/gradientbg.png")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        // backgroundPosition: "center center",
        minHeight: "100vh",
      }}
    >
      <Component {...pageProps} />
    </div>
  );
}
