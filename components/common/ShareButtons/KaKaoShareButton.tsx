import {useEffect} from 'react';
import Head from "next/head";

declare global {
  interface Window {
    Kakao: any;
  }
}

export interface KaKaoProps {
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

const KaKaoShareButton: React.FC<KaKaoProps> = ({ content, children, className }) => {
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
    <>
      <Head>
        <script async src="https://developers.kakao.com/sdk/js/kakao.min.js"></script>
        <title>{content.title}</title>
      </Head>
      <button onClick={shareKakao} className={className}>
        {children}
      </button>
    </>
  );
}

export default KaKaoShareButton
