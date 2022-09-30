import React from "react";
import { useRouter } from "next/router";
import cx from 'classnames';
import HomeIcon from '/public/icons/ic_home.svg';
import TimeIcon from '/public/icons/ic_time.svg';
import PlayListIcon from '/public/icons/ic_playlist.svg';
import GameIcon from '/public/icons/ic_game.svg';
import Link from "next/link";
import styles from './MainFooter.module.scss';

const MainFooter = () => {
  const { pathname } = useRouter();
  const type = pathname.split('/')[1];

  return (
    <footer className={styles.footer}>
      <Link href={"/"}>
        <div className={cx(
          styles.footer__item, {[styles.active]: type === '' }
        )}>
          <HomeIcon />
          <p className={styles.label}>홈</p>
        </div>
      </Link>
      <Link href={"/time"}>
        <div className={cx(
          styles.footer__item, {[styles.active]: type === 'time' }
        )}>
          <TimeIcon />
          <p className={styles.label}>타임X뮤직</p>
        </div>
      </Link>
      <Link href={"/playlist"}>
        <div className={cx(
          styles.footer__item, {[styles.active]: type === 'playlist' }
        )}>
          <PlayListIcon />
          <p className={styles.label}>플레이리스트</p>
        </div>
      </Link>
      <Link href={"/game"}>
        <div className={cx(
          styles.footer__item, {[styles.active]: type === 'game' }
        )}>
          <GameIcon />
          <p className={styles.label}>게임/테스트</p>
        </div>
      </Link>
    </footer>
  )
}

export default MainFooter;
