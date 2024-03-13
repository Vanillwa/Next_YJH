import Header from "@/components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/global.css";
import { ThemeProvider } from "@/lib/ThemeContext";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>예이~</title>
        <link href='/favicon.png'></link>
      </Head>
      <ThemeProvider>
        <Header></Header>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
