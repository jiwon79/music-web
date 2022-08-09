import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import classNames from "classnames";

import ShareButton from "components/common/ShareButtons";
import FacebookIcon from "/public/game/festival/facebook_icon.svg";
import KaKaoIcon from "/public/game/festival/kakao_icon.svg";
import TwitterIcon from "/public/game/festival/twitter_icon.svg";
import UrlIcon from "/public/game/festival/url_icon.svg";

import {festivalTypeMap, recommendFestivalList} from "utils/game/festival/constant";
import { BASE_URL } from "utils/constants";
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

  return (
    <div className={styles.container}>
      <div className={styles.title__wrap}>
        <p className={styles.title}>{festivalType.name}</p>
        <div className={styles.illus}></div>
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
                title: "Festival Type 게임",
                description: "내용!",
                imageUrl: "https://www.esn.org/blog/sites/default/files/imce/576364502a3f379b77617193680e21ff.jpg",
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
            <ShareButton.Twitter url={shareUrl} text={"Festival Type Game"} className={styles.button__share}>
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
