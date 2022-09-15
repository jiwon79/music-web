import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";

import useLoad from "lib/hooks/useLoad";
import styles from "pages/game/listener/loading/loading.module.scss";
import {listenerTypeMap} from "../../../../lib/game/listener/constant";

export default function ListenerLoadingPage() {
  const { loadText, loadAction } = useLoad({ timeToLoad: 4 });
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady)  return null;
    const resultType = getListenerType(JSON.parse(router.query.resultDict as string))
    const data = {
      sheetName: 'listener',
      answers: router.query.answers,
      resultNum: resultType,
      resultString: listenerTypeMap[resultType].name
    };
    console.log(data);

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
        pathname: '/game/listener/result/' + resultType
      });
    }
    load();
  }, [router.isReady]);

  const getListenerType = (resultDict: Record<string, number>): string => {
    let userType;
    let maxValue = 0;
    const items = Object.keys(resultDict);
    items.forEach((key) => {
      userType = maxValue < resultDict[key] ? key : userType;
      maxValue = maxValue < resultDict[key] ? resultDict[key] : maxValue;
    })
    return userType;
  }

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src="/icons/hotbeverage-light.png"
          alt="loading icon"
          width={76}
          height={76}
        />
      </div>
      <p className={styles.text}>Loading{loadText}</p>
    </div>
  )
}
