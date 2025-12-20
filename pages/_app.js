import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  // إذا لم يكن Pi Browser، أظهر رسالة
  if (typeof window !== "undefined" && !window.Pi) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-purple-700 to-blue-500 text-white font-bold text-xl text-center">
        Please open this app in Pi Browser to login.
      </div>
    );
  }

  return <Component {...pageProps} />;
}
