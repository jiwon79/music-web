import Link from "next/link"
import Head from 'next/head'

import styles from "../../../styles/game/festival/index.module.scss"

export default function FestivalType() {
  return (
    <div>
      <Head>
        <title>Festival Type</title>
        <meta property="og:type" content="game"/>
        <meta property="og:title" content="Festival-type Test"/>
        <meta property="og:description" content="Festival type test description"/>
        <meta property="og:image"
              content="https://cdn.discordapp.com/attachments/734479328338903114/976769139509182514/music.png"/>
      </Head>

      <div className={styles.container}>
        <p>당신의 페스티벌 타입은?</p>
        <Link href={"/game/festival/test"}><p>테스트 시작하기</p></Link>
      </div>
    </div>
  )
}
