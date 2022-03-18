import Link from "next/link";

import Header from "../../../components/listener-type/Header/";
import MusicBar from "../../../components/listener-type/MusicBar/";
import Border from "../../../components/listener-type/Border/";

import styles from "../../../styles/listener-type/Result.module.scss"
import {listenerTypeList} from "../../../utils/constant";
import {listenerType} from "../../../utils/types";
import Description from "../../../components/listener-type/Description";
import Album from "../../../components/listener-type/Album";
import KakaoShare from "../../../components/listener-type/KakaoShare";
import TwitterShare from "../../../components/listener-type/TwitterShare";
import FacebookShare from "../../../components/listener-type/FacebookShare";
import UrlCopy from "../../../components/listener-type/UrlCopy";

interface props {
  listenerType: listenerType
}

export default function ResultPage({ listenerType }: props) {
  return (
    <div className={styles.container}>
      <Header title={"Hello, CLASSIC!"}/>
      <MusicBar />

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
        {listenerType.recommend.map((music) =>
          <Album
            key={JSON.stringify(music)}
            music={music}
          />
        )}
      </div>

      <div className={styles.action}>
        <Link href={"/listener-type/"}>
          <a>
            <div className={styles.button}>
              <p>Retry?</p>
            </div>
          </a>
        </Link>
        <Link href={"/listener-type/"}>
          <a>
            <div className={styles.button}>
              <p>Share!</p>
            </div>
          </a>
        </Link>
      </div>

      <KakaoShare />
      <TwitterShare url={"https://music-web-indol.vercel.app/listener-type"} text={"text는 뭐하지"}/>
      <FacebookShare url={"https://music-web-indol.vercel.app/listener-type"}/>
      <UrlCopy url={"https://music-web-indol.vercel.app/listener-type"}/>
    </div>
  )
}

export function getStaticProps({ params }) {
  return {
    props: {
      listenerType: listenerTypeList[params.id]
    }
  }
}


export async function getStaticPaths() {
  return  {
    paths: [
      { params: { id: '0' }}
    ],
    fallback: false
  }
}
