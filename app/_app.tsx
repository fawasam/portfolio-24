import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import React from "react";

const App = ({ Component, pageProps, router }) => {
  return (
    <div className="main">
      <div className="header">
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}></Link>
      </div>

      <AnimatePresence mode="wait">
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </div>
  );
};

export default App;
