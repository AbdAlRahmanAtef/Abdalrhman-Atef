import Head from "next/head";
import "../styles/main.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head><title>Abdalrhman Atef</title></Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
