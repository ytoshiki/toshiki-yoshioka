import "../styles/globals.scss";
import "../styles/components/Navbar.scss";
import "../styles/layouts/container.scss";
import "../styles/components/Mainvisual.scss";
import "../styles/components/Works.scss";
import "../styles/layouts/footer.scss";
import "../styles/layouts/main.scss";
import "../styles/components/WorksTop.scss";
import "../styles/components/WorksBlockSimple.scss";
import "../styles/components/WorksBlockSwiper.scss";
import "../styles/components/About.scss";
import Layout from "../components/Layout";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  console.log(router.route);
  return (
    <Layout>
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => {
          if (typeof window !== "undefined") {
            window.scrollTo({ top: 0 });
          }
        }}
      >
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
