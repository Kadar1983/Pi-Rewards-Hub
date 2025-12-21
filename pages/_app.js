import "../styles/globals.css";
import { AppProvider } from "../components/AppContext";

export default function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}
