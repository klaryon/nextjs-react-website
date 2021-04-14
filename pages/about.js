import Head from "next/head";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <Head>
        <title>nextjs website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <h1>About</h1>
    </>
  );
}
