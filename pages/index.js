import { motion } from "framer-motion";
import Head from "next/head";
import Mainvisual from "../components/Mainvisual";
import Works from "../components/Works";

export default function Home() {
  return (
    <motion.div exit={{ opacity: 0 }} animate="animate" initial="initial">
      <Head>
        <title>Toshiki Yoshioka</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="l-container">
        <Mainvisual />
        <Works />
      </div>
    </motion.div>
  );
}
