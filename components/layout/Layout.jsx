import Footer from "components/footer/Footer";
import Navigation from "components/navigation/Navigation";
import Head from "next/head";

export default function Layout(props) {
  const theme = props.theme ?? { text: "text-white", bg: "bg-black" };
  return (
    <>
      {props.head ?? (
        <Head>
          <title>zoomoid.de</title>
          <meta name="description" content="" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
      )}
      <Navigation className={theme.text} background={theme.bg}></Navigation>
      <main className={"min-h-screen" + props.className}>{props.children}</main>
      <Footer></Footer>
    </>
  );
}
