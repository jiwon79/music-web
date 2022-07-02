import Link from "next/link"
import Head from 'next/head'
import Image from "next/image";

import ShareButton from "../../../components/common/ShareButtons";
import styles from "../../../styles/game/festival/index.module.scss"
import {useRouter} from "next/router";
import {BASE_URL} from "../../../utils/constants";

export default function FestivalType() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Festival Type</title>
        <meta property="og:type" content="game"/>
        <meta property="og:title" content="Festival-type Test"/>
        <meta property="og:description" content="Festival type test description"/>
        <meta property="og:image"
              content="https://cdn.discordapp.com/attachments/734479328338903114/976769139509182514/music.png"/>
      </Head>

      <Image
        src={"/game/festival/background.png"}
        alt={"background"}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <div className={styles.container}>
        <p className={styles.title}>당신이<br/>페스티벌을<br/>즐기는 방법.</p>
        <div className={styles.button__wrap}>
          <Link href={"/game/festival/test"} passHref>
            <button className={styles.start}>
              <p>테스트 시작하기</p>
            </button>
          </Link>
          <ShareButton.Url className={styles.share} url={BASE_URL+router.pathname}>
            <p>공유하기</p>
          </ShareButton.Url>
        </div>
      </div>
    </>
  )
}
