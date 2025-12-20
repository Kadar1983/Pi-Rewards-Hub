import { useEffect, useState } from "react";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  const [piReady, setPiReady] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!window.Pi) {
        const script = document.createElement("script");
        script.src = "https://sdk.minepi.com/pi-sdk.js";
        script.async = true;
        script.onload = () => {
          if (window.Pi) {
            window.Pi.init({ version: "2.0", sandbox: true });
            setPiReady(true);
          }
        };
        document.body.appendChild(script);
      } else {
        setPiReady(true);
      }
    }
  }, []);

  if (!piReady) {
    return <div className="flex items-center justify-center h-screen bg-black text-white">Loading Pi SDK...</div>;
  }

  return <Component {...pageProps} />;
}
