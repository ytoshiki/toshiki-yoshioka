import { motion } from "framer-motion";
import Head from "next/head";
import WorksBlockSimple from "../components/WorksBlockSimple";
import WorksBlockSwiper from "../components/WorksBlockSwiper";
import WorksTop from "../components/WorksTop";
import WorksTopImage from "../components/WorksTopImage";

const topText = (
  <>
    <b>英語学習者へ向けて作られた英単語学習ツール</b>
    <br />
    単語の検索・保存、クイズができ、英単語学習に役立たせることができます。
    <br />
    <br />
    英語学習を続けている中で自分だけの英単語帳が合ったら便利だなと思い立ち、
    <br />
    ・英語で意味を理解する
    <br />
    ・画像検索もできる
    <br />
    ・単語を保存してクイズが行える
    <br />
    英英辞書＋英単語帳のようなツールを作成しました。
    <br />
    <br />
    <br />
    <br />
    <a href="https://wordbook-d.netlify.app/" target="_blank">
      <span>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" />
      </span>
      サイトを見る
    </a>
    <a href="https://github.com/ytoshiki/pf__wordbook_client" target="_blank">
      <span>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
      </span>
      コードを見る(フロントエンド)
    </a>
    <a href="https://github.com/ytoshiki/pf__wordbook_server" target="_blank">
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
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
      </div>
      <div className="c-works-block-simple__links">
        <a href="https://wordbook-d.netlify.app/" target="_blank">
          <span>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" />
          </span>
          サイトを見る
        </a>
        <a
          href="https://github.com/ytoshiki/pf__wordbook_client"
          target="_blank"
        >
          <span>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
          </span>
          コードを見る(フロントエンド)
        </a>
        <a
          href="https://github.com/ytoshiki/pf__wordbook_server"
          target="_blank"
        >
          <span>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
          </span>
          コードを見る(バックエンド)
        </a>
      </div>
    </div>
  </>
);

export default function WordbookD() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <Head>
        <title>WordBook D | Toshiki Yoshioka</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <WorksTop title="WordBook D" text={topText} />
        <WorksTopImage bg="img-work-top-03.png" />
        <div className="l-container">
          <WorksBlockSwiper
            title="How To Use"
            images={[
              "img-wordbook-01.png",
              "img-wordbook-02.png",
              "img-wordbook-03.png",
              "img-wordbook-04.png",
              "img-wordbook-05.png",
              "img-wordbook-06.png",
            ]}
            texts={[
              "検索フォームから英単語を入力し、意味・画像を検索できます。",
              "ヒットした英単語が表示されます。",
              "サインインすることで、自分の英単語帳が作成できるようになります。単語・例文・メモが登録できます。",
              "画面左側の「Word list」では登録した英単語帳、「Quiz」からは登録した英単語からクイズが行えます。",
              "「Quiz」では登録した例文から英単語の穴埋めを行うことで理解度を高めることができます。",
              "「Word list」から作成した英単語帳が確認できます。覚えた単語は削除することも可能です。",
            ]}
          />
          <WorksBlockSimple title="Technology Stack" text={technologyText} />
        </div>
      </div>
    </motion.div>
  );
}
