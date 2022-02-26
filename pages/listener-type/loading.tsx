import Header from "../../components/listener-type/Header";
import styles from "../../styles/listener-type/Loading.module.scss";
import {useEffect, useRef, useState} from "react";

export default function Loading() {
  const loading = useRef<string>('결과 분석 중.');
  const [loadingText, setLoadingText] = useState('결과 분석 중.');

  useEffect(() => {
    setInterval(function() {
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
      console.log(loading.current);
      console.log(1);
    }, 1000);
  }, []);


  return (
    <div className={styles.container}>
      <Header title={""} />
      <div className={styles.content}>
        <div className={styles.image}>
        </div>
        <p className={styles.text}>{loadingText}</p>
      </div>
    </div>
  )
}
