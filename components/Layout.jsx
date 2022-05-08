import Footer from "./Footer";
import Head from "next/head";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="l-main">{children}</main>
      <Footer />
    </>
  );
}
