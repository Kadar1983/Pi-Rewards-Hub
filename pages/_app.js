import "../styles/globals.css";
import { useEffect, useState } from "react";

export default function MyApp({ Component, pageProps }) {
  const [piReady, setPiReady] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!window.Pi) {
        const script = document.createElement("script");
        script.src = "https://sdk.minepi.com/pi-sdk.js"; // رابط SDK الرسمي
        script.async = true;
        script.onload = () => {
          window.Pi.init({ version: "2.0", sandbox: true });
          setPiReady(true);
        };
        document.body.appendChild(script);
      } else {
        setPiReady(true);
      }
    }
  }, []);

  if (!piReady) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-purple-700 to-blue-500 text-white font-bold text-center p-4">
        ⚠️ Please open this app in <strong>Pi Browser</strong> and wait for SDK to load...
      </div>
    );
  }

  return <Component {...pageProps} />;
}
