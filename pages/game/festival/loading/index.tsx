import Image from "next/image";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";

import { ResultStandard } from "utils/game/festival/enums";
import { festivalTypeMap } from "utils/game/festival/constant";
import useLoad from "utils/hooks/useLoad";
import styles from "pages/game/festival/loading/loading.module.scss"

export default function LoadingPage() {
  const router = useRouter();
  const { loadText, loadAction } = useLoad({ timeToLoad: 4 });

  useEffect(() => {
    if (!router.isReady)  return null;
    const resultType = getFestivalType(JSON.parse(router.query.resultDict as string))
    const answers = router.query.answers;
    const data = {
      sheetName: 'festival',
      answers: answers,
      resultNum: festivalTypeMap[resultType].id,
      resultString: resultType
    };

    const load = async () => {
      fetch(typeof window === 'undefined'
        ? process.env.BASE_FETCH_URL
        : '' + '/api/sheet',
        {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
      })
      await loadAction();
      await router.replace({
        pathname: '/game/festival/result/' + String(resultType)
      });
    }
    load();
  }, [router.isReady]);

  const getFestivalType = (resultDict: Record<string, number>) => {
    let typeNum = 0;
    if (resultDict[ResultStandard.LIVELY] > resultDict[ResultStandard.CALM])  typeNum += 4;
    if (resultDict[ResultStandard.PLAN] > resultDict[ResultStandard.FREE])  typeNum += 2;
    if (resultDict[ResultStandard.OTAKU] > resultDict[ResultStandard.MOOD]) typeNum += 1;
    return typeNum === 0 ? 1 : typeNum;
  }
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Festival Type | Loading</title>
      </Head>
      <Image
          src="/game/festival/Balloon.png"
          alt="balloon image"
          className={styles.image}
          width={105}
          height={178}/>
      <p className={styles.text__load}>
        당신의 캐릭터를<br />
        찾고 있어요{loadText}
      </p>
    </div>
  )
}
