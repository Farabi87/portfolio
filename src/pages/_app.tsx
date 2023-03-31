import { type AppType } from "next/dist/shared/lib/utils";

import "~/styles/globals.css";
import dynamic from "next/dynamic";

const NavBar = dynamic(() => import("../components/nav_bar"));
const Footer = dynamic(() => import("../components/footer"));
const NextNProgress = dynamic(() => import('nextjs-progressbar'));

const MyApp: AppType = ({ Component, pageProps }) => {
  return <>
    <NextNProgress
      height={5}
      color="rgb(156, 163, 175, 0.9)"
      options={{ showSpinner: false }}
    />
    <div className="flex justify-between flex-col h-screen">
      <div>
        <NavBar />
        <Component {...pageProps} />
      </div>
      <Footer />
    </div></>;
};

export default MyApp;
