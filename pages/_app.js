import "../styles/globals.css";
import { AppProvider } from "../components/AppContext";
import Navbar from "../components/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <div style={{ paddingBottom: 70, maxWidth: 400, margin: "0 auto" }}>
        <Component {...pageProps} />
      </div>
      <Navbar />
    </AppProvider>
  );
}
