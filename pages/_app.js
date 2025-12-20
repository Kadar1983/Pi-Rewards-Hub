import { useEffect, useState } from "react";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  const [piReady, setPiReady] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
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
    }
  }, []);

  if (!piReady) {
    return <div style={{ padding: 40, textAlign: "center", color: "#fff", background: "#000" }}>Loading Pi SDK...</div>;
  }

  return <Component {...pageProps} />;
}
