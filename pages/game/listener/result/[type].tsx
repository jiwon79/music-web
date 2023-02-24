import Link from "next/link";

import Header from "components/listener-type/Header";
import MusicBar from "components/listener-type/MusicBar";
import Border from "components/listener-type/Border";
import Description from "components/listener-type/Description";
import Album from "components/listener-type/Album";
import ShareButton from "components/common/ShareButtons";

import LinkShareIcon from "public/icons/ic_share.svg";
import FacebookShareIcon from "public/icons/ic_facebook.svg";
import TwitterShareIcon from "public/icons/ic_twitter.svg";
import KaKaoShareIcon from "public/icons/ic_kakao.svg";

import styles from "./result.module.scss"
import {listenerTypeMap} from "lib/game/listener/constant";
import {listenerType} from "lib/game/listener/types";

interface props {
  listenerType: listenerType
}

export default function ResultPage({listenerType}: props) {
  return (
    <div className={styles.container}>
      <Header title={"Hello, CLASSIC!"}/>
      <MusicBar/>

      <div className={styles.music}>
        <p className={styles.music__play}>00:03 / 2:35</p>
        <p className={styles.music__title}>{listenerType.recommend[0].title}</p>
        <p className={styles.music__artist}>{listenerType.recommend[0].artist}</p>
      </div>

      <div className={styles.listenerType}>
        <p className={styles.typeName}>{listenerType.name}</p>
        <p className={styles.typeDesc}>{listenerType.description}</p>

        <p className={styles.title}>음악과 함께할 때, KEYWORD!</p>
        <div className={styles.keywords}>
          {listenerType.keywords.map(keyword =>
            <Border innerWidth={12} outerWidth={84} key={keyword}>
              <p>{keyword}</p>
            </Border>
          )}
        </div>
      </div>

      <Description
        title={"나는 음악을 들을 때,"}
        descList={listenerType.listenMusic}
      />
      <Description
        title={"내가 음악을 찾을 때,"}
        descList={listenerType.findMusic}
      />
      <Description
        title={"좋아하는 음악을 즐길 때,"}
        descList={listenerType.enjoyMusic}
      />

      <div className={styles.recommend}>
        <p className={styles.title}>이런 음악과 잘 맞으실 거에요!</p>
        {listenerType.recommend.map((music, index) =>
          <Album
            key={JSON.stringify(music)}
            type={listenerType.type}
            music={music}
            index={index}
          />
        )}
      </div>

      <p className={styles.shareTitle}>공유하기</p>

      <div className={styles.shares}>
        <ShareButton.KaKao
          content={{
            title: '리스너 타입',
            description: "내용!",
            imageUrl: 'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
            link: {
              mobileWebUrl: "https://music-web-indol.vercel.app/game/listener/result/" + listenerType.type,
            }
          }}
          className={styles.shareButton}
        >
          <KaKaoShareIcon fill={"#fff"} width={"32px"} height={"32px"} />
        </ShareButton.KaKao>
        <ShareButton.Twitter
          url={"https://music-web-indol.vercel.app/game/listener/result/" + listenerType.type}
          text={"twitter share text"}
          className={styles.shareButton}
        >
          <TwitterShareIcon fill={"#fff"} width={"40px"} height={"40px"}/>
        </ShareButton.Twitter>
        <ShareButton.Facebook
          url={"https://music-web-indol.vercel.app/game/listener/result/" + listenerType.type}
          className={styles.shareButton}
        >
          <div className={`${styles.icon} ${styles.icon__facebook}`}>
            <FacebookShareIcon fill={"#fff"} width={"32px"} height={"32px"} />
          </div>
        </ShareButton.Facebook>
        <ShareButton.Url
          url={"https://music-web-indol.vercel.app/game/listener/result/" + listenerType.type}
          className={styles.shareButton}
        >
          <div className={`${styles.icon} ${styles.icon__link}`}>
            <LinkShareIcon width={"32px"} height={"32px"} />
          </div>
        </ShareButton.Url>
      </div>

      <Link href={"/game/listener"}>
        <div className={styles.action}>
          <p>Retry?</p>
        </div>
      </Link>

    </div>
  )
}

export function getStaticProps({params}) {
  return {
    props: {
      listenerType: listenerTypeMap[params.type]
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      {params: {type: 'cherish'}},
      {params: {type: 'innocent'}},
      {params: {type: 'antique'}},
      {params: {type: 'bizarre'}},
      {params: {type: 'tender'}},
      {params: {type: 'spontaneous'}},
      {params: {type: 'puzzling'}},
      {params: {type: 'candid'}},
    ],
    fallback: false
  }
}
