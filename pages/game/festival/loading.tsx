import useLoad from "../../../utils/hooks/useLoad";
import {useEffect} from "react";
import {useRouter} from "next/router";
import {ResultStandard} from "../../../utils/game/festival/enums";

export default function LoadingPage() {
  const router = useRouter();
  const {loadText, loadAction} = useLoad(4);

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
    return typeNum;
  }
  
  return (
    <div>
      <p>loading page</p>
      <p>{loadText}</p>
    </div>
  )
}
