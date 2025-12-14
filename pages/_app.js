import Head from "next/head";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script src="https://sdk.minepi.com/pi-sdk.js"></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
