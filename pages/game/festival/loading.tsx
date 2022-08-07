import Image from "next/image";
import useLoad from "../../../utils/hooks/useLoad";
import {useEffect} from "react";
import {useRouter} from "next/router";
import {ResultStandard} from "../../../utils/game/festival/enums";
import styles from "../../../styles/game/festival/Loading.module.scss"

export default function LoadingPage() {
  const router = useRouter();
  const {loadText, loadAction} = useLoad({ timeToLoad: 4 });

  useEffect(() => {
    if (!router.isReady)  return null;
    const resultType = getFestivalType(JSON.parse(router.query.resultDict as string))
    const load = async () => {
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
      <Image
          src="/game/festival/balloon.svg"
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
