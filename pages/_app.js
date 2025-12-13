import { useEffect } from "react";
import "@/styles/globals.css";
import { initPi } from "@/lib/pi";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    initPi();
  }, []);

  return <Component {...pageProps} />;

}
