import "../styles/globals.css";
import { AppProvider } from "../components/AppContext";
import Navbar from "../components/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <Navbar />
      <Component {...pageProps} />
    </AppProvider>
  );
}
