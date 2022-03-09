import { useEffect } from 'react';
import Head from "next/head";

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function KakaoShare() {
  useEffect(() => {
    return () => {
      initKakao();
    };
  }, []);

  const initKakao = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init(process.env.NEXT_PUBLIC_KAKAO_KEY);
      }
    }
  }


  const shareKakao = () => {
    const url = window.location.href;
    initKakao();
    console.log(window.Kakao.Link);

    window.Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: 'title',
        description: "내용!",
        imageUrl: 'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
        link: {
          mobileWebUrl: url,
          androidExecParams: "test",
        },
      },
      buttons: [
        {
          title: "웹으로 이동",
          link: {
            mobileWebUrl: url,
          },
        },
      ],
    });

  };

  return (
    <div className="Kakao">
      <Head>
        {/*<script async src="https://developers.kakao.com/sdk/js/kakao.js"></script>*/}
        <script async src="https://developers.kakao.com/sdk/js/kakao.min.js"></script>
        <title>리스너 타입</title>
      </Head>

      <button id="kakao-link-btn" onClick={shareKakao}>
        <p>kakao</p>
      </button>
    </div>
  );
}
