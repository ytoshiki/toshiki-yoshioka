import { motion } from "framer-motion";
import Head from "next/head";
import WorksBlockSimple from "../components/WorksBlockSimple";
import WorksBlockSwiper from "../components/WorksBlockSwiper";
import WorksTop from "../components/WorksTop";
import WorksTopImage from "../components/WorksTopImage";

const topText = (
  <>
    <b>日本語学習者へ向けて作られた漢字学習ツール</b>
    <br />
    漢字の検索・保存、レベル別学習ができ、効果的に漢字の学習が行えます。
    <br />
    <br />
    Graphqlを使った開発を勉強する経緯で作成に至りました。
    <br />
    第二言語を学習している身として、「単語帳のように保存ができるツールがあると便利だな」
    <br />
    と思い、漢字学習ツールを作成しました。
    <br />
    <br />
    <br />
    <a href="https://kanji-app.vercel.app/" target="_blank">
      <span>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" />
      </span>
      サイトを見る
    </a>
    <a href="https://github.com/ytoshiki/kanji-app" target="_blank">
      <span>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
      </span>
      コードを見る(フロントエンド)
    </a>
    <a href="https://github.com/ytoshiki/kanji-app-server" target="_blank">
      <span>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
      </span>
      コードを見る(バックエンド)
    </a>
  </>
);

const technologyText = (
  <>
    <div className="c-works-block-simple__row">
      <div>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg" />

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
      </div>
      <div className="c-works-block-simple__links">
        <a href="https://kanji-app.vercel.app/" target="_blank">
          <span>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" />
          </span>
          サイトを見る
        </a>
        <a href="https://github.com/ytoshiki/kanji-app" target="_blank">
          <span>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
          </span>
          コードを見る(フロントエンド)
        </a>
        <a href="https://github.com/ytoshiki/kanji-app-server" target="_blank">
          <span>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
          </span>
          コードを見る(バックエンド)
        </a>
      </div>
    </div>
  </>
);

export default function KanjiLearning() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <Head>
        <title>Kanji Learning | Toshiki Yoshioka</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <WorksTop title="Kanji Learning" text={topText} />
        <WorksTopImage bg="img-work-01.png" />
        <div className="l-container">
          <WorksBlockSwiper
            title="How To Use"
            images={[
              "img-kanji-learning-01.png",
              "img-kanji-learning-02.png",
              "img-kanji-learning-03.png",
              "img-kanji-learning-04.png",
              "img-kanji-learning-05.png",
              "img-kanji-learning-06.png",
            ]}
            texts={[
              "検索フォームから漢字・音読み・訓読み・英語の意味などを入力し、漢字の検索ができます。",
              "検索フォームからヒットした漢字が表示されます。クリックすることで、詳細を見ることができます。",
              "漢字の意味、書き順、例文が確認できます。また、「Add」ボタンから保存することができます。",
              "保存した漢字は「My List」ページから確認することができます。また、日付・理解度から並び替えすることができます。",
              "「Learn」ページではレベルごとに漢字の検索ができます。",
              "レベルごとに漢字の一覧が表示されます。",
            ]}
          />
          <WorksBlockSimple title="Technology Stack" text={technologyText} />
        </div>
      </div>
    </motion.div>
  );
}
