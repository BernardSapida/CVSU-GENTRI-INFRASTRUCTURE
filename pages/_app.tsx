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
          content="General Trias, a city in Cavite, Philippines, is a progressive town where numerous government structures fulfill important community duties. These structures include executive offices, public service buildings, medical facilities, educational institutions, and others. For an assessment of the integrity, operation, and compliance of these buildings with set norms and regulations, it is important to conduct infrastructure audits. An infrastructure audit in the city of General Trias, Cavite, is an important procedure that evaluates the condition, safety, and efficiency of public facilities. We can identify defects that reflect the building's vulnerability to hazards like earthquakes, typhoons, floods, landslides, etc. by conducting site inspections and evaluating available documents. An infrastructure audit is a critical procedure that identifies the current condition of the building and its vulnerability to hazards."
        />
        <meta
          name="keywords"
          content="Infrastructures audit, cvsu general trias city campus"
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
