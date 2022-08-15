import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import {useEffect} from "react";
import classNames from "classnames";

import ShareButton from "components/common/ShareButtons";
import FacebookIcon from "/public/game/festival/facebook_icon.svg";
import KaKaoIcon from "/public/game/festival/kakao_icon.svg";
import TwitterIcon from "/public/game/festival/twitter_icon.svg";
import UrlIcon from "/public/game/festival/url_icon.svg";

import festivalGameAPI from "lib/api/game/festival";
import { BASE_URL } from "utils/constants";
import {festivalTypeMap, recommendFestivalList} from "utils/game/festival/constant";
import { FestivalType } from "utils/game/festival/type";
import replaceLineBreak from "lib/utils/function";
import styles from "styles/game/festival/Result.module.scss"

interface ResultPageProps {
  festivalType: FestivalType
}

export default function ResultPage({ festivalType }: ResultPageProps) {
  const router = useRouter();
  const shareUrl: string = BASE_URL + router.asPath;
  const lastIdx = festivalType.descriptions.length - 1;
  useEffect(() => {
    festivalGameAPI.postResult(festivalType.enName);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title></title>
        <meta property="og:type" content="game" />
        <meta property="og:title" content={festivalType.name} />
        <meta property="og:description" content="뮤직 페스티벌을 즐기는 유형" />
        <meta property="og:image" content={festivalType.public_image_url} />
      </Head>

      <div className={styles.title__wrap}>
        <p className={styles.title}>{festivalType.name}</p>
        <div className={styles.illus}>
          <Image src={`/game/festival/${festivalType.id}_illus.png`} width={180} height={180} />
        </div>
      </div>
      <div className={styles.desc__wrap}>
        <p className={styles.desc__title}>캐릭터 알아보기</p>
        {festivalType.descriptions.map((desc, idx) =>
          <div
            key={idx}
            className={classNames(styles.desc, {[styles.desc__underline]: idx !== lastIdx})}
          >
            {replaceLineBreak(desc)}
          </div>
        )}

          <p className={styles.festival__wrap__title}>2022 페스티벌 소개</p>
          <div className={styles.festival__wrap}>
            {recommendFestivalList.map((festival) =>
                <div className={styles.festival} key={festival.title}>
                  <div className={styles.festival__img}>
                    <Image src={festival.image_url} width={280} height={280} />
                  </div>
                  <p className={styles.festival__title}>{festival.title}</p>
                  <p className={styles.festival__desc}>{festival.desc}</p>
                  <p className={styles.festival__time}>{festival.time}</p>
                </div>
            )}
          </div>

          <div className={styles.buttons__wrap}>
            <ShareButton.KaKao
              className={styles.button__share}
              content={{
                title: "당신이 페스티벌을 즐기는 방법",
                description: festivalType.name,
                imageUrl: festivalType.public_image_url,
                link: {
                  mobileWebUrl: shareUrl,
                }
              }}
            >
              <KaKaoIcon width={24} height={24} />
            </ShareButton.KaKao>
            <ShareButton.Facebook url={shareUrl} className={styles.button__share}>
              <FacebookIcon width={24} height={24} />
            </ShareButton.Facebook>
            <ShareButton.Twitter
                url={shareUrl}
                className={styles.button__share}
                text={"당신이 페스티벌을 즐기는 방법 - " + festivalType.name}
            >
              <TwitterIcon width={24} height={24} />
            </ShareButton.Twitter>
            <ShareButton.Url url={shareUrl} className={styles.button__share}>
              <UrlIcon width={24} height={24} />
            </ShareButton.Url>
          </div>

          <Link href={"/game/festival"} passHref>
            <button className={styles.retry}>테스트 다시하기</button>
          </Link>
      </div>
    </div>
  )
}

export function getStaticProps({ params }) {
  return {
    props: {
      festivalType: festivalTypeMap[params.id]
    }
  }
}

export async function getStaticPaths() {
  return  {
    paths: [
      { params: { id: '1' }},
      { params: { id: '2' }},
      { params: { id: '3' }},
      { params: { id: '4' }},
      { params: { id: '5' }},
      { params: { id: '6' }},
      { params: { id: '7' }},
    ],
    fallback: false
  }
}
