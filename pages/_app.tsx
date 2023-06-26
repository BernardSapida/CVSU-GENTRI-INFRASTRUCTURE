import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import Head from "next/head";

import Container from "react-bootstrap/Container";

import TopNavigation from "@/components/global/TopNavigation";
import Navigation from "@/components/global/Navigation";
import Footer from "@/components/global/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

import "@/public/css/navigation.css";
import "@/public/css/landing.css";
import "@/public/css/topnavigation.css";
import "@/public/css/mission_vision.css";
import "@/public/css/quality_focus.css";
import "@/public/css/about_cvsu.css";
import "@/public/css/infrastructures.css";
import "@/public/css/footer.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/logo/cvsu_logo.png" />
        <title>Cavite State University - General Trias City Campus</title>
        <meta
          name="description"
          content="Indulge in the heavenly delight of freshly baked donuts at Sweet Rounds. Our wide range of flavors and handcrafted treats are sure to satisfy your sweet cravings. Visit us today and experience the joy of the perfect round."
        />
        <meta
          name="keywords"
          content="donuts, sweet rounds, bakery, desserts, treats"
        />
        <meta
          name="author"
          content="Bernard Sapida, Shania Gwyneth Nuga, Ralph Howard Azarcon, Christian Arby Camama"
        />
        <meta
          property="og:title"
          content="Cavite State University - General Trias City Campus"
        />
        <meta
          property="og:url"
          content="https://cvsu-gentri-infrastructure.vercel.app/"
        />
        <meta
          property="og:image"
          content="https://th.bing.com/th/id/OIP.deauE7kIHBwozZ4ffLbyXQHaFy?pid=ImgDet&rs=1"
        />
      </Head>
      <NextNProgress
        color="hsl(130, 100%, 78%)"
        options={{ showSpinner: false }}
      />
      <TopNavigation />
      <Navigation />
      <main>
        <Container className="my-5" style={{ marginTop: 50 }}>
          <Component {...pageProps} />
        </Container>
      </main>
      <Footer />
    </>
  );
}
