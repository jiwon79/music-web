import Link from "next/link";

import Header from "../../../components/listener-type/Header/";
import MusicBar from "../../../components/listener-type/MusicBar/";
import Menu from "../../../components/listener-type/Menu/";

import styles from "../../../styles/listener-type/Result.module.scss"
import {listenerTypeList} from "../../../utils/constant";
import {listenerType} from "../../../utils/types";
import Description from "../../../components/listener-type/Description";

interface props {
  listenerType: listenerType
}

export default function ResultPage({ listenerType }: props) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
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
        </div>

        <Description
          title={"나는 음악을 들을 때,"}
          descList={listenerType.listenMusic}
        />
        <Description
          title={"나는 이럴 때 음악을 찾는다!"}
          descList={listenerType.findMusic}
        />


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
      </div>
      <Menu/>
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
