import { motion } from "framer-motion";
import Head from "next/head";
import WorksBlockSimple from "../components/WorksBlockSimple";
import WorksBlockSwiper from "../components/WorksBlockSwiper";
import WorksTop from "../components/WorksTop";
import WorksTopImage from "../components/WorksTopImage";

const topText = (
  <>
    <b></b>
    <br />
    カテゴリー・商品などの管理が行える仮想のECサイト
    <br />
    ・ユーザー・商品・売上のグラフ化
    <br />
    ・商品の登録
    <br />
    が行える簡易なCMSも別途作成
    <br />
    <br />
    「見た目や使い勝手に凝ったおしゃれなサイトを作りたい」という思いから作成に至りました。
    <br />
    サイトを作る中で「商品を登録や売上の管理などをグラフ化できたら面白そう」と思いたち簡易なCMSも作成しました。
    <br />
    <br />
    <br />
    ECサイト
    <br />
    <a href="https://w-ec.netlify.app/" target="_blank">
      <span>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" />
      </span>
      サイトを見る
    </a>
    <a href="https://github.com/ytoshiki/pf__ecommerce-client" target="_blank">
      <span>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
      </span>
      コードを見る(フロントエンド)
    </a>
    <a
      href="https://github.com/ytoshiki/pf__customer-data-server"
      target="_blank"
    >
      <span>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
      </span>
      コードを見る(バックエンド)
    </a>
    <br />
    <br />
    CMS
    <br />
    <a href="https://pf-customer-data-client.vercel.app/login" target="_blank">
      <span>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" />
      </span>
      サイトを見る
    </a>
    <a
      href="https://github.com/ytoshiki/pf__customer-data-client"
      target="_blank"
    >
      <span>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
      </span>
      コードを見る(フロントエンド)
    </a>
    <a
      href="https://github.com/ytoshiki/pf__customer-data-server"
      target="_blank"
    >
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
        <a href="https://w-ec.netlify.app/" target="_blank">
          <span>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" />
          </span>
          サイトを見る
        </a>
        <a
          href="https://github.com/ytoshiki/pf__ecommerce-client"
          target="_blank"
        >
          <span>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
          </span>
          コードを見る(フロントエンド)
        </a>
        <a
          href="https://github.com/ytoshiki/pf__customer-data-server"
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

export default function KanjiLearning() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <Head>
        <title>W | Toshiki Yoshioka</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <WorksTop title="W" text={topText} />
        <WorksTopImage bg="img-work-top-04.png" />
        <div className="l-container">
          <WorksBlockSwiper
            title="How To Use (EC)"
            images={[
              "img-ec-01.png",
              "img-ec-02.png",
              "img-ec-03.png",
              "img-ec-04.png",
              "img-ec-05.png",
              "img-ec-06.png",
              "img-ec-07.png",
            ]}
            texts={[
              "トップページでは、一番売れている商品・新しく追加された商品のギャラリーが表示されます。",
              "画面右上の検索アイコンからは絞り込み検索が可能です。ヒットした商品が表示されます。",
              "各カテゴリーページでは表示レイアウトの変更・商品の並び替えができます。",
              "商品詳細ページから「ADD TO CART」ボタンを押すことでカートに追加されます。そこからチェックアウトページへ飛ぶことができます。",
              "購入した商品の確認・レビューを書くことができます。",
              "商品レビューの編集も行えます。",
              "レビューを投稿すると製品詳細ページに反映されます。",
            ]}
          />
          <WorksBlockSwiper
            title="How To Use (CMS)"
            images={[
              "img-ca-01.png",
              "img-ca-02.png",
              "img-ca-03.png",
              "img-ca-04.png",
              "img-ca-05.png",
            ]}
            texts={[
              "ユーザー・商品・売上のビジュアル化が行えます。",
              "商品・カテゴリーの追加・編集・削除が行えます。",
              "商品・カテゴリーの追加・編集・削除が行えます。",
              "登録したユーザー・商品のリストアップが行えます。",
              "登録したユーザー・商品の詳細情報の確認が行えます。",
            ]}
          />
          <WorksBlockSimple title="Technology Stack" text={technologyText} />
        </div>
      </div>
    </motion.div>
  );
}
