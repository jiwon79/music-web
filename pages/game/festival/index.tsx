import Link from "next/link";
import Head from 'next/head';
import Image from "next/image";
import { useRouter } from "next/router";

import ShareButton from "components/common/ShareButtons";
import Firework from "/public/game/festival/firework.svg";
import styles from "styles/game/festival/index.module.scss";
import { BASE_URL } from "utils/constants";

export default function FestivalType() {
  const router = useRouter();

    return (
    <div className={styles.container}>
      <Head>
        <title>Festival Type</title>
        <meta property="og:type" content="game"/>
        <meta property="og:title" content="당신이 페스티벌을 즐기는 방법"/>
        <meta property="og:description" content="뮤직 페스티벌 즐기는 유형 알아보기"/>
        <meta property="og:image"
              content="https://user-images.githubusercontent.com/59159410/184649819-2552f0ad-8410-41d5-bbdb-095cae625403.png"/>
      </Head>
      <Firework className={styles.firework} />
      <p className={styles.title}>
        당신이<br/>
        <span>페스티벌</span>을<br/>
        즐기는 방법.
      </p>
      <div className={styles.illus_wrap_top}>
        <div className={styles.illus_item}>
          <Image src={'/game/festival/1_illus.png'} width={100} height={100} />
        </div>
        <div className={styles.illus_item}>
          <Image src={'/game/festival/2_illus.png'} width={100} height={100} />
        </div>
        <div className={styles.illus_item}>
          <Image src={'/game/festival/3_illus.png'} width={100} height={100} />
        </div>
      </div>
      <div className={styles.illus_wrap_bottom}>
        <div className={styles.illus_item}>
          <Image src={'/game/festival/4_illus.png'} width={100} height={100} />
        </div>
        <div className={styles.illus_item}>
          <Image src={'/game/festival/5_illus.png'} width={100} height={100} />
        </div>
        <div className={styles.illus_item}>
          <Image src={'/game/festival/6_illus.png'} width={100} height={100} />
        </div>
        <div className={styles.illus_item}>
          <Image src={'/game/festival/7_illus.png'} width={100} height={100} />
        </div>
      </div>
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
  )
}
