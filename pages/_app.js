import "../styles/globals.css";
import { AppProvider } from "../components/AppContext";

export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}
