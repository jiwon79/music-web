import styles from "../../styles/listener-type/Loading.module.scss";
import {useEffect, useRef, useState} from "react";
import {useRouter} from "next/router";
import Image from "next/image";

export default function Loading() {
  const router = useRouter();
  const loading = useRef<string>('결과 분석 중.');
  const [loadingText, setLoadingText] = useState('결과 분석 중.');
  const [isLoading, setIsLoading] = useState(true);
  const [repeat, setRepeat] = useState();
  const delay = (timeToDelay) => new Promise((resolve) => setTimeout(resolve, timeToDelay))
  console.log(router.query)
  let typeNum = 0;
  let type = router.query.result;
  console.log(type);
  if (type == 'cherish') {
    typeNum = 0;
  } else if (type == 'innocent') {
    typeNum = 1;
  } else if (type == 'antique') {
    typeNum = 2;
  } else if (type == 'bizarre') {
    typeNum = 3
  } else if (type == 'tender') {
    typeNum = 4
  } else if (type == 'spontaneous') {
    typeNum = 5
  } else if (type == 'puzzling') {
    typeNum = 6
  } else {
    typeNum = 7
  }
  console.log(typeNum)

  useEffect(() => {
    async function wait() {
      await delay(4000);
      setIsLoading(false);
      const resultType = router.query.result;
      console.log(typeof(resultType));
      console.log(resultType);

      await router.push({
        pathname: '/listener-type/result/' + String(typeNum)
      });
    }
    wait();
  }, [])

  useEffect(() => {
    let interval;
    if (isLoading) {
      interval = setInterval(function () {
        console.log(loading.current);
        if (loading.current === '결과 분석 중.') {
          loading.current = '결과 분석 중..';
          setLoadingText('결과 분석 중..');
        } else if (loading.current === '결과 분석 중..') {
          loading.current = '결과 분석 중...';
          setLoadingText('결과 분석 중...');
        } else {
          loading.current = '결과 분석 중.';
          setLoadingText('결과 분석 중.');
        }
      }, 1000);
      setRepeat(interval)
    } else {
      clearInterval(repeat);
    }
  }, [isLoading]);


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
      <p className={styles.text}>{loadingText}</p>
    </div>
  )
}
