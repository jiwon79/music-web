import {useEffect} from 'react';
import Head from "next/head";
import styles from "./../../common/ShareButton/shareButton.module.scss"

declare global {
  interface Window {
    Kakao: any;
  }
}

interface Props {
  content: {
    title: string,
    description: string,
    imageUrl: string,
    link: {
      mobileWebUrl: string,
    }
  },
  children: JSX.Element,
  className: string,
}

export default function KakaoShare({ content, children, className }: Props) {
  useEffect(() => {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init(process.env.NEXT_PUBLIC_KAKAO_KEY);
    }
  }, []);

  const shareKakao = () => {
    window.Kakao.Link.sendDefault({
      objectType: "feed",
      content: content,
      buttons: [
        {
          title: "웹으로 이동",
          link: {
            mobileWebUrl: content.link.mobileWebUrl,
          },
        },
      ],
    });

  };

  return (
    <div className={styles.shareButton}>
      <Head>
        <script async src="https://developers.kakao.com/sdk/js/kakao.min.js"></script>
        <title>{content.title}</title>
      </Head>
      <button onClick={shareKakao} className={className}>
        {children}
      </button>
    </div>
  );
}
