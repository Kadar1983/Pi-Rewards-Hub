import Head from "next/head";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  if (typeof window !== "undefined") {
    window.addEventListener("load", () => {
      if (window.Pi) {
        console.log("✅ Pi SDK محمّل بنجاح!");
      } else {
        console.error("❌ Pi SDK غير محمّل!");
        alert("❌ Pi SDK غير محمّل! افتح التطبيق من Pi Browser فقط.");
      }
    });
  }

  return (
    <>
      <Head>
        <script src="https://sdk.minepi.com/pi-sdk.js"></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
