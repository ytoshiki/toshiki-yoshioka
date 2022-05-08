import { motion } from "framer-motion";
import Head from "next/head";
import WorksBlockSimple from "../components/WorksBlockSimple";
import WorksBlockSwiper from "../components/WorksBlockSwiper";
import WorksTop from "../components/WorksTop";
import WorksTopImage from "../components/WorksTopImage";

const topText = (
  <>
    <b>世界のニュースを検索できるツール</b>
    <br />
    カテゴリー、言語、キーワードからニュース記事の検索が行えます。
    <br />
    <br />
    Next.jsを使った開発を勉強する経緯で作成に至りました。
    <br />
    スタイリッシュなサイトを作るために、
    <br />
    ・「Framer Motion」を使用したアニメーション実装
    <br />
    ・画像読み込み時の仮画像表示
    <br />
    を行いました。
    <br />
    <br />
    <br />
    <a href="https://pf-newssearch-client.vercel.app/" target="_blank">
      <span>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" />
      </span>
      サイトを見る
    </a>
    <a href="https://github.com/ytoshiki/pf__newssearch-client" target="_blank">
      <span>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
      </span>
      コードを見る
    </a>
  </>
);

const technologyText = (
  <>
    <div className="c-works-block-simple__row">
      <div>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
      </div>
      <div className="c-works-block-simple__links">
        <a href="https://pf-newssearch-client.vercel.app/" target="_blank">
          <span>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" />
          </span>
          サイトを見る
        </a>
        <a
          href="https://github.com/ytoshiki/pf__newssearch-client"
          target="_blank"
        >
          <span>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
          </span>
          コードを見る
        </a>
      </div>
    </div>
  </>
);

export default function TheConnect() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <Head>
        <title>The Connect | Toshiki Yoshioka</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <WorksTop title="The Connect" text={topText} />
        <WorksTopImage bg="img-work-top-02.png" />
        <div className="l-container">
          <WorksBlockSwiper
            title="How To Use"
            images={[
              "img-the-connect-02.png",
              "img-the-connect-03.png",
              "img-the-connect-04.png",
              "img-the-connect-05.png",
            ]}
            texts={[
              "Fox News・BBCを含む世界各国のニュース記事を閲覧できます。トップページからはカテゴリーによる絞り込みが行えます。",
              "カテゴリーによる絞り込み検索結果が表示されます。",
              "右上の検索アイコンからはテキスト入力・言語選択による絞り込みが行えます。",
              "ヒットした検索結果が表示されます。",
            ]}
          />
          <WorksBlockSimple title="Technology Stack" text={technologyText} />
        </div>
      </div>
    </motion.div>
  );
}
