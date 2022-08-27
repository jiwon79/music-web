import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import {useEffect} from "react";
import classNames from "classnames/bind";

import ShareButton from "components/common/ShareButtons";
import FacebookIcon from "/public/game/festival/facebook_icon.svg";
import KaKaoIcon from "/public/game/festival/kakao_icon.svg";
import TwitterIcon from "/public/game/festival/twitter_icon.svg";
import UrlIcon from "/public/game/festival/url_icon.svg";

import festivalGameAPI from "lib/api/game/festival";
import { BASE_URL } from "utils/constants";
import {festivalTypeMap, recommendFestivalList, oldRecommendFestivalList} from "utils/game/festival/constant";
import { FestivalType } from "utils/game/festival/type";
import replaceLineBreak from "lib/utils/function";
import styles from "pages/game/festival/result/result.module.scss"

const cx = classNames.bind(styles);

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
        <a href="https://www.instagram.com/shop.boringboring/">
          <p className={styles.illus_id}>@shop.boringboring</p>
        </a>
      </div>
      <div className={styles.desc__wrap}>
        <p className={styles.desc__title}>캐릭터 알아보기</p>
        {festivalType.descriptions.map((desc, idx) =>
          <div
            key={desc}
            className={classNames(styles.desc, {[styles.desc__underline]: idx !== lastIdx})}
          >
            {replaceLineBreak(desc)}
          </div>
        )}

        <p className={styles.festival__wrap__title}>2022 페스티벌 소개</p>
        <p className={styles.festival__wrap__title__sub}>
          곧 다가올, 여러분이 주인공이 될 페스티벌!
        </p>
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

        <p className={styles.festival__wrap__title__sub}>
          내년을 기약해도 좋은 웰메이드 페스티벌!
        </p>
        <div className={styles.festival__wrap}>
          {oldRecommendFestivalList.map((festival) =>
            <div className={styles.festival} key={festival.title}>
              <div className={cx('festival__img', 'img__cover')}>
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

        <div className={styles.footer}>
          <p>광고 및 후원 문의</p>
          <p>Advertising and Sponsorship Contact</p>
          <a href="mailto:riina3333@naver.com">
            <p>riina3333@naver.com</p>
          </a>
          <p>&copy;영코퍼레이션 All Rights Reserved. 2022.</p>
        </div>


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
