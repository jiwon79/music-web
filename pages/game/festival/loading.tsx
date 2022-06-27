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
    console.log(resultType)
  }, [router.isReady]);

  const getFestivalType = (resultDict: Record<string, number>) => {
    var typeNum = 0;
    if (resultDict[ResultStandard.LIVELY] > resultDict[ResultStandard.CALM])  typeNum += 4;
    if (resultDict[ResultStandard.PLAN] > resultDict[ResultStandard.FREE])  typeNum += 2;
    if (resultDict[ResultStandard.OTAKU] > resultDict[ResultStandard.MOOD]) typeNum += 1;
    return typeNum;
  }

  useEffect(() => {
    const load = async () => {
      await loadAction();
      // const festivalType = getFestivalType(resultDict);
      // console.log(festivalType);
    }
    load();
  }, []);
  
  return (
    <div>
      <p>loading page</p>
      <p>{loadText}</p>
    </div>
  )
}
