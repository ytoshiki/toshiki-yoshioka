import Link from "next/link";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const easing = [0.5, 1, 0.89, 1];
const animationConfiguration = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.1,
      ease: easing,
    },
  },
  exit: { opacity: 0 },
};

const Works = () => {
  return (
    <section>
      <motion.div className="c-works" variants={animationConfiguration}>
        <div className="c-works__content">
          <div className="c-works__row">
            <div className="c-works__block">
              <Link scroll={false} href="/kanji-learning">
                <a className="c-works__image">
                  <div className="c-works__image-inner">
                    <div
                      className="is-bg"
                      style={{
                        backgroundImage: "url('/img-work-01.png')",
                      }}
                    />
                  </div>
                </a>
              </Link>

              <div className="c-works__texts">
                <h2 className="c-works__title">
                  <span>Kanji Learning - </span>漢字学習ツール
                </h2>
                <p className="c-works__text">
                  日本語学習者へ向けて作られた漢字学習ツール
                  <br />
                  漢字の検索・保存、レベル別学習が行えます。
                </p>
                {/* <div className="c-works__link">
                  <Link scroll={false} href="/">
                    <a>View Preview</a>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
          <div className="c-works__row is-flex">
            <div className="c-works__block">
              <Link scroll={false} href="/the-connect">
                <a className="c-works__image">
                  <div className="c-works__image-inner">
                    <div
                      className="is-bg"
                      style={{
                        backgroundImage: "url('/img-work-02.png')",
                      }}
                    />
                  </div>
                </a>
              </Link>

              <div className="c-works__texts">
                <h2 className="c-works__title">
                  <span>The Connect - </span>ニュース検索ツール
                </h2>
                <p className="c-works__text">
                  カテゴリー、言語、キーワードから世界のニュースを検索できるツール
                  <br />
                  Fox News・BBCを含む世界各国のニュース記事を閲覧できます。
                </p>
                {/* <div className="c-works__link">
                  <Link scroll={false} href="/">View Preview</Link>
                </div> */}
              </div>
            </div>
            <div className="c-works__block">
              <Link scroll={false} href="/wordbook-d">
                <a className="c-works__image">
                  <div className="c-works__image-inner">
                    <div
                      className="is-bg"
                      style={{
                        backgroundImage: "url('/img-work-03.png')",
                      }}
                    />
                  </div>
                </a>
              </Link>

              <div className="c-works__texts">
                <h2 className="c-works__title">
                  <span>WorkBook D - </span>英単語学習ツール
                </h2>
                <p className="c-works__text">
                  英語学習者へ向けて作られた英単語学習ツール
                  <br />
                  単語の検索に加え、英単語帳を作成しクイズをすることができます。
                </p>
                {/* <div className="c-works__link">
                  <Link scroll={false} href="/">View Preview</Link>
                </div> */}
              </div>
            </div>
          </div>
          <div className="c-works__row is-flex">
            <div className="c-works__block">
              <Link scroll={false} href="/w">
                <a className="c-works__image">
                  <div className="c-works__image-inner">
                    <div
                      className="is-bg"
                      style={{
                        backgroundImage: "url('/img-work-04.png')",
                      }}
                    />
                  </div>
                </a>
              </Link>

              <div className="c-works__texts">
                <h2 className="c-works__title">
                  <span>W - </span>ECサイト
                </h2>
                <p className="c-works__text">
                  カテゴリー・製品などの管理が行える仮想のECサイト
                </p>
                {/* <div className="c-works__link">
                  <Link scroll={false} href="/">
                    <a>View Preview</a>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Works;
