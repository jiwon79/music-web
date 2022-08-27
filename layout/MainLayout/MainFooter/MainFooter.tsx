import styles from './MainFooter.module.scss';
import Link from "next/link";
import React from "react";

const MainFooter = () => {
  return (
    <footer className={styles.footer}>
      <Link href={"#1"}>
        <div className={styles.footer__item}>
          홈
        </div>
      </Link>
      <Link href={"#2"}>
        <div className={styles.footer__item}>
          타임X뮤직
        </div>
      </Link>
      <Link href={"#3"}>
        <div className={styles.footer__item}>
          플레이리스트
        </div>
      </Link>
      <Link href={"#4"}>
        <div className={styles.footer__item}>
          게임/테스트
        </div>
      </Link>
    </footer>
  )
}

export default MainFooter;
