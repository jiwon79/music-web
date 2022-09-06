import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";

import useLoad from "utils/hooks/useLoad";
import styles from "styles/game/listener/Loading.module.scss";

export default function Loading() {
  const { loadText, loadAction } = useLoad({ timeToLoad: 4 });
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady)  return null;
    const resultType = getListenerType(JSON.parse(router.query.resultDict as string))
    const load = async () => {
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
