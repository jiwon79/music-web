import Link from "next/link"
import Image from 'next/image'
import Head from 'next/head'

import styles from "../../styles/listener-type/index.module.scss"
import Header from "./../../components/listener-type/Header/"
import Menu from "../../components/listener-type/Menu/";
import MusicBar from "../../components/listener-type/MusicBar";

export default function ListenerType() {
  return (
    <div>
      <Head>
        <title>Listener Type</title>
        <meta property="og:type" content="game"/>
        <meta property="og:title" content="Listener-type Test"/>
        <meta property="og:description" content="listener type test description"/>
        <meta property="og:image"
              content="https://cdn.discordapp.com/attachments/734479328338903114/976769139509182514/music.png"/>
      </Head>

      <div className={styles.container}>
        <Header title={"What's your listener type?"}/>
        <MusicBar/>
        <div className={styles.title}>
          L.istener<br/>
          T.ype<br/>
          T.est
        </div>

        <div className={styles.content}>
          <Link href={"/listener-type/test"}>
            <a className={styles.startButton}>
              <div>
                <Image
                  src={"/icons/musicalnote-light.png"}
                  alt={"start button"}
                  width={76}
                  height={76}
                />
                <p>START</p>
              </div>
            </a>
          </Link>
          <p className={styles.content__title}>
            Hello, World!
          </p>
          <p className={styles.content__desc}>
            Music is the art of arranging sounds in time through the elements of melody, harmony, rhythm, and timbre. It
            is one of the universal cultural aspects of all human societies. General definitions of music include common
            elements such as pitch rhythm (and its associated concepts tempo, meter, and articulation), dynamics, and
            the sonic qualities of timbre and texture. Different styles or types of music may emphasize, de-emphasize or
            omit some of these elements
          </p>
        </div>
      </div>
      <Menu/>
    </div>
  )
}
