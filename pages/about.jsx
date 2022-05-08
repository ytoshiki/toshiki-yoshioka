import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import AboutImage from "../components/AboutImage";

const easing = [0.5, 1, 0.89, 1];

const About = () => {
  return (
    <motion.div exit={{ opacity: 0 }} animate="animate" initial="initial">
      <Head>
        <title>About | Toshiki Yoshioka</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="l-container">
        <div className="c-about">
          <div className="c-about__inner">
            <div className="c-about__texts">
              <motion.p
                className="c-about__text"
                initial={{ y: 0, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.6,
                    ease: easing,
                    delay: 0.4,
                  },
                }}
              >
                名古屋生まれ名古屋育ちのエンジニア。高校、大学と英語を専攻し、二度の語学留学を経験。英語学習と趣味の一環で始めたコーディングだったが、「WEB上で物を作る楽しさ」「勉強を続けると成長が感じられる充実感」などの魅力に気づき、WEB制作会社へ入社。
                これまで１０社以上のコーポレートサイトやサービスサイトの制作に携わる。
                フロント部分の開発を行い、JavaScript/Pug/Sass/PHPの開発経験を積む。
                WEBアプリ開発への興味もあり個人学習を続けて今に至る。
              </motion.p>
            </div>
            <motion.div
              className="c-about__icon"
              initial={{ x: -15, opacity: 1 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.4,
                  ease: easing,
                  delay: 0.1,
                },
              }}
            >
              <Image
                src="/icon-about.svg"
                width={240}
                height={240}
                alt="My avatar"
              />
            </motion.div>
            {/* <div className="c-about__images">
              <AboutImage bg="img-about-01.png" />
              <AboutImage bg="img-about-02.png" />
              <AboutImage bg="img-about-03.png" />
              <AboutImage bg="img-about-04.png" />
              <AboutImage bg="img-about-05.png" />
              <AboutImage bg="img-about-06.png" />
              <AboutImage bg="img-about-07.png" />
              <AboutImage bg="img-about-08.png" />
              <AboutImage bg="img-about-09.png" />
            </div> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
