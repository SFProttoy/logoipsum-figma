import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main/Main";
import Head from "next/head";

const Home = () => {
  <Head>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    ></meta>
  </Head>;
  return (
    <>
      <Header />
      <Banner />
      <Main />
      <Footer />
    </>
  );
};

export default Home;
