import Head from "next/head";
import { App } from "./App";

export default function Home() {
  return (
    <main className="d-flex flex-column min-vh-100">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Mayoral assignment master" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div><App/></div>  
    </main>
  );
}
