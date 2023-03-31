import { type NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const LearnedAbout = dynamic(() => import("../components/learned_about"));
const Button = dynamic(() => import("../components/button"));
const Hero = dynamic(() => import("../components/hero"));


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Farabi Ahnaf Akib - Portfolio</title>
        <meta name="description" content="Portfolio - Home page" />
      </Head>
      <main>
        <Hero />

        <hr
          className="mt-12 mb-8 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

        <div className="flex justify-center space-x-2">
          <Button text="✈️ Contract" link="mailto:farabiahnaf66@gamail.com" />
          <Button openBlank text="😐 Resume" link="/resume.pdf" />
        </div>

        <LearnedAbout />
      </main>
    </>
  );
};

export default Home;
